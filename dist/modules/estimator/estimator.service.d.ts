import type { CalculateEstimateInput, SaveEstimateInput, ConvertToTaskInput } from './estimator.schema';
export interface EstimateResult {
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
}
export declare function calculateEstimate(input: CalculateEstimateInput): EstimateResult;
export declare function saveEstimate(userId: string, input: SaveEstimateInput): Promise<any>;
export declare function convertEstimateToTask(userId: string, input: ConvertToTaskInput): Promise<{
    estimate: any;
    task: any;
}>;
export declare function getEstimateHistory(userId: string, pageStr?: string, limitStr?: string): Promise<{
    estimates: any;
    pagination: import("../../common/utils/pagination").PaginationMeta;
}>;
export declare function getEstimateById(userId: string, estimateId: string): Promise<any>;
