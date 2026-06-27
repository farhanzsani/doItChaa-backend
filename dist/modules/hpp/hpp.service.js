"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hppService = exports.HppService = void 0;
const prisma_1 = require("../../config/prisma");
const errors_1 = require("../../common/errors");
const settings_service_1 = require("../settings/settings.service");
class HppService {
    async calculateHpp(userId, data) {
        const { productName, materials, estimatedHours, profitMarginPercentage } = data;
        // Get user settings
        const settings = await settings_service_1.settingsService.getSettings(userId);
        // Validate all materials exist and belong to user
        const materialIds = materials.map((m) => m.materialId);
        const foundMaterials = await prisma_1.prisma.material.findMany({
            where: {
                id: { in: materialIds },
                userId,
            },
        });
        if (foundMaterials.length !== materialIds.length) {
            throw new errors_1.NotFoundError('One or more materials not found');
        }
        // Calculate total material cost
        let totalMaterialCost = 0;
        const materialUsages = materials.map((usage) => {
            const material = foundMaterials.find((m) => m.id === usage.materialId);
            if (!material) {
                throw new errors_1.NotFoundError(`Material ${usage.materialId} not found`);
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
    async saveHppCalculation(userId, data) {
        const calculation = await this.calculateHpp(userId, data);
        try {
            const savedCalculation = await prisma_1.prisma.hppCalculation.create({
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
                            const materialData = calculation.materialUsages.find((m) => m.materialId === material.materialId);
                            return {
                                materialId: material.materialId,
                                quantity: material.quantity,
                                unitPrice: materialData.unitPrice,
                                totalPrice: materialData.totalPrice,
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
        }
        catch (error) {
            throw new errors_1.ValidationError('Failed to save HPP calculation');
        }
    }
    async getHppCalculations(userId, query) {
        const { page, limit, search } = query;
        const skip = (page - 1) * limit;
        const where = {
            userId,
            ...(search && {
                productName: { contains: search, mode: 'insensitive' },
            }),
        };
        const [calculations, total] = await Promise.all([
            prisma_1.prisma.hppCalculation.findMany({
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
            prisma_1.prisma.hppCalculation.count({ where }),
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
    async getHppCalculationById(userId, calculationId) {
        const calculation = await prisma_1.prisma.hppCalculation.findUnique({
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
            throw new errors_1.NotFoundError('HPP calculation not found');
        }
        if (calculation.userId !== userId) {
            throw new errors_1.ValidationError('You do not have permission to access this calculation');
        }
        return calculation;
    }
    async deleteHppCalculation(userId, calculationId) {
        const calculation = await this.getHppCalculationById(userId, calculationId);
        try {
            await prisma_1.prisma.hppCalculation.delete({
                where: { id: calculation.id },
            });
            return { message: 'HPP calculation deleted successfully' };
        }
        catch (error) {
            throw new errors_1.ValidationError('Failed to delete HPP calculation');
        }
    }
}
exports.HppService = HppService;
exports.hppService = new HppService();
//# sourceMappingURL=hpp.service.js.map