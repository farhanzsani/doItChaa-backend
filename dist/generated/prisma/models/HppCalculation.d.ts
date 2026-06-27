import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model HppCalculation
 *
 */
export type HppCalculationModel = runtime.Types.Result.DefaultSelection<Prisma.$HppCalculationPayload>;
export type AggregateHppCalculation = {
    _count: HppCalculationCountAggregateOutputType | null;
    _avg: HppCalculationAvgAggregateOutputType | null;
    _sum: HppCalculationSumAggregateOutputType | null;
    _min: HppCalculationMinAggregateOutputType | null;
    _max: HppCalculationMaxAggregateOutputType | null;
};
export type HppCalculationAvgAggregateOutputType = {
    totalMaterialCost: number | null;
    totalLaborCost: number | null;
    estimatedHours: number | null;
    totalHpp: number | null;
    profitMarginPercentage: number | null;
    taxPercentage: number | null;
    sellingPriceBeforeTax: number | null;
    taxAmount: number | null;
    finalSellingPrice: number | null;
};
export type HppCalculationSumAggregateOutputType = {
    totalMaterialCost: number | null;
    totalLaborCost: number | null;
    estimatedHours: number | null;
    totalHpp: number | null;
    profitMarginPercentage: number | null;
    taxPercentage: number | null;
    sellingPriceBeforeTax: number | null;
    taxAmount: number | null;
    finalSellingPrice: number | null;
};
export type HppCalculationMinAggregateOutputType = {
    id: string | null;
    productName: string | null;
    totalMaterialCost: number | null;
    totalLaborCost: number | null;
    estimatedHours: number | null;
    totalHpp: number | null;
    profitMarginPercentage: number | null;
    taxPercentage: number | null;
    sellingPriceBeforeTax: number | null;
    taxAmount: number | null;
    finalSellingPrice: number | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HppCalculationMaxAggregateOutputType = {
    id: string | null;
    productName: string | null;
    totalMaterialCost: number | null;
    totalLaborCost: number | null;
    estimatedHours: number | null;
    totalHpp: number | null;
    profitMarginPercentage: number | null;
    taxPercentage: number | null;
    sellingPriceBeforeTax: number | null;
    taxAmount: number | null;
    finalSellingPrice: number | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HppCalculationCountAggregateOutputType = {
    id: number;
    productName: number;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HppCalculationAvgAggregateInputType = {
    totalMaterialCost?: true;
    totalLaborCost?: true;
    estimatedHours?: true;
    totalHpp?: true;
    profitMarginPercentage?: true;
    taxPercentage?: true;
    sellingPriceBeforeTax?: true;
    taxAmount?: true;
    finalSellingPrice?: true;
};
export type HppCalculationSumAggregateInputType = {
    totalMaterialCost?: true;
    totalLaborCost?: true;
    estimatedHours?: true;
    totalHpp?: true;
    profitMarginPercentage?: true;
    taxPercentage?: true;
    sellingPriceBeforeTax?: true;
    taxAmount?: true;
    finalSellingPrice?: true;
};
export type HppCalculationMinAggregateInputType = {
    id?: true;
    productName?: true;
    totalMaterialCost?: true;
    totalLaborCost?: true;
    estimatedHours?: true;
    totalHpp?: true;
    profitMarginPercentage?: true;
    taxPercentage?: true;
    sellingPriceBeforeTax?: true;
    taxAmount?: true;
    finalSellingPrice?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HppCalculationMaxAggregateInputType = {
    id?: true;
    productName?: true;
    totalMaterialCost?: true;
    totalLaborCost?: true;
    estimatedHours?: true;
    totalHpp?: true;
    profitMarginPercentage?: true;
    taxPercentage?: true;
    sellingPriceBeforeTax?: true;
    taxAmount?: true;
    finalSellingPrice?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HppCalculationCountAggregateInputType = {
    id?: true;
    productName?: true;
    totalMaterialCost?: true;
    totalLaborCost?: true;
    estimatedHours?: true;
    totalHpp?: true;
    profitMarginPercentage?: true;
    taxPercentage?: true;
    sellingPriceBeforeTax?: true;
    taxAmount?: true;
    finalSellingPrice?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HppCalculationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HppCalculation to aggregate.
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppCalculations to fetch.
     */
    orderBy?: Prisma.HppCalculationOrderByWithRelationInput | Prisma.HppCalculationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HppCalculationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppCalculations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppCalculations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HppCalculations
    **/
    _count?: true | HppCalculationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: HppCalculationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: HppCalculationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HppCalculationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HppCalculationMaxAggregateInputType;
};
export type GetHppCalculationAggregateType<T extends HppCalculationAggregateArgs> = {
    [P in keyof T & keyof AggregateHppCalculation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHppCalculation[P]> : Prisma.GetScalarType<T[P], AggregateHppCalculation[P]>;
};
export type HppCalculationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HppCalculationWhereInput;
    orderBy?: Prisma.HppCalculationOrderByWithAggregationInput | Prisma.HppCalculationOrderByWithAggregationInput[];
    by: Prisma.HppCalculationScalarFieldEnum[] | Prisma.HppCalculationScalarFieldEnum;
    having?: Prisma.HppCalculationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HppCalculationCountAggregateInputType | true;
    _avg?: HppCalculationAvgAggregateInputType;
    _sum?: HppCalculationSumAggregateInputType;
    _min?: HppCalculationMinAggregateInputType;
    _max?: HppCalculationMaxAggregateInputType;
};
export type HppCalculationGroupByOutputType = {
    id: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: HppCalculationCountAggregateOutputType | null;
    _avg: HppCalculationAvgAggregateOutputType | null;
    _sum: HppCalculationSumAggregateOutputType | null;
    _min: HppCalculationMinAggregateOutputType | null;
    _max: HppCalculationMaxAggregateOutputType | null;
};
export type GetHppCalculationGroupByPayload<T extends HppCalculationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HppCalculationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HppCalculationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HppCalculationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HppCalculationGroupByOutputType[P]>;
}>>;
export type HppCalculationWhereInput = {
    AND?: Prisma.HppCalculationWhereInput | Prisma.HppCalculationWhereInput[];
    OR?: Prisma.HppCalculationWhereInput[];
    NOT?: Prisma.HppCalculationWhereInput | Prisma.HppCalculationWhereInput[];
    id?: Prisma.StringFilter<"HppCalculation"> | string;
    productName?: Prisma.StringFilter<"HppCalculation"> | string;
    totalMaterialCost?: Prisma.IntFilter<"HppCalculation"> | number;
    totalLaborCost?: Prisma.IntFilter<"HppCalculation"> | number;
    estimatedHours?: Prisma.FloatFilter<"HppCalculation"> | number;
    totalHpp?: Prisma.IntFilter<"HppCalculation"> | number;
    profitMarginPercentage?: Prisma.FloatFilter<"HppCalculation"> | number;
    taxPercentage?: Prisma.FloatFilter<"HppCalculation"> | number;
    sellingPriceBeforeTax?: Prisma.IntFilter<"HppCalculation"> | number;
    taxAmount?: Prisma.IntFilter<"HppCalculation"> | number;
    finalSellingPrice?: Prisma.IntFilter<"HppCalculation"> | number;
    userId?: Prisma.StringFilter<"HppCalculation"> | string;
    createdAt?: Prisma.DateTimeFilter<"HppCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HppCalculation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    materials?: Prisma.MaterialListRelationFilter;
    materialUsage?: Prisma.HppMaterialUsageListRelationFilter;
};
export type HppCalculationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    materials?: Prisma.MaterialOrderByRelationAggregateInput;
    materialUsage?: Prisma.HppMaterialUsageOrderByRelationAggregateInput;
};
export type HppCalculationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.HppCalculationWhereInput | Prisma.HppCalculationWhereInput[];
    OR?: Prisma.HppCalculationWhereInput[];
    NOT?: Prisma.HppCalculationWhereInput | Prisma.HppCalculationWhereInput[];
    productName?: Prisma.StringFilter<"HppCalculation"> | string;
    totalMaterialCost?: Prisma.IntFilter<"HppCalculation"> | number;
    totalLaborCost?: Prisma.IntFilter<"HppCalculation"> | number;
    estimatedHours?: Prisma.FloatFilter<"HppCalculation"> | number;
    totalHpp?: Prisma.IntFilter<"HppCalculation"> | number;
    profitMarginPercentage?: Prisma.FloatFilter<"HppCalculation"> | number;
    taxPercentage?: Prisma.FloatFilter<"HppCalculation"> | number;
    sellingPriceBeforeTax?: Prisma.IntFilter<"HppCalculation"> | number;
    taxAmount?: Prisma.IntFilter<"HppCalculation"> | number;
    finalSellingPrice?: Prisma.IntFilter<"HppCalculation"> | number;
    userId?: Prisma.StringFilter<"HppCalculation"> | string;
    createdAt?: Prisma.DateTimeFilter<"HppCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HppCalculation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    materials?: Prisma.MaterialListRelationFilter;
    materialUsage?: Prisma.HppMaterialUsageListRelationFilter;
}, "id">;
export type HppCalculationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HppCalculationCountOrderByAggregateInput;
    _avg?: Prisma.HppCalculationAvgOrderByAggregateInput;
    _max?: Prisma.HppCalculationMaxOrderByAggregateInput;
    _min?: Prisma.HppCalculationMinOrderByAggregateInput;
    _sum?: Prisma.HppCalculationSumOrderByAggregateInput;
};
export type HppCalculationScalarWhereWithAggregatesInput = {
    AND?: Prisma.HppCalculationScalarWhereWithAggregatesInput | Prisma.HppCalculationScalarWhereWithAggregatesInput[];
    OR?: Prisma.HppCalculationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HppCalculationScalarWhereWithAggregatesInput | Prisma.HppCalculationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HppCalculation"> | string;
    productName?: Prisma.StringWithAggregatesFilter<"HppCalculation"> | string;
    totalMaterialCost?: Prisma.IntWithAggregatesFilter<"HppCalculation"> | number;
    totalLaborCost?: Prisma.IntWithAggregatesFilter<"HppCalculation"> | number;
    estimatedHours?: Prisma.FloatWithAggregatesFilter<"HppCalculation"> | number;
    totalHpp?: Prisma.IntWithAggregatesFilter<"HppCalculation"> | number;
    profitMarginPercentage?: Prisma.FloatWithAggregatesFilter<"HppCalculation"> | number;
    taxPercentage?: Prisma.FloatWithAggregatesFilter<"HppCalculation"> | number;
    sellingPriceBeforeTax?: Prisma.IntWithAggregatesFilter<"HppCalculation"> | number;
    taxAmount?: Prisma.IntWithAggregatesFilter<"HppCalculation"> | number;
    finalSellingPrice?: Prisma.IntWithAggregatesFilter<"HppCalculation"> | number;
    userId?: Prisma.StringWithAggregatesFilter<"HppCalculation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HppCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HppCalculation"> | Date | string;
};
export type HppCalculationCreateInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutHppCalculationsInput;
    materials?: Prisma.MaterialCreateNestedManyWithoutHppCalculationsInput;
    materialUsage?: Prisma.HppMaterialUsageCreateNestedManyWithoutHppCalculationInput;
};
export type HppCalculationUncheckedCreateInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: Prisma.MaterialUncheckedCreateNestedManyWithoutHppCalculationsInput;
    materialUsage?: Prisma.HppMaterialUsageUncheckedCreateNestedManyWithoutHppCalculationInput;
};
export type HppCalculationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutHppCalculationsNestedInput;
    materials?: Prisma.MaterialUpdateManyWithoutHppCalculationsNestedInput;
    materialUsage?: Prisma.HppMaterialUsageUpdateManyWithoutHppCalculationNestedInput;
};
export type HppCalculationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materials?: Prisma.MaterialUncheckedUpdateManyWithoutHppCalculationsNestedInput;
    materialUsage?: Prisma.HppMaterialUsageUncheckedUpdateManyWithoutHppCalculationNestedInput;
};
export type HppCalculationCreateManyInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HppCalculationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppCalculationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppCalculationListRelationFilter = {
    every?: Prisma.HppCalculationWhereInput;
    some?: Prisma.HppCalculationWhereInput;
    none?: Prisma.HppCalculationWhereInput;
};
export type HppCalculationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HppCalculationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HppCalculationAvgOrderByAggregateInput = {
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
};
export type HppCalculationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HppCalculationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HppCalculationSumOrderByAggregateInput = {
    totalMaterialCost?: Prisma.SortOrder;
    totalLaborCost?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    totalHpp?: Prisma.SortOrder;
    profitMarginPercentage?: Prisma.SortOrder;
    taxPercentage?: Prisma.SortOrder;
    sellingPriceBeforeTax?: Prisma.SortOrder;
    taxAmount?: Prisma.SortOrder;
    finalSellingPrice?: Prisma.SortOrder;
};
export type HppCalculationScalarRelationFilter = {
    is?: Prisma.HppCalculationWhereInput;
    isNot?: Prisma.HppCalculationWhereInput;
};
export type HppCalculationCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutUserInput, Prisma.HppCalculationUncheckedCreateWithoutUserInput> | Prisma.HppCalculationCreateWithoutUserInput[] | Prisma.HppCalculationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutUserInput | Prisma.HppCalculationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HppCalculationCreateManyUserInputEnvelope;
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
};
export type HppCalculationUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutUserInput, Prisma.HppCalculationUncheckedCreateWithoutUserInput> | Prisma.HppCalculationCreateWithoutUserInput[] | Prisma.HppCalculationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutUserInput | Prisma.HppCalculationCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.HppCalculationCreateManyUserInputEnvelope;
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
};
export type HppCalculationUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutUserInput, Prisma.HppCalculationUncheckedCreateWithoutUserInput> | Prisma.HppCalculationCreateWithoutUserInput[] | Prisma.HppCalculationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutUserInput | Prisma.HppCalculationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HppCalculationUpsertWithWhereUniqueWithoutUserInput | Prisma.HppCalculationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HppCalculationCreateManyUserInputEnvelope;
    set?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    disconnect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    delete?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    update?: Prisma.HppCalculationUpdateWithWhereUniqueWithoutUserInput | Prisma.HppCalculationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HppCalculationUpdateManyWithWhereWithoutUserInput | Prisma.HppCalculationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HppCalculationScalarWhereInput | Prisma.HppCalculationScalarWhereInput[];
};
export type HppCalculationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutUserInput, Prisma.HppCalculationUncheckedCreateWithoutUserInput> | Prisma.HppCalculationCreateWithoutUserInput[] | Prisma.HppCalculationUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutUserInput | Prisma.HppCalculationCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.HppCalculationUpsertWithWhereUniqueWithoutUserInput | Prisma.HppCalculationUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.HppCalculationCreateManyUserInputEnvelope;
    set?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    disconnect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    delete?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    update?: Prisma.HppCalculationUpdateWithWhereUniqueWithoutUserInput | Prisma.HppCalculationUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.HppCalculationUpdateManyWithWhereWithoutUserInput | Prisma.HppCalculationUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.HppCalculationScalarWhereInput | Prisma.HppCalculationScalarWhereInput[];
};
export type HppCalculationCreateNestedManyWithoutMaterialsInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialsInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput> | Prisma.HppCalculationCreateWithoutMaterialsInput[] | Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput | Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput[];
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
};
export type HppCalculationUncheckedCreateNestedManyWithoutMaterialsInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialsInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput> | Prisma.HppCalculationCreateWithoutMaterialsInput[] | Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput | Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput[];
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
};
export type HppCalculationUpdateManyWithoutMaterialsNestedInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialsInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput> | Prisma.HppCalculationCreateWithoutMaterialsInput[] | Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput | Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput[];
    upsert?: Prisma.HppCalculationUpsertWithWhereUniqueWithoutMaterialsInput | Prisma.HppCalculationUpsertWithWhereUniqueWithoutMaterialsInput[];
    set?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    disconnect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    delete?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    update?: Prisma.HppCalculationUpdateWithWhereUniqueWithoutMaterialsInput | Prisma.HppCalculationUpdateWithWhereUniqueWithoutMaterialsInput[];
    updateMany?: Prisma.HppCalculationUpdateManyWithWhereWithoutMaterialsInput | Prisma.HppCalculationUpdateManyWithWhereWithoutMaterialsInput[];
    deleteMany?: Prisma.HppCalculationScalarWhereInput | Prisma.HppCalculationScalarWhereInput[];
};
export type HppCalculationUncheckedUpdateManyWithoutMaterialsNestedInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialsInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput> | Prisma.HppCalculationCreateWithoutMaterialsInput[] | Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput[];
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput | Prisma.HppCalculationCreateOrConnectWithoutMaterialsInput[];
    upsert?: Prisma.HppCalculationUpsertWithWhereUniqueWithoutMaterialsInput | Prisma.HppCalculationUpsertWithWhereUniqueWithoutMaterialsInput[];
    set?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    disconnect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    delete?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    connect?: Prisma.HppCalculationWhereUniqueInput | Prisma.HppCalculationWhereUniqueInput[];
    update?: Prisma.HppCalculationUpdateWithWhereUniqueWithoutMaterialsInput | Prisma.HppCalculationUpdateWithWhereUniqueWithoutMaterialsInput[];
    updateMany?: Prisma.HppCalculationUpdateManyWithWhereWithoutMaterialsInput | Prisma.HppCalculationUpdateManyWithWhereWithoutMaterialsInput[];
    deleteMany?: Prisma.HppCalculationScalarWhereInput | Prisma.HppCalculationScalarWhereInput[];
};
export type HppCalculationCreateNestedOneWithoutMaterialUsageInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialUsageInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialUsageInput>;
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutMaterialUsageInput;
    connect?: Prisma.HppCalculationWhereUniqueInput;
};
export type HppCalculationUpdateOneRequiredWithoutMaterialUsageNestedInput = {
    create?: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialUsageInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialUsageInput>;
    connectOrCreate?: Prisma.HppCalculationCreateOrConnectWithoutMaterialUsageInput;
    upsert?: Prisma.HppCalculationUpsertWithoutMaterialUsageInput;
    connect?: Prisma.HppCalculationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HppCalculationUpdateToOneWithWhereWithoutMaterialUsageInput, Prisma.HppCalculationUpdateWithoutMaterialUsageInput>, Prisma.HppCalculationUncheckedUpdateWithoutMaterialUsageInput>;
};
export type HppCalculationCreateWithoutUserInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: Prisma.MaterialCreateNestedManyWithoutHppCalculationsInput;
    materialUsage?: Prisma.HppMaterialUsageCreateNestedManyWithoutHppCalculationInput;
};
export type HppCalculationUncheckedCreateWithoutUserInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: Prisma.MaterialUncheckedCreateNestedManyWithoutHppCalculationsInput;
    materialUsage?: Prisma.HppMaterialUsageUncheckedCreateNestedManyWithoutHppCalculationInput;
};
export type HppCalculationCreateOrConnectWithoutUserInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HppCalculationCreateWithoutUserInput, Prisma.HppCalculationUncheckedCreateWithoutUserInput>;
};
export type HppCalculationCreateManyUserInputEnvelope = {
    data: Prisma.HppCalculationCreateManyUserInput | Prisma.HppCalculationCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type HppCalculationUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    update: Prisma.XOR<Prisma.HppCalculationUpdateWithoutUserInput, Prisma.HppCalculationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.HppCalculationCreateWithoutUserInput, Prisma.HppCalculationUncheckedCreateWithoutUserInput>;
};
export type HppCalculationUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    data: Prisma.XOR<Prisma.HppCalculationUpdateWithoutUserInput, Prisma.HppCalculationUncheckedUpdateWithoutUserInput>;
};
export type HppCalculationUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.HppCalculationScalarWhereInput;
    data: Prisma.XOR<Prisma.HppCalculationUpdateManyMutationInput, Prisma.HppCalculationUncheckedUpdateManyWithoutUserInput>;
};
export type HppCalculationScalarWhereInput = {
    AND?: Prisma.HppCalculationScalarWhereInput | Prisma.HppCalculationScalarWhereInput[];
    OR?: Prisma.HppCalculationScalarWhereInput[];
    NOT?: Prisma.HppCalculationScalarWhereInput | Prisma.HppCalculationScalarWhereInput[];
    id?: Prisma.StringFilter<"HppCalculation"> | string;
    productName?: Prisma.StringFilter<"HppCalculation"> | string;
    totalMaterialCost?: Prisma.IntFilter<"HppCalculation"> | number;
    totalLaborCost?: Prisma.IntFilter<"HppCalculation"> | number;
    estimatedHours?: Prisma.FloatFilter<"HppCalculation"> | number;
    totalHpp?: Prisma.IntFilter<"HppCalculation"> | number;
    profitMarginPercentage?: Prisma.FloatFilter<"HppCalculation"> | number;
    taxPercentage?: Prisma.FloatFilter<"HppCalculation"> | number;
    sellingPriceBeforeTax?: Prisma.IntFilter<"HppCalculation"> | number;
    taxAmount?: Prisma.IntFilter<"HppCalculation"> | number;
    finalSellingPrice?: Prisma.IntFilter<"HppCalculation"> | number;
    userId?: Prisma.StringFilter<"HppCalculation"> | string;
    createdAt?: Prisma.DateTimeFilter<"HppCalculation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HppCalculation"> | Date | string;
};
export type HppCalculationCreateWithoutMaterialsInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutHppCalculationsInput;
    materialUsage?: Prisma.HppMaterialUsageCreateNestedManyWithoutHppCalculationInput;
};
export type HppCalculationUncheckedCreateWithoutMaterialsInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materialUsage?: Prisma.HppMaterialUsageUncheckedCreateNestedManyWithoutHppCalculationInput;
};
export type HppCalculationCreateOrConnectWithoutMaterialsInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialsInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput>;
};
export type HppCalculationUpsertWithWhereUniqueWithoutMaterialsInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    update: Prisma.XOR<Prisma.HppCalculationUpdateWithoutMaterialsInput, Prisma.HppCalculationUncheckedUpdateWithoutMaterialsInput>;
    create: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialsInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialsInput>;
};
export type HppCalculationUpdateWithWhereUniqueWithoutMaterialsInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    data: Prisma.XOR<Prisma.HppCalculationUpdateWithoutMaterialsInput, Prisma.HppCalculationUncheckedUpdateWithoutMaterialsInput>;
};
export type HppCalculationUpdateManyWithWhereWithoutMaterialsInput = {
    where: Prisma.HppCalculationScalarWhereInput;
    data: Prisma.XOR<Prisma.HppCalculationUpdateManyMutationInput, Prisma.HppCalculationUncheckedUpdateManyWithoutMaterialsInput>;
};
export type HppCalculationCreateWithoutMaterialUsageInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutHppCalculationsInput;
    materials?: Prisma.MaterialCreateNestedManyWithoutHppCalculationsInput;
};
export type HppCalculationUncheckedCreateWithoutMaterialUsageInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    materials?: Prisma.MaterialUncheckedCreateNestedManyWithoutHppCalculationsInput;
};
export type HppCalculationCreateOrConnectWithoutMaterialUsageInput = {
    where: Prisma.HppCalculationWhereUniqueInput;
    create: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialUsageInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialUsageInput>;
};
export type HppCalculationUpsertWithoutMaterialUsageInput = {
    update: Prisma.XOR<Prisma.HppCalculationUpdateWithoutMaterialUsageInput, Prisma.HppCalculationUncheckedUpdateWithoutMaterialUsageInput>;
    create: Prisma.XOR<Prisma.HppCalculationCreateWithoutMaterialUsageInput, Prisma.HppCalculationUncheckedCreateWithoutMaterialUsageInput>;
    where?: Prisma.HppCalculationWhereInput;
};
export type HppCalculationUpdateToOneWithWhereWithoutMaterialUsageInput = {
    where?: Prisma.HppCalculationWhereInput;
    data: Prisma.XOR<Prisma.HppCalculationUpdateWithoutMaterialUsageInput, Prisma.HppCalculationUncheckedUpdateWithoutMaterialUsageInput>;
};
export type HppCalculationUpdateWithoutMaterialUsageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutHppCalculationsNestedInput;
    materials?: Prisma.MaterialUpdateManyWithoutHppCalculationsNestedInput;
};
export type HppCalculationUncheckedUpdateWithoutMaterialUsageInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materials?: Prisma.MaterialUncheckedUpdateManyWithoutHppCalculationsNestedInput;
};
export type HppCalculationCreateManyUserInput = {
    id?: string;
    productName: string;
    totalMaterialCost: number;
    totalLaborCost: number;
    estimatedHours: number;
    totalHpp: number;
    profitMarginPercentage: number;
    taxPercentage: number;
    sellingPriceBeforeTax: number;
    taxAmount: number;
    finalSellingPrice: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HppCalculationUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materials?: Prisma.MaterialUpdateManyWithoutHppCalculationsNestedInput;
    materialUsage?: Prisma.HppMaterialUsageUpdateManyWithoutHppCalculationNestedInput;
};
export type HppCalculationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materials?: Prisma.MaterialUncheckedUpdateManyWithoutHppCalculationsNestedInput;
    materialUsage?: Prisma.HppMaterialUsageUncheckedUpdateManyWithoutHppCalculationNestedInput;
};
export type HppCalculationUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppCalculationUpdateWithoutMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutHppCalculationsNestedInput;
    materialUsage?: Prisma.HppMaterialUsageUpdateManyWithoutHppCalculationNestedInput;
};
export type HppCalculationUncheckedUpdateWithoutMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    materialUsage?: Prisma.HppMaterialUsageUncheckedUpdateManyWithoutHppCalculationNestedInput;
};
export type HppCalculationUncheckedUpdateManyWithoutMaterialsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    totalMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    totalLaborCost?: Prisma.IntFieldUpdateOperationsInput | number;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    totalHpp?: Prisma.IntFieldUpdateOperationsInput | number;
    profitMarginPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    taxPercentage?: Prisma.FloatFieldUpdateOperationsInput | number;
    sellingPriceBeforeTax?: Prisma.IntFieldUpdateOperationsInput | number;
    taxAmount?: Prisma.IntFieldUpdateOperationsInput | number;
    finalSellingPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type HppCalculationCountOutputType
 */
