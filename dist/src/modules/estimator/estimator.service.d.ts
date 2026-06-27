import type { CalculateEstimateInput, SaveEstimateInput, ConvertToTaskInput } from './estimator.schema';
export interface EstimateResult {
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
}
export declare function calculateEstimate(input: CalculateEstimateInput): EstimateResult;
export declare function saveEstimate(userId: string, input: SaveEstimateInput): Promise<{
    id: string;
    createdAt: Date;
    userId: string;
    productName: string;
    sizeCm: number;
    complexity: import("../../../generated/prisma/enums").Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
}>;
export declare function convertEstimateToTask(userId: string, input: ConvertToTaskInput): Promise<{
    estimate: any;
    task: any;
}>;
export declare function getEstimateHistory(userId: string, pageStr?: string, limitStr?: string): Promise<{
    estimates: {
        id: string;
        createdAt: Date;
        userId: string;
        productName: string;
        sizeCm: number;
        complexity: import("../../../generated/prisma/enums").Complexity;
        estimatedHours: number;
        estimatedMaterialCost: number;
        minimumRecommendedPrice: number;
        maximumRecommendedPrice: number;
    }[];
    pagination: import("../../common/utils/pagination").PaginationMeta;
}>;
export declare function getEstimateById(userId: string, estimateId: string): Promise<{
    tasks: {
        status: import("../../../generated/prisma/enums").TaskStatus;
        id: string;
        title: string;
    }[];
} & {
    id: string;
    createdAt: Date;
    userId: string;
    productName: string;
    sizeCm: number;
    complexity: import("../../../generated/prisma/enums").Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
}>;
