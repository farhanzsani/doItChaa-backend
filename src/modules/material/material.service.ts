import { prisma } from '../../config/database';
import { CreateMaterialInput, UpdateMaterialInput, QueryMaterialsInput } from './material.schema';
import { ForbiddenError, NotFoundError, ValidationError } from '../../common/errors';

export class MaterialService {
  async createMaterial(userId: string, data: CreateMaterialInput) {
    try {
      const material = await prisma.material.create({
        data: {
          ...data,
          userId,
        },
      });

      return material;
    } catch (error) {
      throw new ValidationError('Failed to create material');
    }
  }

  async getMaterials(userId: string, query: QueryMaterialsInput) {
    const { page, limit, search } = query;
    const skip = (page - 1) * limit;

    const where = {
      userId,
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [materials, total] = await Promise.all([
      prisma.material.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.material.count({ where }),
    ]);

    return {
      data: materials,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getMaterialById(userId: string, materialId: string) {
    const material = await prisma.material.findUnique({
      where: { id: materialId },
    });

    if (!material) {
      throw new NotFoundError('Material not found');
    }

    if (material.userId !== userId) {
      throw new ForbiddenError('You do not have permission to access this material');
    }

    return material;
  }

  async updateMaterial(userId: string, materialId: string, data: UpdateMaterialInput) {
    const material = await this.getMaterialById(userId, materialId);

    try {
      const updatedMaterial = await prisma.material.update({
        where: { id: material.id },
        data,
      });

      return updatedMaterial;
    } catch (error) {
      throw new ValidationError('Failed to update material');
    }
  }

  async deleteMaterial(userId: string, materialId: string) {
    const material = await this.getMaterialById(userId, materialId);

    try {
      await prisma.material.delete({
        where: { id: material.id },
      });

      return { message: 'Material deleted successfully' };
    } catch (error) {
      throw new ValidationError('Failed to delete material');
    }
  }
}

export const materialService = new MaterialService();
