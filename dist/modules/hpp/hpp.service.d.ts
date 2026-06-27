import { CalculateHppInput, QueryHppInput } from './hpp.schema';
export declare class HppService {
    calculateHpp(userId: string, data: CalculateHppInput): Promise<{
        productName: string;
        materialUsages: {
            materialId: string;
            materialName: any;
            quantity: number;
            unit: any;
            unitPrice: any;
            totalPrice: number;
        }[];
        totalMaterialCost: number;
        totalLaborCost: number;
        estimatedHours: number;
        totalHpp: number;
        profitMarginPercentage: any;
        taxPercentage: any;
        sellingPriceBeforeTax: number;
        taxAmount: number;
        finalSellingPrice: number;
        breakdown: {
            materials: number;
            labor: number;
            subtotal: number;
            profit: number;
            tax: number;
            total: number;
        };
    }>;
    saveHppCalculation(userId: string, data: CalculateHppInput): Promise<any>;
    getHppCalculations(userId: string, query: QueryHppInput): Promise<{
        data: any;
        pagination: {
            page: number;
            limit: number;
            total: any;
            totalPages: number;
        };
    }>;
    getHppCalculationById(userId: string, calculationId: string): Promise<any>;
    deleteHppCalculation(userId: string, calculationId: string): Promise<{
        message: string;
    }>;
}
export declare const hppService: HppService;
