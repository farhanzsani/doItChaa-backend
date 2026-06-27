import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Category: "Category";
    readonly Task: "Task";
    readonly PriceEstimateHistory: "PriceEstimateHistory";
    readonly Note: "Note";
    readonly Material: "Material";
    readonly BusinessSettings: "BusinessSettings";
    readonly HppCalculation: "HppCalculation";
    readonly HppMaterialUsage: "HppMaterialUsage";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly createdAt: "createdAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const TaskScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly priority: "priority";
    readonly status: "status";
    readonly deadline: "deadline";
    readonly categoryId: "categoryId";
    readonly userId: "userId";
    readonly estimateHistoryId: "estimateHistoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];
export declare const PriceEstimateHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly productName: "productName";
    readonly sizeCm: "sizeCm";
    readonly complexity: "complexity";
    readonly estimatedHours: "estimatedHours";
    readonly estimatedMaterialCost: "estimatedMaterialCost";
    readonly minimumRecommendedPrice: "minimumRecommendedPrice";
    readonly maximumRecommendedPrice: "maximumRecommendedPrice";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
};
export type PriceEstimateHistoryScalarFieldEnum = (typeof PriceEstimateHistoryScalarFieldEnum)[keyof typeof PriceEstimateHistoryScalarFieldEnum];
export declare const NoteScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly content: "content";
    readonly taskId: "taskId";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum];
export declare const MaterialScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly unit: "unit";
    readonly price: "price";
    readonly stock: "stock";
    readonly description: "description";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum];
export declare const BusinessSettingsScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly profitMarginMin: "profitMarginMin";
    readonly profitMarginMax: "profitMarginMax";
    readonly taxPercentage: "taxPercentage";
    readonly laborCostPerHour: "laborCostPerHour";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BusinessSettingsScalarFieldEnum = (typeof BusinessSettingsScalarFieldEnum)[keyof typeof BusinessSettingsScalarFieldEnum];
export declare const HppCalculationScalarFieldEnum: {
    readonly id: "id";
    readonly productName: "productName";
    readonly totalMaterialCost: "totalMaterialCost";
    readonly totalLaborCost: "totalLaborCost";
    readonly estimatedHours: "estimatedHours";
    readonly totalHpp: "totalHpp";
    readonly profitMarginPercentage: "profitMarginPercentage";
    readonly taxPercentage: "taxPercentage";
    readonly sellingPriceBeforeTax: "sellingPriceBeforeTax";
    readonly taxAmount: "taxAmount";
    readonly finalSellingPrice: "finalSellingPrice";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HppCalculationScalarFieldEnum = (typeof HppCalculationScalarFieldEnum)[keyof typeof HppCalculationScalarFieldEnum];
export declare const HppMaterialUsageScalarFieldEnum: {
    readonly id: "id";
    readonly hppCalculationId: "hppCalculationId";
    readonly materialId: "materialId";
    readonly quantity: "quantity";
    readonly unitPrice: "unitPrice";
    readonly totalPrice: "totalPrice";
    readonly createdAt: "createdAt";
};
export type HppMaterialUsageScalarFieldEnum = (typeof HppMaterialUsageScalarFieldEnum)[keyof typeof HppMaterialUsageScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