export type HppCalculationCountOutputType = {
    materials: number;
    materialUsage: number;
};
export type HppCalculationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    materials?: boolean | HppCalculationCountOutputTypeCountMaterialsArgs;
    materialUsage?: boolean | HppCalculationCountOutputTypeCountMaterialUsageArgs;
};
/**
 * HppCalculationCountOutputType without action
 */
export type HppCalculationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculationCountOutputType
     */
    select?: Prisma.HppCalculationCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * HppCalculationCountOutputType without action
 */
export type HppCalculationCountOutputTypeCountMaterialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
};
/**
 * HppCalculationCountOutputType without action
 */
export type HppCalculationCountOutputTypeCountMaterialUsageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HppMaterialUsageWhereInput;
};
export type HppCalculationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productName?: boolean;
    totalMaterialCost?: boolean;
    totalLaborCost?: boolean;
    estimatedHours?: boolean;
    totalHpp?: boolean;
    profitMarginPercentage?: boolean;
    taxPercentage?: boolean;
    sellingPriceBeforeTax?: boolean;
    taxAmount?: boolean;
    finalSellingPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    materials?: boolean | Prisma.HppCalculation$materialsArgs<ExtArgs>;
    materialUsage?: boolean | Prisma.HppCalculation$materialUsageArgs<ExtArgs>;
    _count?: boolean | Prisma.HppCalculationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hppCalculation"]>;
