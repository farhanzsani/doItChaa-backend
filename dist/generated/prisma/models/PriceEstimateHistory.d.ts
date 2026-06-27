import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model PriceEstimateHistory
 *
 */
export type PriceEstimateHistoryModel = runtime.Types.Result.DefaultSelection<Prisma.$PriceEstimateHistoryPayload>;
export type AggregatePriceEstimateHistory = {
    _count: PriceEstimateHistoryCountAggregateOutputType | null;
    _avg: PriceEstimateHistoryAvgAggregateOutputType | null;
    _sum: PriceEstimateHistorySumAggregateOutputType | null;
    _min: PriceEstimateHistoryMinAggregateOutputType | null;
    _max: PriceEstimateHistoryMaxAggregateOutputType | null;
};
export type PriceEstimateHistoryAvgAggregateOutputType = {
    sizeCm: number | null;
    estimatedHours: number | null;
    estimatedMaterialCost: number | null;
    minimumRecommendedPrice: number | null;
    maximumRecommendedPrice: number | null;
};
export type PriceEstimateHistorySumAggregateOutputType = {
    sizeCm: number | null;
    estimatedHours: number | null;
    estimatedMaterialCost: number | null;
    minimumRecommendedPrice: number | null;
    maximumRecommendedPrice: number | null;
};
export type PriceEstimateHistoryMinAggregateOutputType = {
    id: string | null;
    productName: string | null;
    sizeCm: number | null;
    complexity: $Enums.Complexity | null;
    estimatedHours: number | null;
    estimatedMaterialCost: number | null;
    minimumRecommendedPrice: number | null;
    maximumRecommendedPrice: number | null;
    userId: string | null;
    createdAt: Date | null;
};
export type PriceEstimateHistoryMaxAggregateOutputType = {
    id: string | null;
    productName: string | null;
    sizeCm: number | null;
    complexity: $Enums.Complexity | null;
    estimatedHours: number | null;
    estimatedMaterialCost: number | null;
    minimumRecommendedPrice: number | null;
    maximumRecommendedPrice: number | null;
    userId: string | null;
    createdAt: Date | null;
};
export type PriceEstimateHistoryCountAggregateOutputType = {
    id: number;
    productName: number;
    sizeCm: number;
    complexity: number;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    userId: number;
    createdAt: number;
    _all: number;
};
export type PriceEstimateHistoryAvgAggregateInputType = {
    sizeCm?: true;
    estimatedHours?: true;
    estimatedMaterialCost?: true;
    minimumRecommendedPrice?: true;
    maximumRecommendedPrice?: true;
};
export type PriceEstimateHistorySumAggregateInputType = {
    sizeCm?: true;
    estimatedHours?: true;
    estimatedMaterialCost?: true;
    minimumRecommendedPrice?: true;
    maximumRecommendedPrice?: true;
};
export type PriceEstimateHistoryMinAggregateInputType = {
    id?: true;
    productName?: true;
    sizeCm?: true;
    complexity?: true;
    estimatedHours?: true;
    estimatedMaterialCost?: true;
    minimumRecommendedPrice?: true;
    maximumRecommendedPrice?: true;
    userId?: true;
    createdAt?: true;
};
export type PriceEstimateHistoryMaxAggregateInputType = {
    id?: true;
    productName?: true;
    sizeCm?: true;
    complexity?: true;
    estimatedHours?: true;
    estimatedMaterialCost?: true;
    minimumRecommendedPrice?: true;
    maximumRecommendedPrice?: true;
    userId?: true;
    createdAt?: true;
};
export type PriceEstimateHistoryCountAggregateInputType = {
    id?: true;
    productName?: true;
    sizeCm?: true;
    complexity?: true;
    estimatedHours?: true;
    estimatedMaterialCost?: true;
    minimumRecommendedPrice?: true;
    maximumRecommendedPrice?: true;
    userId?: true;
    createdAt?: true;
    _all?: true;
};
export type PriceEstimateHistoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PriceEstimateHistory to aggregate.
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceEstimateHistories to fetch.
     */
    orderBy?: Prisma.PriceEstimateHistoryOrderByWithRelationInput | Prisma.PriceEstimateHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.PriceEstimateHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceEstimateHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceEstimateHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned PriceEstimateHistories
    **/
    _count?: true | PriceEstimateHistoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PriceEstimateHistoryAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PriceEstimateHistorySumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PriceEstimateHistoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PriceEstimateHistoryMaxAggregateInputType;
};
export type GetPriceEstimateHistoryAggregateType<T extends PriceEstimateHistoryAggregateArgs> = {
    [P in keyof T & keyof AggregatePriceEstimateHistory]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePriceEstimateHistory[P]> : Prisma.GetScalarType<T[P], AggregatePriceEstimateHistory[P]>;
};
export type PriceEstimateHistoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PriceEstimateHistoryWhereInput;
    orderBy?: Prisma.PriceEstimateHistoryOrderByWithAggregationInput | Prisma.PriceEstimateHistoryOrderByWithAggregationInput[];
    by: Prisma.PriceEstimateHistoryScalarFieldEnum[] | Prisma.PriceEstimateHistoryScalarFieldEnum;
    having?: Prisma.PriceEstimateHistoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PriceEstimateHistoryCountAggregateInputType | true;
    _avg?: PriceEstimateHistoryAvgAggregateInputType;
    _sum?: PriceEstimateHistorySumAggregateInputType;
    _min?: PriceEstimateHistoryMinAggregateInputType;
    _max?: PriceEstimateHistoryMaxAggregateInputType;
};
export type PriceEstimateHistoryGroupByOutputType = {
    id: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    userId: string;
    createdAt: Date;
    _count: PriceEstimateHistoryCountAggregateOutputType | null;
    _avg: PriceEstimateHistoryAvgAggregateOutputType | null;
    _sum: PriceEstimateHistorySumAggregateOutputType | null;
    _min: PriceEstimateHistoryMinAggregateOutputType | null;
    _max: PriceEstimateHistoryMaxAggregateOutputType | null;
};
export type GetPriceEstimateHistoryGroupByPayload<T extends PriceEstimateHistoryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PriceEstimateHistoryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PriceEstimateHistoryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PriceEstimateHistoryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PriceEstimateHistoryGroupByOutputType[P]>;
}>>;
export type PriceEstimateHistoryWhereInput = {
    AND?: Prisma.PriceEstimateHistoryWhereInput | Prisma.PriceEstimateHistoryWhereInput[];
    OR?: Prisma.PriceEstimateHistoryWhereInput[];
    NOT?: Prisma.PriceEstimateHistoryWhereInput | Prisma.PriceEstimateHistoryWhereInput[];
    id?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    productName?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    sizeCm?: Prisma.FloatFilter<"PriceEstimateHistory"> | number;
    complexity?: Prisma.EnumComplexityFilter<"PriceEstimateHistory"> | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFilter<"PriceEstimateHistory"> | number;
    estimatedMaterialCost?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    minimumRecommendedPrice?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    maximumRecommendedPrice?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    userId?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"PriceEstimateHistory"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
};
export type PriceEstimateHistoryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    sizeCm?: Prisma.SortOrder;
    complexity?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    tasks?: Prisma.TaskOrderByRelationAggregateInput;
};
export type PriceEstimateHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.PriceEstimateHistoryWhereInput | Prisma.PriceEstimateHistoryWhereInput[];
    OR?: Prisma.PriceEstimateHistoryWhereInput[];
    NOT?: Prisma.PriceEstimateHistoryWhereInput | Prisma.PriceEstimateHistoryWhereInput[];
    productName?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    sizeCm?: Prisma.FloatFilter<"PriceEstimateHistory"> | number;
    complexity?: Prisma.EnumComplexityFilter<"PriceEstimateHistory"> | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFilter<"PriceEstimateHistory"> | number;
    estimatedMaterialCost?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    minimumRecommendedPrice?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    maximumRecommendedPrice?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    userId?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"PriceEstimateHistory"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    tasks?: Prisma.TaskListRelationFilter;
}, "id">;
export type PriceEstimateHistoryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    sizeCm?: Prisma.SortOrder;
    complexity?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PriceEstimateHistoryCountOrderByAggregateInput;
    _avg?: Prisma.PriceEstimateHistoryAvgOrderByAggregateInput;
    _max?: Prisma.PriceEstimateHistoryMaxOrderByAggregateInput;
    _min?: Prisma.PriceEstimateHistoryMinOrderByAggregateInput;
    _sum?: Prisma.PriceEstimateHistorySumOrderByAggregateInput;
};
export type PriceEstimateHistoryScalarWhereWithAggregatesInput = {
    AND?: Prisma.PriceEstimateHistoryScalarWhereWithAggregatesInput | Prisma.PriceEstimateHistoryScalarWhereWithAggregatesInput[];
    OR?: Prisma.PriceEstimateHistoryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PriceEstimateHistoryScalarWhereWithAggregatesInput | Prisma.PriceEstimateHistoryScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"PriceEstimateHistory"> | string;
    productName?: Prisma.StringWithAggregatesFilter<"PriceEstimateHistory"> | string;
    sizeCm?: Prisma.FloatWithAggregatesFilter<"PriceEstimateHistory"> | number;
    complexity?: Prisma.EnumComplexityWithAggregatesFilter<"PriceEstimateHistory"> | $Enums.Complexity;
    estimatedHours?: Prisma.FloatWithAggregatesFilter<"PriceEstimateHistory"> | number;
    estimatedMaterialCost?: Prisma.IntWithAggregatesFilter<"PriceEstimateHistory"> | number;
    minimumRecommendedPrice?: Prisma.IntWithAggregatesFilter<"PriceEstimateHistory"> | number;
    maximumRecommendedPrice?: Prisma.IntWithAggregatesFilter<"PriceEstimateHistory"> | number;
    userId?: Prisma.StringWithAggregatesFilter<"PriceEstimateHistory"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PriceEstimateHistory"> | Date | string;
};
export type PriceEstimateHistoryCreateInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPriceEstimatesInput;
    tasks?: Prisma.TaskCreateNestedManyWithoutEstimateHistoryInput;
};
export type PriceEstimateHistoryUncheckedCreateInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    userId: string;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutEstimateHistoryInput;
};
export type PriceEstimateHistoryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceEstimatesNestedInput;
    tasks?: Prisma.TaskUpdateManyWithoutEstimateHistoryNestedInput;
};
export type PriceEstimateHistoryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutEstimateHistoryNestedInput;
};
export type PriceEstimateHistoryCreateManyInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    userId: string;
    createdAt?: Date | string;
};
export type PriceEstimateHistoryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceEstimateHistoryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceEstimateHistoryListRelationFilter = {
    every?: Prisma.PriceEstimateHistoryWhereInput;
    some?: Prisma.PriceEstimateHistoryWhereInput;
    none?: Prisma.PriceEstimateHistoryWhereInput;
};
export type PriceEstimateHistoryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PriceEstimateHistoryNullableScalarRelationFilter = {
    is?: Prisma.PriceEstimateHistoryWhereInput | null;
    isNot?: Prisma.PriceEstimateHistoryWhereInput | null;
};
export type PriceEstimateHistoryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    sizeCm?: Prisma.SortOrder;
    complexity?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PriceEstimateHistoryAvgOrderByAggregateInput = {
    sizeCm?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
};
export type PriceEstimateHistoryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    sizeCm?: Prisma.SortOrder;
    complexity?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PriceEstimateHistoryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productName?: Prisma.SortOrder;
    sizeCm?: Prisma.SortOrder;
    complexity?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PriceEstimateHistorySumOrderByAggregateInput = {
    sizeCm?: Prisma.SortOrder;
    estimatedHours?: Prisma.SortOrder;
    estimatedMaterialCost?: Prisma.SortOrder;
    minimumRecommendedPrice?: Prisma.SortOrder;
    maximumRecommendedPrice?: Prisma.SortOrder;
};
export type PriceEstimateHistoryCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput> | Prisma.PriceEstimateHistoryCreateWithoutUserInput[] | Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput | Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PriceEstimateHistoryCreateManyUserInputEnvelope;
    connect?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
};
export type PriceEstimateHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput> | Prisma.PriceEstimateHistoryCreateWithoutUserInput[] | Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput | Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.PriceEstimateHistoryCreateManyUserInputEnvelope;
    connect?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
};
export type PriceEstimateHistoryUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput> | Prisma.PriceEstimateHistoryCreateWithoutUserInput[] | Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput | Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PriceEstimateHistoryUpsertWithWhereUniqueWithoutUserInput | Prisma.PriceEstimateHistoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PriceEstimateHistoryCreateManyUserInputEnvelope;
    set?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    disconnect?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    delete?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    connect?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    update?: Prisma.PriceEstimateHistoryUpdateWithWhereUniqueWithoutUserInput | Prisma.PriceEstimateHistoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PriceEstimateHistoryUpdateManyWithWhereWithoutUserInput | Prisma.PriceEstimateHistoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PriceEstimateHistoryScalarWhereInput | Prisma.PriceEstimateHistoryScalarWhereInput[];
};
export type PriceEstimateHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput> | Prisma.PriceEstimateHistoryCreateWithoutUserInput[] | Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput | Prisma.PriceEstimateHistoryCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.PriceEstimateHistoryUpsertWithWhereUniqueWithoutUserInput | Prisma.PriceEstimateHistoryUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.PriceEstimateHistoryCreateManyUserInputEnvelope;
    set?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    disconnect?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    delete?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    connect?: Prisma.PriceEstimateHistoryWhereUniqueInput | Prisma.PriceEstimateHistoryWhereUniqueInput[];
    update?: Prisma.PriceEstimateHistoryUpdateWithWhereUniqueWithoutUserInput | Prisma.PriceEstimateHistoryUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.PriceEstimateHistoryUpdateManyWithWhereWithoutUserInput | Prisma.PriceEstimateHistoryUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.PriceEstimateHistoryScalarWhereInput | Prisma.PriceEstimateHistoryScalarWhereInput[];
};
export type PriceEstimateHistoryCreateNestedOneWithoutTasksInput = {
    create?: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutTasksInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.PriceEstimateHistoryCreateOrConnectWithoutTasksInput;
    connect?: Prisma.PriceEstimateHistoryWhereUniqueInput;
};
export type PriceEstimateHistoryUpdateOneWithoutTasksNestedInput = {
    create?: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutTasksInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutTasksInput>;
    connectOrCreate?: Prisma.PriceEstimateHistoryCreateOrConnectWithoutTasksInput;
    upsert?: Prisma.PriceEstimateHistoryUpsertWithoutTasksInput;
    disconnect?: Prisma.PriceEstimateHistoryWhereInput | boolean;
    delete?: Prisma.PriceEstimateHistoryWhereInput | boolean;
    connect?: Prisma.PriceEstimateHistoryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PriceEstimateHistoryUpdateToOneWithWhereWithoutTasksInput, Prisma.PriceEstimateHistoryUpdateWithoutTasksInput>, Prisma.PriceEstimateHistoryUncheckedUpdateWithoutTasksInput>;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumComplexityFieldUpdateOperationsInput = {
    set?: $Enums.Complexity;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type PriceEstimateHistoryCreateWithoutUserInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    createdAt?: Date | string;
    tasks?: Prisma.TaskCreateNestedManyWithoutEstimateHistoryInput;
};
export type PriceEstimateHistoryUncheckedCreateWithoutUserInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    createdAt?: Date | string;
    tasks?: Prisma.TaskUncheckedCreateNestedManyWithoutEstimateHistoryInput;
};
export type PriceEstimateHistoryCreateOrConnectWithoutUserInput = {
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput>;
};
export type PriceEstimateHistoryCreateManyUserInputEnvelope = {
    data: Prisma.PriceEstimateHistoryCreateManyUserInput | Prisma.PriceEstimateHistoryCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type PriceEstimateHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
    update: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutUserInput>;
};
export type PriceEstimateHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
    data: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateWithoutUserInput, Prisma.PriceEstimateHistoryUncheckedUpdateWithoutUserInput>;
};
export type PriceEstimateHistoryUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.PriceEstimateHistoryScalarWhereInput;
    data: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateManyMutationInput, Prisma.PriceEstimateHistoryUncheckedUpdateManyWithoutUserInput>;
};
export type PriceEstimateHistoryScalarWhereInput = {
    AND?: Prisma.PriceEstimateHistoryScalarWhereInput | Prisma.PriceEstimateHistoryScalarWhereInput[];
    OR?: Prisma.PriceEstimateHistoryScalarWhereInput[];
    NOT?: Prisma.PriceEstimateHistoryScalarWhereInput | Prisma.PriceEstimateHistoryScalarWhereInput[];
    id?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    productName?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    sizeCm?: Prisma.FloatFilter<"PriceEstimateHistory"> | number;
    complexity?: Prisma.EnumComplexityFilter<"PriceEstimateHistory"> | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFilter<"PriceEstimateHistory"> | number;
    estimatedMaterialCost?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    minimumRecommendedPrice?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    maximumRecommendedPrice?: Prisma.IntFilter<"PriceEstimateHistory"> | number;
    userId?: Prisma.StringFilter<"PriceEstimateHistory"> | string;
    createdAt?: Prisma.DateTimeFilter<"PriceEstimateHistory"> | Date | string;
};
export type PriceEstimateHistoryCreateWithoutTasksInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutPriceEstimatesInput;
};
export type PriceEstimateHistoryUncheckedCreateWithoutTasksInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    userId: string;
    createdAt?: Date | string;
};
export type PriceEstimateHistoryCreateOrConnectWithoutTasksInput = {
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
    create: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutTasksInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutTasksInput>;
};
export type PriceEstimateHistoryUpsertWithoutTasksInput = {
    update: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateWithoutTasksInput, Prisma.PriceEstimateHistoryUncheckedUpdateWithoutTasksInput>;
    create: Prisma.XOR<Prisma.PriceEstimateHistoryCreateWithoutTasksInput, Prisma.PriceEstimateHistoryUncheckedCreateWithoutTasksInput>;
    where?: Prisma.PriceEstimateHistoryWhereInput;
};
export type PriceEstimateHistoryUpdateToOneWithWhereWithoutTasksInput = {
    where?: Prisma.PriceEstimateHistoryWhereInput;
    data: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateWithoutTasksInput, Prisma.PriceEstimateHistoryUncheckedUpdateWithoutTasksInput>;
};
export type PriceEstimateHistoryUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutPriceEstimatesNestedInput;
};
export type PriceEstimateHistoryUncheckedUpdateWithoutTasksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PriceEstimateHistoryCreateManyUserInput = {
    id?: string;
    productName: string;
    sizeCm: number;
    complexity: $Enums.Complexity;
    estimatedHours: number;
    estimatedMaterialCost: number;
    minimumRecommendedPrice: number;
    maximumRecommendedPrice: number;
    createdAt?: Date | string;
};
export type PriceEstimateHistoryUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUpdateManyWithoutEstimateHistoryNestedInput;
};
export type PriceEstimateHistoryUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    tasks?: Prisma.TaskUncheckedUpdateManyWithoutEstimateHistoryNestedInput;
};
export type PriceEstimateHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productName?: Prisma.StringFieldUpdateOperationsInput | string;
    sizeCm?: Prisma.FloatFieldUpdateOperationsInput | number;
    complexity?: Prisma.EnumComplexityFieldUpdateOperationsInput | $Enums.Complexity;
    estimatedHours?: Prisma.FloatFieldUpdateOperationsInput | number;
    estimatedMaterialCost?: Prisma.IntFieldUpdateOperationsInput | number;
    minimumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    maximumRecommendedPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type PriceEstimateHistoryCountOutputType
 */
