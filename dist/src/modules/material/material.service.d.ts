import { CreateMaterialInput, UpdateMaterialInput, QueryMaterialsInput } from './material.schema';
export declare class MaterialService {
    createMaterial(userId: string, data: CreateMaterialInput): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        userId: string;
        unit: string;
        price: number;
        stock: number;
    }>;
    getMaterials(userId: string, query: QueryMaterialsInput): Promise<{
        data: {
            id: string;
            createdAt: Date;
            name: string;
            description: string | null;
            updatedAt: Date;
            userId: string;
            unit: string;
            price: number;
            stock: number;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getMaterialById(userId: string, materialId: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        userId: string;
        unit: string;
        price: number;
        stock: number;
    }>;
    updateMaterial(userId: string, materialId: string, data: UpdateMaterialInput): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        description: string | null;
        updatedAt: Date;
        userId: string;
        unit: string;
        price: number;
        stock: number;
    }>;
    deleteMaterial(userId: string, materialId: string): Promise<{
        message: string;
    }>;
}
export declare const materialService: MaterialService;