export type HppCalculationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productName?: boolean;
    totalMaterialCost?: boolean;
    totalLaborCost?: boolean;
    estimatedHours?: boolean;
    totalHpp?: boolean;
    profitMarginPercentage?: boolean;
    taxPercentage?: boolean;
    sellingPriceBeforeTax?: boolean;
    taxAmount?: boolean;
    finalSellingPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hppCalculation"]>;
export type HppCalculationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productName?: boolean;
    totalMaterialCost?: boolean;
    totalLaborCost?: boolean;
    estimatedHours?: boolean;
    totalHpp?: boolean;
    profitMarginPercentage?: boolean;
    taxPercentage?: boolean;
    sellingPriceBeforeTax?: boolean;
    taxAmount?: boolean;
    finalSellingPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hppCalculation"]>;
export type HppCalculationSelectScalar = {
    id?: boolean;
    productName?: boolean;
    totalMaterialCost?: boolean;
    totalLaborCost?: boolean;
    estimatedHours?: boolean;
    totalHpp?: boolean;
    profitMarginPercentage?: boolean;
    taxPercentage?: boolean;
    sellingPriceBeforeTax?: boolean;
    taxAmount?: boolean;
    finalSellingPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HppCalculationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productName" | "totalMaterialCost" | "totalLaborCost" | "estimatedHours" | "totalHpp" | "profitMarginPercentage" | "taxPercentage" | "sellingPriceBeforeTax" | "taxAmount" | "finalSellingPrice" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["hppCalculation"]>;
export type HppCalculationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    materials?: boolean | Prisma.HppCalculation$materialsArgs<ExtArgs>;
    materialUsage?: boolean | Prisma.HppCalculation$materialUsageArgs<ExtArgs>;
    _count?: boolean | Prisma.HppCalculationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HppCalculationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type HppCalculationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $HppCalculationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HppCalculation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        materials: Prisma.$MaterialPayload<ExtArgs>[];
        materialUsage: Prisma.$HppMaterialUsagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productName: string;
        totalMaterialCost: number;
        totalLaborCost: number;
        estimatedHours: number;
        totalHpp: number;
        profitMarginPercentage: number;
        taxPercentage: number;
        sellingPriceBeforeTax: number;
        taxAmount: number;
        finalSellingPrice: number;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["hppCalculation"]>;
    composites: {};
};
export type HppCalculationGetPayload<S extends boolean | null | undefined | HppCalculationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload, S>;
export type HppCalculationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HppCalculationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HppCalculationCountAggregateInputType | true;
};
export interface HppCalculationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HppCalculation'];
        meta: {
            name: 'HppCalculation';
        };
    };
    /**
     * Find zero or one HppCalculation that matches the filter.
     * @param {HppCalculationFindUniqueArgs} args - Arguments to find a HppCalculation
     * @example
     * // Get one HppCalculation
     * const hppCalculation = await prisma.hppCalculation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HppCalculationFindUniqueArgs>(args: Prisma.SelectSubset<T, HppCalculationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HppCalculation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HppCalculationFindUniqueOrThrowArgs} args - Arguments to find a HppCalculation
     * @example
     * // Get one HppCalculation
     * const hppCalculation = await prisma.hppCalculation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HppCalculationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HppCalculationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HppCalculation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationFindFirstArgs} args - Arguments to find a HppCalculation
     * @example
     * // Get one HppCalculation
     * const hppCalculation = await prisma.hppCalculation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HppCalculationFindFirstArgs>(args?: Prisma.SelectSubset<T, HppCalculationFindFirstArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HppCalculation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationFindFirstOrThrowArgs} args - Arguments to find a HppCalculation
     * @example
     * // Get one HppCalculation
     * const hppCalculation = await prisma.hppCalculation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HppCalculationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HppCalculationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HppCalculations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HppCalculations
     * const hppCalculations = await prisma.hppCalculation.findMany()
     *
     * // Get first 10 HppCalculations
     * const hppCalculations = await prisma.hppCalculation.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hppCalculationWithIdOnly = await prisma.hppCalculation.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HppCalculationFindManyArgs>(args?: Prisma.SelectSubset<T, HppCalculationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HppCalculation.
     * @param {HppCalculationCreateArgs} args - Arguments to create a HppCalculation.
     * @example
     * // Create one HppCalculation
     * const HppCalculation = await prisma.hppCalculation.create({
     *   data: {
     *     // ... data to create a HppCalculation
     *   }
     * })
     *
     */
    create<T extends HppCalculationCreateArgs>(args: Prisma.SelectSubset<T, HppCalculationCreateArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HppCalculations.
     * @param {HppCalculationCreateManyArgs} args - Arguments to create many HppCalculations.
     * @example
     * // Create many HppCalculations
     * const hppCalculation = await prisma.hppCalculation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HppCalculationCreateManyArgs>(args?: Prisma.SelectSubset<T, HppCalculationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HppCalculations and returns the data saved in the database.
     * @param {HppCalculationCreateManyAndReturnArgs} args - Arguments to create many HppCalculations.
     * @example
     * // Create many HppCalculations
     * const hppCalculation = await prisma.hppCalculation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HppCalculations and only return the `id`
     * const hppCalculationWithIdOnly = await prisma.hppCalculation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HppCalculationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HppCalculationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HppCalculation.
     * @param {HppCalculationDeleteArgs} args - Arguments to delete one HppCalculation.
     * @example
     * // Delete one HppCalculation
     * const HppCalculation = await prisma.hppCalculation.delete({
     *   where: {
     *     // ... filter to delete one HppCalculation
     *   }
     * })
     *
     */
    delete<T extends HppCalculationDeleteArgs>(args: Prisma.SelectSubset<T, HppCalculationDeleteArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HppCalculation.
     * @param {HppCalculationUpdateArgs} args - Arguments to update one HppCalculation.
     * @example
     * // Update one HppCalculation
     * const hppCalculation = await prisma.hppCalculation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HppCalculationUpdateArgs>(args: Prisma.SelectSubset<T, HppCalculationUpdateArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HppCalculations.
     * @param {HppCalculationDeleteManyArgs} args - Arguments to filter HppCalculations to delete.
     * @example
     * // Delete a few HppCalculations
     * const { count } = await prisma.hppCalculation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HppCalculationDeleteManyArgs>(args?: Prisma.SelectSubset<T, HppCalculationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HppCalculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HppCalculations
     * const hppCalculation = await prisma.hppCalculation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HppCalculationUpdateManyArgs>(args: Prisma.SelectSubset<T, HppCalculationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HppCalculations and returns the data updated in the database.
     * @param {HppCalculationUpdateManyAndReturnArgs} args - Arguments to update many HppCalculations.
     * @example
     * // Update many HppCalculations
     * const hppCalculation = await prisma.hppCalculation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HppCalculations and only return the `id`
     * const hppCalculationWithIdOnly = await prisma.hppCalculation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends HppCalculationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HppCalculationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HppCalculation.
     * @param {HppCalculationUpsertArgs} args - Arguments to update or create a HppCalculation.
     * @example
     * // Update or create a HppCalculation
     * const hppCalculation = await prisma.hppCalculation.upsert({
     *   create: {
     *     // ... data to create a HppCalculation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HppCalculation we want to update
     *   }
     * })
     */
    upsert<T extends HppCalculationUpsertArgs>(args: Prisma.SelectSubset<T, HppCalculationUpsertArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HppCalculations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationCountArgs} args - Arguments to filter HppCalculations to count.
     * @example
     * // Count the number of HppCalculations
     * const count = await prisma.hppCalculation.count({
     *   where: {
     *     // ... the filter for the HppCalculations we want to count
     *   }
     * })
    **/
    count<T extends HppCalculationCountArgs>(args?: Prisma.Subset<T, HppCalculationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HppCalculationCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HppCalculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HppCalculationAggregateArgs>(args: Prisma.Subset<T, HppCalculationAggregateArgs>): Prisma.PrismaPromise<GetHppCalculationAggregateType<T>>;
    /**
     * Group by HppCalculation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppCalculationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends HppCalculationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HppCalculationGroupByArgs['orderBy'];
    } : {
        orderBy?: HppCalculationGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HppCalculationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHppCalculationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HppCalculation model
     */
    readonly fields: HppCalculationFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HppCalculation.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HppCalculationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    materials<T extends Prisma.HppCalculation$materialsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HppCalculation$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    materialUsage<T extends Prisma.HppCalculation$materialUsageArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HppCalculation$materialUsageArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the HppCalculation model
 */
export interface HppCalculationFieldRefs {
    readonly id: Prisma.FieldRef<"HppCalculation", 'String'>;
    readonly productName: Prisma.FieldRef<"HppCalculation", 'String'>;
    readonly totalMaterialCost: Prisma.FieldRef<"HppCalculation", 'Int'>;
    readonly totalLaborCost: Prisma.FieldRef<"HppCalculation", 'Int'>;
    readonly estimatedHours: Prisma.FieldRef<"HppCalculation", 'Float'>;
    readonly totalHpp: Prisma.FieldRef<"HppCalculation", 'Int'>;
    readonly profitMarginPercentage: Prisma.FieldRef<"HppCalculation", 'Float'>;
    readonly taxPercentage: Prisma.FieldRef<"HppCalculation", 'Float'>;
    readonly sellingPriceBeforeTax: Prisma.FieldRef<"HppCalculation", 'Int'>;
    readonly taxAmount: Prisma.FieldRef<"HppCalculation", 'Int'>;
    readonly finalSellingPrice: Prisma.FieldRef<"HppCalculation", 'Int'>;
    readonly userId: Prisma.FieldRef<"HppCalculation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"HppCalculation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HppCalculation", 'DateTime'>;
}
/**
 * HppCalculation findUnique
 */
export type HppCalculationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * Filter, which HppCalculation to fetch.
     */
    where: Prisma.HppCalculationWhereUniqueInput;
};
/**
 * HppCalculation findUniqueOrThrow
 */
export type HppCalculationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * Filter, which HppCalculation to fetch.
     */
    where: Prisma.HppCalculationWhereUniqueInput;
};
/**
 * HppCalculation findFirst
 */
export type HppCalculationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * Filter, which HppCalculation to fetch.
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppCalculations to fetch.
     */
    orderBy?: Prisma.HppCalculationOrderByWithRelationInput | Prisma.HppCalculationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HppCalculations.
     */
    cursor?: Prisma.HppCalculationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppCalculations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppCalculations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HppCalculations.
     */
    distinct?: Prisma.HppCalculationScalarFieldEnum | Prisma.HppCalculationScalarFieldEnum[];
};
/**
 * HppCalculation findFirstOrThrow
 */
export type HppCalculationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * Filter, which HppCalculation to fetch.
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppCalculations to fetch.
     */
    orderBy?: Prisma.HppCalculationOrderByWithRelationInput | Prisma.HppCalculationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HppCalculations.
     */
    cursor?: Prisma.HppCalculationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppCalculations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppCalculations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HppCalculations.
     */
    distinct?: Prisma.HppCalculationScalarFieldEnum | Prisma.HppCalculationScalarFieldEnum[];
};
/**
 * HppCalculation findMany
 */
export type HppCalculationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * Filter, which HppCalculations to fetch.
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppCalculations to fetch.
     */
    orderBy?: Prisma.HppCalculationOrderByWithRelationInput | Prisma.HppCalculationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HppCalculations.
     */
    cursor?: Prisma.HppCalculationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppCalculations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppCalculations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HppCalculations.
     */
    distinct?: Prisma.HppCalculationScalarFieldEnum | Prisma.HppCalculationScalarFieldEnum[];
};
/**
 * HppCalculation create
 */
export type HppCalculationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * The data needed to create a HppCalculation.
     */
    data: Prisma.XOR<Prisma.HppCalculationCreateInput, Prisma.HppCalculationUncheckedCreateInput>;
};
/**
 * HppCalculation createMany
 */
export type HppCalculationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HppCalculations.
     */
    data: Prisma.HppCalculationCreateManyInput | Prisma.HppCalculationCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * HppCalculation createManyAndReturn
 */
export type HppCalculationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * The data used to create many HppCalculations.
     */
    data: Prisma.HppCalculationCreateManyInput | Prisma.HppCalculationCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HppCalculation update
 */
export type HppCalculationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * The data needed to update a HppCalculation.
     */
    data: Prisma.XOR<Prisma.HppCalculationUpdateInput, Prisma.HppCalculationUncheckedUpdateInput>;
    /**
     * Choose, which HppCalculation to update.
     */
    where: Prisma.HppCalculationWhereUniqueInput;
};
/**
 * HppCalculation updateMany
 */