export type PriceEstimateHistoryCountOutputType = {
    tasks: number;
};
export type PriceEstimateHistoryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tasks?: boolean | PriceEstimateHistoryCountOutputTypeCountTasksArgs;
};
/**
 * PriceEstimateHistoryCountOutputType without action
 */
export type PriceEstimateHistoryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistoryCountOutputType
     */
    select?: Prisma.PriceEstimateHistoryCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * PriceEstimateHistoryCountOutputType without action
 */
export type PriceEstimateHistoryCountOutputTypeCountTasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TaskWhereInput;
};
export type PriceEstimateHistorySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productName?: boolean;
    sizeCm?: boolean;
    complexity?: boolean;
    estimatedHours?: boolean;
    estimatedMaterialCost?: boolean;
    minimumRecommendedPrice?: boolean;
    maximumRecommendedPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.PriceEstimateHistory$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.PriceEstimateHistoryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceEstimateHistory"]>;
export type PriceEstimateHistorySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productName?: boolean;
    sizeCm?: boolean;
    complexity?: boolean;
    estimatedHours?: boolean;
    estimatedMaterialCost?: boolean;
    minimumRecommendedPrice?: boolean;
    maximumRecommendedPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceEstimateHistory"]>;
export type PriceEstimateHistorySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productName?: boolean;
    sizeCm?: boolean;
    complexity?: boolean;
    estimatedHours?: boolean;
    estimatedMaterialCost?: boolean;
    minimumRecommendedPrice?: boolean;
    maximumRecommendedPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["priceEstimateHistory"]>;
