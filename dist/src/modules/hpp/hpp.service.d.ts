import { CalculateHppInput, QueryHppInput } from './hpp.schema';
export declare class HppService {
    calculateHpp(userId: string, data: CalculateHppInput): Promise<{
        productName: string;
        materialUsages: {
            materialId: string;
            materialName: string;
            quantity: number;
            unit: string;
            unitPrice: number;
            totalPrice: number;
        }[];
        totalMaterialCost: number;
        totalLaborCost: number;
        estimatedHours: number;
        totalHpp: number;
        profitMarginPercentage: number;
        taxPercentage: number;
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
    saveHppCalculation(userId: string, data: CalculateHppInput): Promise<{
        materialUsage: ({
            material: {
                id: string;
                createdAt: Date;
                name: string;
                description: string | null;
                updatedAt: Date;
                userId: string;
                unit: string;
                price: number;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            materialId: string;
            quantity: number;
            unitPrice: number;
            totalPrice: number;
            hppCalculationId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        productName: string;
        estimatedHours: number;
        taxPercentage: number;
        profitMarginPercentage: number;
        totalMaterialCost: number;
        totalLaborCost: number;
        totalHpp: number;
        sellingPriceBeforeTax: number;
        taxAmount: number;
        finalSellingPrice: number;
    }>;
    getHppCalculations(userId: string, query: QueryHppInput): Promise<{
        data: ({
            materialUsage: ({
                material: {
                    id: string;
                    createdAt: Date;
                    name: string;
                    description: string | null;
                    updatedAt: Date;
                    userId: string;
                    unit: string;
                    price: number;
                    stock: number;
                };
            } & {
                id: string;
                createdAt: Date;
                materialId: string;
                quantity: number;
                unitPrice: number;
                totalPrice: number;
                hppCalculationId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            productName: string;
            estimatedHours: number;
            taxPercentage: number;
            profitMarginPercentage: number;
            totalMaterialCost: number;
            totalLaborCost: number;
            totalHpp: number;
            sellingPriceBeforeTax: number;
            taxAmount: number;
            finalSellingPrice: number;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    getHppCalculationById(userId: string, calculationId: string): Promise<{
        materialUsage: ({
            material: {
                id: string;
                createdAt: Date;
                name: string;
                description: string | null;
                updatedAt: Date;
                userId: string;
                unit: string;
                price: number;
                stock: number;
            };
        } & {
            id: string;
            createdAt: Date;
            materialId: string;
            quantity: number;
            unitPrice: number;
            totalPrice: number;
            hppCalculationId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        productName: string;
        estimatedHours: number;
        taxPercentage: number;
        profitMarginPercentage: number;
        totalMaterialCost: number;
        totalLaborCost: number;
        totalHpp: number;
        sellingPriceBeforeTax: number;
        taxAmount: number;
        finalSellingPrice: number;
    }>;
    deleteHppCalculation(userId: string, calculationId: string): Promise<{
        message: string;
    }>;
}
export declare const hppService: HppService;