export type HppCalculationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HppCalculations.
     */
    data: Prisma.XOR<Prisma.HppCalculationUpdateManyMutationInput, Prisma.HppCalculationUncheckedUpdateManyInput>;
    /**
     * Filter which HppCalculations to update
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * Limit how many HppCalculations to update.
     */
    limit?: number;
};
/**
 * HppCalculation updateManyAndReturn
 */
export type HppCalculationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * The data used to update HppCalculations.
     */
    data: Prisma.XOR<Prisma.HppCalculationUpdateManyMutationInput, Prisma.HppCalculationUncheckedUpdateManyInput>;
    /**
     * Filter which HppCalculations to update
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * Limit how many HppCalculations to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HppCalculation upsert
 */
export type HppCalculationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * The filter to search for the HppCalculation to update in case it exists.
     */
    where: Prisma.HppCalculationWhereUniqueInput;
    /**
     * In case the HppCalculation found by the `where` argument doesn't exist, create a new HppCalculation with this data.
     */
    create: Prisma.XOR<Prisma.HppCalculationCreateInput, Prisma.HppCalculationUncheckedCreateInput>;
    /**
     * In case the HppCalculation was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HppCalculationUpdateInput, Prisma.HppCalculationUncheckedUpdateInput>;
};
/**
 * HppCalculation delete
 */