export type PriceEstimateHistorySelectScalar = {
    id?: boolean;
    productName?: boolean;
    sizeCm?: boolean;
    complexity?: boolean;
    estimatedHours?: boolean;
    estimatedMaterialCost?: boolean;
    minimumRecommendedPrice?: boolean;
    maximumRecommendedPrice?: boolean;
    userId?: boolean;
    createdAt?: boolean;
};
export type PriceEstimateHistoryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productName" | "sizeCm" | "complexity" | "estimatedHours" | "estimatedMaterialCost" | "minimumRecommendedPrice" | "maximumRecommendedPrice" | "userId" | "createdAt", ExtArgs["result"]["priceEstimateHistory"]>;
export type PriceEstimateHistoryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    tasks?: boolean | Prisma.PriceEstimateHistory$tasksArgs<ExtArgs>;
    _count?: boolean | Prisma.PriceEstimateHistoryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PriceEstimateHistoryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type PriceEstimateHistoryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $PriceEstimateHistoryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PriceEstimateHistory";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        tasks: Prisma.$TaskPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productName: string;
        sizeCm: number;
        complexity: $Enums.Complexity;
        estimatedHours: number;
        estimatedMaterialCost: number;
        minimumRecommendedPrice: number;
        maximumRecommendedPrice: number;
        userId: string;
        createdAt: Date;
    }, ExtArgs["result"]["priceEstimateHistory"]>;
    composites: {};
};
export type PriceEstimateHistoryGetPayload<S extends boolean | null | undefined | PriceEstimateHistoryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload, S>;
export type PriceEstimateHistoryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PriceEstimateHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PriceEstimateHistoryCountAggregateInputType | true;
};
export interface PriceEstimateHistoryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PriceEstimateHistory'];
        meta: {
            name: 'PriceEstimateHistory';
        };
    };
    /**
     * Find zero or one PriceEstimateHistory that matches the filter.
     * @param {PriceEstimateHistoryFindUniqueArgs} args - Arguments to find a PriceEstimateHistory
     * @example
     * // Get one PriceEstimateHistory
     * const priceEstimateHistory = await prisma.priceEstimateHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceEstimateHistoryFindUniqueArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PriceEstimateHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PriceEstimateHistoryFindUniqueOrThrowArgs} args - Arguments to find a PriceEstimateHistory
     * @example
     * // Get one PriceEstimateHistory
     * const priceEstimateHistory = await prisma.priceEstimateHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceEstimateHistoryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PriceEstimateHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryFindFirstArgs} args - Arguments to find a PriceEstimateHistory
     * @example
     * // Get one PriceEstimateHistory
     * const priceEstimateHistory = await prisma.priceEstimateHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceEstimateHistoryFindFirstArgs>(args?: Prisma.SelectSubset<T, PriceEstimateHistoryFindFirstArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PriceEstimateHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryFindFirstOrThrowArgs} args - Arguments to find a PriceEstimateHistory
     * @example
     * // Get one PriceEstimateHistory
     * const priceEstimateHistory = await prisma.priceEstimateHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceEstimateHistoryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PriceEstimateHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PriceEstimateHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceEstimateHistories
     * const priceEstimateHistories = await prisma.priceEstimateHistory.findMany()
     *
     * // Get first 10 PriceEstimateHistories
     * const priceEstimateHistories = await prisma.priceEstimateHistory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const priceEstimateHistoryWithIdOnly = await prisma.priceEstimateHistory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PriceEstimateHistoryFindManyArgs>(args?: Prisma.SelectSubset<T, PriceEstimateHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PriceEstimateHistory.
     * @param {PriceEstimateHistoryCreateArgs} args - Arguments to create a PriceEstimateHistory.
     * @example
     * // Create one PriceEstimateHistory
     * const PriceEstimateHistory = await prisma.priceEstimateHistory.create({
     *   data: {
     *     // ... data to create a PriceEstimateHistory
     *   }
     * })
     *
     */
    create<T extends PriceEstimateHistoryCreateArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryCreateArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PriceEstimateHistories.
     * @param {PriceEstimateHistoryCreateManyArgs} args - Arguments to create many PriceEstimateHistories.
     * @example
     * // Create many PriceEstimateHistories
     * const priceEstimateHistory = await prisma.priceEstimateHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PriceEstimateHistoryCreateManyArgs>(args?: Prisma.SelectSubset<T, PriceEstimateHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PriceEstimateHistories and returns the data saved in the database.
     * @param {PriceEstimateHistoryCreateManyAndReturnArgs} args - Arguments to create many PriceEstimateHistories.
     * @example
     * // Create many PriceEstimateHistories
     * const priceEstimateHistory = await prisma.priceEstimateHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PriceEstimateHistories and only return the `id`
     * const priceEstimateHistoryWithIdOnly = await prisma.priceEstimateHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PriceEstimateHistoryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PriceEstimateHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PriceEstimateHistory.
     * @param {PriceEstimateHistoryDeleteArgs} args - Arguments to delete one PriceEstimateHistory.
     * @example
     * // Delete one PriceEstimateHistory
     * const PriceEstimateHistory = await prisma.priceEstimateHistory.delete({
     *   where: {
     *     // ... filter to delete one PriceEstimateHistory
     *   }
     * })
     *
     */
    delete<T extends PriceEstimateHistoryDeleteArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryDeleteArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PriceEstimateHistory.
     * @param {PriceEstimateHistoryUpdateArgs} args - Arguments to update one PriceEstimateHistory.
     * @example
     * // Update one PriceEstimateHistory
     * const priceEstimateHistory = await prisma.priceEstimateHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PriceEstimateHistoryUpdateArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryUpdateArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PriceEstimateHistories.
     * @param {PriceEstimateHistoryDeleteManyArgs} args - Arguments to filter PriceEstimateHistories to delete.
     * @example
     * // Delete a few PriceEstimateHistories
     * const { count } = await prisma.priceEstimateHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PriceEstimateHistoryDeleteManyArgs>(args?: Prisma.SelectSubset<T, PriceEstimateHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PriceEstimateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceEstimateHistories
     * const priceEstimateHistory = await prisma.priceEstimateHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PriceEstimateHistoryUpdateManyArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PriceEstimateHistories and returns the data updated in the database.
     * @param {PriceEstimateHistoryUpdateManyAndReturnArgs} args - Arguments to update many PriceEstimateHistories.
     * @example
     * // Update many PriceEstimateHistories
     * const priceEstimateHistory = await prisma.priceEstimateHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PriceEstimateHistories and only return the `id`
     * const priceEstimateHistoryWithIdOnly = await prisma.priceEstimateHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends PriceEstimateHistoryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PriceEstimateHistory.
     * @param {PriceEstimateHistoryUpsertArgs} args - Arguments to update or create a PriceEstimateHistory.
     * @example
     * // Update or create a PriceEstimateHistory
     * const priceEstimateHistory = await prisma.priceEstimateHistory.upsert({
     *   create: {
     *     // ... data to create a PriceEstimateHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceEstimateHistory we want to update
     *   }
     * })
     */
    upsert<T extends PriceEstimateHistoryUpsertArgs>(args: Prisma.SelectSubset<T, PriceEstimateHistoryUpsertArgs<ExtArgs>>): Prisma.Prisma__PriceEstimateHistoryClient<runtime.Types.Result.GetResult<Prisma.$PriceEstimateHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PriceEstimateHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryCountArgs} args - Arguments to filter PriceEstimateHistories to count.
     * @example
     * // Count the number of PriceEstimateHistories
     * const count = await prisma.priceEstimateHistory.count({
     *   where: {
     *     // ... the filter for the PriceEstimateHistories we want to count
     *   }
     * })
    **/
    count<T extends PriceEstimateHistoryCountArgs>(args?: Prisma.Subset<T, PriceEstimateHistoryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PriceEstimateHistoryCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PriceEstimateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceEstimateHistoryAggregateArgs>(args: Prisma.Subset<T, PriceEstimateHistoryAggregateArgs>): Prisma.PrismaPromise<GetPriceEstimateHistoryAggregateType<T>>;
    /**
     * Group by PriceEstimateHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceEstimateHistoryGroupByArgs} args - Group by arguments.
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
    groupBy<T extends PriceEstimateHistoryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PriceEstimateHistoryGroupByArgs['orderBy'];
    } : {
        orderBy?: PriceEstimateHistoryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PriceEstimateHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceEstimateHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the PriceEstimateHistory model
     */
    readonly fields: PriceEstimateHistoryFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for PriceEstimateHistory.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__PriceEstimateHistoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    tasks<T extends Prisma.PriceEstimateHistory$tasksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PriceEstimateHistory$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the PriceEstimateHistory model
 */
export interface PriceEstimateHistoryFieldRefs {
    readonly id: Prisma.FieldRef<"PriceEstimateHistory", 'String'>;
    readonly productName: Prisma.FieldRef<"PriceEstimateHistory", 'String'>;
    readonly sizeCm: Prisma.FieldRef<"PriceEstimateHistory", 'Float'>;
    readonly complexity: Prisma.FieldRef<"PriceEstimateHistory", 'Complexity'>;
    readonly estimatedHours: Prisma.FieldRef<"PriceEstimateHistory", 'Float'>;
    readonly estimatedMaterialCost: Prisma.FieldRef<"PriceEstimateHistory", 'Int'>;
    readonly minimumRecommendedPrice: Prisma.FieldRef<"PriceEstimateHistory", 'Int'>;
    readonly maximumRecommendedPrice: Prisma.FieldRef<"PriceEstimateHistory", 'Int'>;
    readonly userId: Prisma.FieldRef<"PriceEstimateHistory", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PriceEstimateHistory", 'DateTime'>;
}
/**
 * PriceEstimateHistory findUnique
 */
export type PriceEstimateHistoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceEstimateHistory to fetch.
     */
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
};
/**
 * PriceEstimateHistory findUniqueOrThrow
 */
export type PriceEstimateHistoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceEstimateHistory to fetch.
     */
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
};
/**
 * PriceEstimateHistory findFirst
 */
