import { CreateMaterialInput, UpdateMaterialInput, QueryMaterialsInput } from './material.schema';
export declare class MaterialService {
    createMaterial(userId: string, data: CreateMaterialInput): Promise<any>;
    getMaterials(userId: string, query: QueryMaterialsInput): Promise<{
        data: any;
        pagination: {
            page: number;
            limit: number;
            total: any;
            totalPages: number;
        };
    }>;
    getMaterialById(userId: string, materialId: string): Promise<any>;
    updateMaterial(userId: string, materialId: string, data: UpdateMaterialInput): Promise<any>;
    deleteMaterial(userId: string, materialId: string): Promise<{
        message: string;
    }>;
}
export declare const materialService: MaterialService;