export type HppCalculationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
    /**
     * Filter which HppCalculation to delete.
     */
    where: Prisma.HppCalculationWhereUniqueInput;
};
/**
 * HppCalculation deleteMany
 */
export type HppCalculationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HppCalculations to delete
     */
    where?: Prisma.HppCalculationWhereInput;
    /**
     * Limit how many HppCalculations to delete.
     */
    limit?: number;
};
/**
 * HppCalculation.materials
 */
export type HppCalculation$materialsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialInclude<ExtArgs> | null;
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    cursor?: Prisma.MaterialWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * HppCalculation.materialUsage
 */
export type HppCalculation$materialUsageArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppMaterialUsage
     */
    select?: Prisma.HppMaterialUsageSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppMaterialUsage
     */
    omit?: Prisma.HppMaterialUsageOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppMaterialUsageInclude<ExtArgs> | null;
    where?: Prisma.HppMaterialUsageWhereInput;
    orderBy?: Prisma.HppMaterialUsageOrderByWithRelationInput | Prisma.HppMaterialUsageOrderByWithRelationInput[];
    cursor?: Prisma.HppMaterialUsageWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HppMaterialUsageScalarFieldEnum | Prisma.HppMaterialUsageScalarFieldEnum[];
};
/**
 * HppCalculation without action
 */
export type HppCalculationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppCalculation
     */
    select?: Prisma.HppCalculationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the HppCalculation
     */
    omit?: Prisma.HppCalculationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppCalculationInclude<ExtArgs> | null;
};