export type PriceEstimateHistoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceEstimateHistory to fetch.
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceEstimateHistories to fetch.
     */
    orderBy?: Prisma.PriceEstimateHistoryOrderByWithRelationInput | Prisma.PriceEstimateHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PriceEstimateHistories.
     */
    cursor?: Prisma.PriceEstimateHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceEstimateHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceEstimateHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceEstimateHistories.
     */
    distinct?: Prisma.PriceEstimateHistoryScalarFieldEnum | Prisma.PriceEstimateHistoryScalarFieldEnum[];
};
/**
 * PriceEstimateHistory findFirstOrThrow
 */
export type PriceEstimateHistoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceEstimateHistory to fetch.
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceEstimateHistories to fetch.
     */
    orderBy?: Prisma.PriceEstimateHistoryOrderByWithRelationInput | Prisma.PriceEstimateHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for PriceEstimateHistories.
     */
    cursor?: Prisma.PriceEstimateHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceEstimateHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceEstimateHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceEstimateHistories.
     */
    distinct?: Prisma.PriceEstimateHistoryScalarFieldEnum | Prisma.PriceEstimateHistoryScalarFieldEnum[];
};
/**
 * PriceEstimateHistory findMany
 */
export type PriceEstimateHistoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * Filter, which PriceEstimateHistories to fetch.
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of PriceEstimateHistories to fetch.
     */
    orderBy?: Prisma.PriceEstimateHistoryOrderByWithRelationInput | Prisma.PriceEstimateHistoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing PriceEstimateHistories.
     */
    cursor?: Prisma.PriceEstimateHistoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` PriceEstimateHistories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` PriceEstimateHistories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of PriceEstimateHistories.
     */
    distinct?: Prisma.PriceEstimateHistoryScalarFieldEnum | Prisma.PriceEstimateHistoryScalarFieldEnum[];
};
/**
 * PriceEstimateHistory create
 */
