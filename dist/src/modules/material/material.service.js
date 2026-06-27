"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialService = exports.MaterialService = void 0;
const prisma_1 = require("../../config/prisma");
const errors_1 = require("../../common/errors");
class MaterialService {
    async createMaterial(userId, data) {
        try {
            const material = await prisma_1.prisma.material.create({
                data: {
                    ...data,
                    userId,
                },
            });
            return material;
        }
        catch (error) {
            throw new errors_1.ValidationError('Failed to create material');
        }
    }
    async getMaterials(userId, query) {
        const { page, limit, search } = query;
        const skip = (page - 1) * limit;
        const where = {
            userId,
            ...(search && {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { description: { contains: search, mode: 'insensitive' } },
                ],
            }),
        };
        const [materials, total] = await Promise.all([
            prisma_1.prisma.material.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            prisma_1.prisma.material.count({ where }),
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
    async getMaterialById(userId, materialId) {
        const material = await prisma_1.prisma.material.findUnique({
            where: { id: materialId },
        });
        if (!material) {
            throw new errors_1.NotFoundError('Material not found');
        }
        if (material.userId !== userId) {
            throw new errors_1.ForbiddenError('You do not have permission to access this material');
        }
        return material;
    }
    async updateMaterial(userId, materialId, data) {
        const material = await this.getMaterialById(userId, materialId);
        try {
            const updatedMaterial = await prisma_1.prisma.material.update({
                where: { id: material.id },
                data,
            });
            return updatedMaterial;
        }
        catch (error) {
            throw new errors_1.ValidationError('Failed to update material');
        }
    }
    async deleteMaterial(userId, materialId) {
        const material = await this.getMaterialById(userId, materialId);
        try {
            await prisma_1.prisma.material.delete({
                where: { id: material.id },
            });
            return { message: 'Material deleted successfully' };
        }
        catch (error) {
            throw new errors_1.ValidationError('Failed to delete material');
        }
    }
}
exports.MaterialService = MaterialService;
exports.materialService = new MaterialService();
//# sourceMappingURL=material.service.js.map