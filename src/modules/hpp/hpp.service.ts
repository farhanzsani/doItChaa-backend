import { prisma } from '../../config/prisma';
import { CalculateHppInput, QueryHppInput } from './hpp.schema';
import { NotFoundError, ValidationError } from '../../common/errors';
import { settingsService } from '../settings/settings.service';

export class HppService {
  async calculateHpp(userId: string, data: CalculateHppInput) {
    const { productName, materials, estimatedHours, profitMarginPercentage } = data;

    // Get user settings
    const settings = await settingsService.getSettings(userId);

    // Validate all materials exist and belong to user
    const materialIds = materials.map((m) => m.materialId);
    const foundMaterials = await prisma.material.findMany({
      where: {
        id: { in: materialIds },
        userId,
      },
    });

    if (foundMaterials.length !== materialIds.length) {
      throw new NotFoundError('One or more materials not found');
    }

    // Calculate total material cost
    let totalMaterialCost = 0;
    const materialUsages = materials.map((usage) => {
      const material = foundMaterials.find((m: any) => m.id === usage.materialId);
      if (!material) {
        throw new NotFoundError(`Material ${usage.materialId} not found`);
      }

      const totalPrice = Math.round(usage.quantity * material.price);
      totalMaterialCost += totalPrice;

      return {
        materialId: usage.materialId,
        materialName: material.name,
        quantity: usage.quantity,
        unit: material.unit,
        unitPrice: material.price,
        totalPrice,
      };
    });

    // Calculate labor cost
    const totalLaborCost = Math.round(estimatedHours * settings.laborCostPerHour);

    // Calculate total HPP
    const totalHpp = totalMaterialCost + totalLaborCost;

    // Use provided profit margin or default from settings
    const profitMargin = profitMarginPercentage ?? settings.profitMarginMin;

    // Calculate selling price before tax
    const sellingPriceBeforeTax = Math.round(totalHpp * (1 + profitMargin / 100));

    // Calculate tax amount
    const taxAmount = Math.round(sellingPriceBeforeTax * (settings.taxPercentage / 100));

    // Calculate final selling price (with tax)
    const finalSellingPrice = sellingPriceBeforeTax + taxAmount;

    return {
      productName,
      materialUsages,
      totalMaterialCost,
      totalLaborCost,
      estimatedHours,
      totalHpp,
      profitMarginPercentage: profitMargin,
      taxPercentage: settings.taxPercentage,
      sellingPriceBeforeTax,
      taxAmount,
      finalSellingPrice,
      breakdown: {
        materials: totalMaterialCost,
        labor: totalLaborCost,
        subtotal: totalHpp,
        profit: sellingPriceBeforeTax - totalHpp,
        tax: taxAmount,
        total: finalSellingPrice,
      },
    };
  }

  async saveHppCalculation(userId: string, data: CalculateHppInput) {
    const calculation = await this.calculateHpp(userId, data);

    try {
      const savedCalculation = await prisma.hppCalculation.create({
        data: {
          productName: calculation.productName,
          totalMaterialCost: calculation.totalMaterialCost,
          totalLaborCost: calculation.totalLaborCost,
          estimatedHours: calculation.estimatedHours,
          totalHpp: calculation.totalHpp,
          profitMarginPercentage: calculation.profitMarginPercentage,
          taxPercentage: calculation.taxPercentage,
          sellingPriceBeforeTax: calculation.sellingPriceBeforeTax,
          taxAmount: calculation.taxAmount,
          finalSellingPrice: calculation.finalSellingPrice,
          userId,
          materialUsage: {
            create: data.materials.map((material) => {
              const materialData = calculation.materialUsages.find(
                (m) => m.materialId === material.materialId
              );
              return {
                materialId: material.materialId,
                quantity: material.quantity,
                unitPrice: materialData!.unitPrice,
                totalPrice: materialData!.totalPrice,
              };
            }),
          },
        },
        include: {
          materialUsage: {
            include: {
              material: true,
            },
          },
        },
      });

      return savedCalculation;
    } catch (error) {
      throw new ValidationError('Failed to save HPP calculation');
    }
  }

  async getHppCalculations(userId: string, query: QueryHppInput) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;

    const where = {
      userId,
      ...(search && {
        productName: { contains: search, mode: 'insensitive' as const },
      }),
    };

    const [calculations, total] = await Promise.all([
      prisma.hppCalculation.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
        include: {
          materialUsage: {
            include: {
              material: true,
            },
          },
        },
      }),
      prisma.hppCalculation.count({ where }),
    ]);

    return {
      data: calculations,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getHppCalculationById(userId: string, calculationId: string) {
    const calculation = await prisma.hppCalculation.findUnique({
      where: { id: calculationId },
      include: {
        materialUsage: {
          include: {
            material: true,
          },
        },
      },
    });

    if (!calculation) {
      throw new NotFoundError('HPP calculation not found');
    }

    if (calculation.userId !== userId) {
      throw new ValidationError('You do not have permission to access this calculation');
    }

    return calculation;
  }

  async deleteHppCalculation(userId: string, calculationId: string) {
    const calculation = await this.getHppCalculationById(userId, calculationId);

    try {
      await prisma.hppCalculation.delete({
        where: { id: calculation.id },
      });

      return { message: 'HPP calculation deleted successfully' };
    } catch (error) {
      throw new ValidationError('Failed to delete HPP calculation');
    }
  }
}

export const hppService = new HppService();