export type PriceEstimateHistoryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a PriceEstimateHistory.
     */
    data: Prisma.XOR<Prisma.PriceEstimateHistoryCreateInput, Prisma.PriceEstimateHistoryUncheckedCreateInput>;
};
/**
 * PriceEstimateHistory createMany
 */
export type PriceEstimateHistoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceEstimateHistories.
     */
    data: Prisma.PriceEstimateHistoryCreateManyInput | Prisma.PriceEstimateHistoryCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * PriceEstimateHistory createManyAndReturn
 */
export type PriceEstimateHistoryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * The data used to create many PriceEstimateHistories.
     */
    data: Prisma.PriceEstimateHistoryCreateManyInput | Prisma.PriceEstimateHistoryCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * PriceEstimateHistory update
 */
export type PriceEstimateHistoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a PriceEstimateHistory.
     */
    data: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateInput, Prisma.PriceEstimateHistoryUncheckedUpdateInput>;
    /**
     * Choose, which PriceEstimateHistory to update.
     */
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
};
/**
 * PriceEstimateHistory updateMany
 */
export type PriceEstimateHistoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceEstimateHistories.
     */
    data: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateManyMutationInput, Prisma.PriceEstimateHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which PriceEstimateHistories to update
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * Limit how many PriceEstimateHistories to update.
     */
    limit?: number;
};
/**
 * PriceEstimateHistory updateManyAndReturn
 */
export type PriceEstimateHistoryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * The data used to update PriceEstimateHistories.
     */
    data: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateManyMutationInput, Prisma.PriceEstimateHistoryUncheckedUpdateManyInput>;
    /**
     * Filter which PriceEstimateHistories to update
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * Limit how many PriceEstimateHistories to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * PriceEstimateHistory upsert
 */
export type PriceEstimateHistoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the PriceEstimateHistory to update in case it exists.
     */
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
    /**
     * In case the PriceEstimateHistory found by the `where` argument doesn't exist, create a new PriceEstimateHistory with this data.
     */
    create: Prisma.XOR<Prisma.PriceEstimateHistoryCreateInput, Prisma.PriceEstimateHistoryUncheckedCreateInput>;
    /**
     * In case the PriceEstimateHistory was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.PriceEstimateHistoryUpdateInput, Prisma.PriceEstimateHistoryUncheckedUpdateInput>;
};
/**
 * PriceEstimateHistory delete
 */
export type PriceEstimateHistoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
    /**
     * Filter which PriceEstimateHistory to delete.
     */
    where: Prisma.PriceEstimateHistoryWhereUniqueInput;
};
/**
 * PriceEstimateHistory deleteMany
 */
export type PriceEstimateHistoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which PriceEstimateHistories to delete
     */
    where?: Prisma.PriceEstimateHistoryWhereInput;
    /**
     * Limit how many PriceEstimateHistories to delete.
     */
    limit?: number;
};
/**
 * PriceEstimateHistory.tasks
 */
export type PriceEstimateHistory$tasksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: Prisma.TaskSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Task
     */
    omit?: Prisma.TaskOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.TaskInclude<ExtArgs> | null;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput | Prisma.TaskOrderByWithRelationInput[];
    cursor?: Prisma.TaskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TaskScalarFieldEnum | Prisma.TaskScalarFieldEnum[];
};
/**
 * PriceEstimateHistory without action
 */
export type PriceEstimateHistoryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceEstimateHistory
     */
    select?: Prisma.PriceEstimateHistorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the PriceEstimateHistory
     */
    omit?: Prisma.PriceEstimateHistoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PriceEstimateHistoryInclude<ExtArgs> | null;
};
