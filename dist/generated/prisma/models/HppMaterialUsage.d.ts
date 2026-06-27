import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model HppMaterialUsage
 *
 */
export type HppMaterialUsageModel = runtime.Types.Result.DefaultSelection<Prisma.$HppMaterialUsagePayload>;
export type AggregateHppMaterialUsage = {
    _count: HppMaterialUsageCountAggregateOutputType | null;
    _avg: HppMaterialUsageAvgAggregateOutputType | null;
    _sum: HppMaterialUsageSumAggregateOutputType | null;
    _min: HppMaterialUsageMinAggregateOutputType | null;
    _max: HppMaterialUsageMaxAggregateOutputType | null;
};
export type HppMaterialUsageAvgAggregateOutputType = {
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
};
export type HppMaterialUsageSumAggregateOutputType = {
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
};
export type HppMaterialUsageMinAggregateOutputType = {
    id: string | null;
    hppCalculationId: string | null;
    materialId: string | null;
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
    createdAt: Date | null;
};
export type HppMaterialUsageMaxAggregateOutputType = {
    id: string | null;
    hppCalculationId: string | null;
    materialId: string | null;
    quantity: number | null;
    unitPrice: number | null;
    totalPrice: number | null;
    createdAt: Date | null;
};
export type HppMaterialUsageCountAggregateOutputType = {
    id: number;
    hppCalculationId: number;
    materialId: number;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt: number;
    _all: number;
};
export type HppMaterialUsageAvgAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type HppMaterialUsageSumAggregateInputType = {
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
};
export type HppMaterialUsageMinAggregateInputType = {
    id?: true;
    hppCalculationId?: true;
    materialId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    createdAt?: true;
};
export type HppMaterialUsageMaxAggregateInputType = {
    id?: true;
    hppCalculationId?: true;
    materialId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    createdAt?: true;
};
export type HppMaterialUsageCountAggregateInputType = {
    id?: true;
    hppCalculationId?: true;
    materialId?: true;
    quantity?: true;
    unitPrice?: true;
    totalPrice?: true;
    createdAt?: true;
    _all?: true;
};
export type HppMaterialUsageAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HppMaterialUsage to aggregate.
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppMaterialUsages to fetch.
     */
    orderBy?: Prisma.HppMaterialUsageOrderByWithRelationInput | Prisma.HppMaterialUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.HppMaterialUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppMaterialUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppMaterialUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned HppMaterialUsages
    **/
    _count?: true | HppMaterialUsageCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: HppMaterialUsageAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: HppMaterialUsageSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: HppMaterialUsageMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: HppMaterialUsageMaxAggregateInputType;
};
export type GetHppMaterialUsageAggregateType<T extends HppMaterialUsageAggregateArgs> = {
    [P in keyof T & keyof AggregateHppMaterialUsage]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHppMaterialUsage[P]> : Prisma.GetScalarType<T[P], AggregateHppMaterialUsage[P]>;
};
export type HppMaterialUsageGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HppMaterialUsageWhereInput;
    orderBy?: Prisma.HppMaterialUsageOrderByWithAggregationInput | Prisma.HppMaterialUsageOrderByWithAggregationInput[];
    by: Prisma.HppMaterialUsageScalarFieldEnum[] | Prisma.HppMaterialUsageScalarFieldEnum;
    having?: Prisma.HppMaterialUsageScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HppMaterialUsageCountAggregateInputType | true;
    _avg?: HppMaterialUsageAvgAggregateInputType;
    _sum?: HppMaterialUsageSumAggregateInputType;
    _min?: HppMaterialUsageMinAggregateInputType;
    _max?: HppMaterialUsageMaxAggregateInputType;
};
export type HppMaterialUsageGroupByOutputType = {
    id: string;
    hppCalculationId: string;
    materialId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt: Date;
    _count: HppMaterialUsageCountAggregateOutputType | null;
    _avg: HppMaterialUsageAvgAggregateOutputType | null;
    _sum: HppMaterialUsageSumAggregateOutputType | null;
    _min: HppMaterialUsageMinAggregateOutputType | null;
    _max: HppMaterialUsageMaxAggregateOutputType | null;
};
export type GetHppMaterialUsageGroupByPayload<T extends HppMaterialUsageGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HppMaterialUsageGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HppMaterialUsageGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HppMaterialUsageGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HppMaterialUsageGroupByOutputType[P]>;
}>>;
export type HppMaterialUsageWhereInput = {
    AND?: Prisma.HppMaterialUsageWhereInput | Prisma.HppMaterialUsageWhereInput[];
    OR?: Prisma.HppMaterialUsageWhereInput[];
    NOT?: Prisma.HppMaterialUsageWhereInput | Prisma.HppMaterialUsageWhereInput[];
    id?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    hppCalculationId?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    materialId?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    quantity?: Prisma.FloatFilter<"HppMaterialUsage"> | number;
    unitPrice?: Prisma.IntFilter<"HppMaterialUsage"> | number;
    totalPrice?: Prisma.IntFilter<"HppMaterialUsage"> | number;
    createdAt?: Prisma.DateTimeFilter<"HppMaterialUsage"> | Date | string;
    hppCalculation?: Prisma.XOR<Prisma.HppCalculationScalarRelationFilter, Prisma.HppCalculationWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
};
export type HppMaterialUsageOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    hppCalculationId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    hppCalculation?: Prisma.HppCalculationOrderByWithRelationInput;
    material?: Prisma.MaterialOrderByWithRelationInput;
};
export type HppMaterialUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    hppCalculationId_materialId?: Prisma.HppMaterialUsageHppCalculationIdMaterialIdCompoundUniqueInput;
    AND?: Prisma.HppMaterialUsageWhereInput | Prisma.HppMaterialUsageWhereInput[];
    OR?: Prisma.HppMaterialUsageWhereInput[];
    NOT?: Prisma.HppMaterialUsageWhereInput | Prisma.HppMaterialUsageWhereInput[];
    hppCalculationId?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    materialId?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    quantity?: Prisma.FloatFilter<"HppMaterialUsage"> | number;
    unitPrice?: Prisma.IntFilter<"HppMaterialUsage"> | number;
    totalPrice?: Prisma.IntFilter<"HppMaterialUsage"> | number;
    createdAt?: Prisma.DateTimeFilter<"HppMaterialUsage"> | Date | string;
    hppCalculation?: Prisma.XOR<Prisma.HppCalculationScalarRelationFilter, Prisma.HppCalculationWhereInput>;
    material?: Prisma.XOR<Prisma.MaterialScalarRelationFilter, Prisma.MaterialWhereInput>;
}, "id" | "hppCalculationId_materialId">;
export type HppMaterialUsageOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    hppCalculationId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.HppMaterialUsageCountOrderByAggregateInput;
    _avg?: Prisma.HppMaterialUsageAvgOrderByAggregateInput;
    _max?: Prisma.HppMaterialUsageMaxOrderByAggregateInput;
    _min?: Prisma.HppMaterialUsageMinOrderByAggregateInput;
    _sum?: Prisma.HppMaterialUsageSumOrderByAggregateInput;
};
export type HppMaterialUsageScalarWhereWithAggregatesInput = {
    AND?: Prisma.HppMaterialUsageScalarWhereWithAggregatesInput | Prisma.HppMaterialUsageScalarWhereWithAggregatesInput[];
    OR?: Prisma.HppMaterialUsageScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HppMaterialUsageScalarWhereWithAggregatesInput | Prisma.HppMaterialUsageScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HppMaterialUsage"> | string;
    hppCalculationId?: Prisma.StringWithAggregatesFilter<"HppMaterialUsage"> | string;
    materialId?: Prisma.StringWithAggregatesFilter<"HppMaterialUsage"> | string;
    quantity?: Prisma.FloatWithAggregatesFilter<"HppMaterialUsage"> | number;
    unitPrice?: Prisma.IntWithAggregatesFilter<"HppMaterialUsage"> | number;
    totalPrice?: Prisma.IntWithAggregatesFilter<"HppMaterialUsage"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HppMaterialUsage"> | Date | string;
};
export type HppMaterialUsageCreateInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
    hppCalculation: Prisma.HppCalculationCreateNestedOneWithoutMaterialUsageInput;
    material: Prisma.MaterialCreateNestedOneWithoutHppMaterialUsagesInput;
};
export type HppMaterialUsageUncheckedCreateInput = {
    id?: string;
    hppCalculationId: string;
    materialId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
};
export type HppMaterialUsageUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppCalculation?: Prisma.HppCalculationUpdateOneRequiredWithoutMaterialUsageNestedInput;
    material?: Prisma.MaterialUpdateOneRequiredWithoutHppMaterialUsagesNestedInput;
};
export type HppMaterialUsageUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hppCalculationId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageCreateManyInput = {
    id?: string;
    hppCalculationId: string;
    materialId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
};
export type HppMaterialUsageUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hppCalculationId?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageListRelationFilter = {
    every?: Prisma.HppMaterialUsageWhereInput;
    some?: Prisma.HppMaterialUsageWhereInput;
    none?: Prisma.HppMaterialUsageWhereInput;
};
export type HppMaterialUsageOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HppMaterialUsageHppCalculationIdMaterialIdCompoundUniqueInput = {
    hppCalculationId: string;
    materialId: string;
};
export type HppMaterialUsageCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hppCalculationId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HppMaterialUsageAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type HppMaterialUsageMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hppCalculationId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HppMaterialUsageMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    hppCalculationId?: Prisma.SortOrder;
    materialId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type HppMaterialUsageSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unitPrice?: Prisma.SortOrder;
    totalPrice?: Prisma.SortOrder;
};
export type HppMaterialUsageCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput> | Prisma.HppMaterialUsageCreateWithoutMaterialInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput | Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyMaterialInputEnvelope;
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
};
export type HppMaterialUsageUncheckedCreateNestedManyWithoutMaterialInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput> | Prisma.HppMaterialUsageCreateWithoutMaterialInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput | Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyMaterialInputEnvelope;
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
};
export type HppMaterialUsageUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput> | Prisma.HppMaterialUsageCreateWithoutMaterialInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput | Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutMaterialInput | Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyMaterialInputEnvelope;
    set?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    disconnect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    delete?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    update?: Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutMaterialInput | Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.HppMaterialUsageUpdateManyWithWhereWithoutMaterialInput | Prisma.HppMaterialUsageUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.HppMaterialUsageScalarWhereInput | Prisma.HppMaterialUsageScalarWhereInput[];
};
export type HppMaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput> | Prisma.HppMaterialUsageCreateWithoutMaterialInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput | Prisma.HppMaterialUsageCreateOrConnectWithoutMaterialInput[];
    upsert?: Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutMaterialInput | Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutMaterialInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyMaterialInputEnvelope;
    set?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    disconnect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    delete?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    update?: Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutMaterialInput | Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutMaterialInput[];
    updateMany?: Prisma.HppMaterialUsageUpdateManyWithWhereWithoutMaterialInput | Prisma.HppMaterialUsageUpdateManyWithWhereWithoutMaterialInput[];
    deleteMany?: Prisma.HppMaterialUsageScalarWhereInput | Prisma.HppMaterialUsageScalarWhereInput[];
};
export type HppMaterialUsageCreateNestedManyWithoutHppCalculationInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput> | Prisma.HppMaterialUsageCreateWithoutHppCalculationInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput | Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyHppCalculationInputEnvelope;
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
};
export type HppMaterialUsageUncheckedCreateNestedManyWithoutHppCalculationInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput> | Prisma.HppMaterialUsageCreateWithoutHppCalculationInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput | Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyHppCalculationInputEnvelope;
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
};
export type HppMaterialUsageUpdateManyWithoutHppCalculationNestedInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput> | Prisma.HppMaterialUsageCreateWithoutHppCalculationInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput | Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput[];
    upsert?: Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutHppCalculationInput | Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutHppCalculationInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyHppCalculationInputEnvelope;
    set?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    disconnect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    delete?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    update?: Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutHppCalculationInput | Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutHppCalculationInput[];
    updateMany?: Prisma.HppMaterialUsageUpdateManyWithWhereWithoutHppCalculationInput | Prisma.HppMaterialUsageUpdateManyWithWhereWithoutHppCalculationInput[];
    deleteMany?: Prisma.HppMaterialUsageScalarWhereInput | Prisma.HppMaterialUsageScalarWhereInput[];
};
export type HppMaterialUsageUncheckedUpdateManyWithoutHppCalculationNestedInput = {
    create?: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput> | Prisma.HppMaterialUsageCreateWithoutHppCalculationInput[] | Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput[];
    connectOrCreate?: Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput | Prisma.HppMaterialUsageCreateOrConnectWithoutHppCalculationInput[];
    upsert?: Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutHppCalculationInput | Prisma.HppMaterialUsageUpsertWithWhereUniqueWithoutHppCalculationInput[];
    createMany?: Prisma.HppMaterialUsageCreateManyHppCalculationInputEnvelope;
    set?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    disconnect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    delete?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    connect?: Prisma.HppMaterialUsageWhereUniqueInput | Prisma.HppMaterialUsageWhereUniqueInput[];
    update?: Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutHppCalculationInput | Prisma.HppMaterialUsageUpdateWithWhereUniqueWithoutHppCalculationInput[];
    updateMany?: Prisma.HppMaterialUsageUpdateManyWithWhereWithoutHppCalculationInput | Prisma.HppMaterialUsageUpdateManyWithWhereWithoutHppCalculationInput[];
    deleteMany?: Prisma.HppMaterialUsageScalarWhereInput | Prisma.HppMaterialUsageScalarWhereInput[];
};
export type HppMaterialUsageCreateWithoutMaterialInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
    hppCalculation: Prisma.HppCalculationCreateNestedOneWithoutMaterialUsageInput;
};
export type HppMaterialUsageUncheckedCreateWithoutMaterialInput = {
    id?: string;
    hppCalculationId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
};
export type HppMaterialUsageCreateOrConnectWithoutMaterialInput = {
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    create: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput>;
};
export type HppMaterialUsageCreateManyMaterialInputEnvelope = {
    data: Prisma.HppMaterialUsageCreateManyMaterialInput | Prisma.HppMaterialUsageCreateManyMaterialInput[];
    skipDuplicates?: boolean;
};
export type HppMaterialUsageUpsertWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    update: Prisma.XOR<Prisma.HppMaterialUsageUpdateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedUpdateWithoutMaterialInput>;
    create: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedCreateWithoutMaterialInput>;
};
export type HppMaterialUsageUpdateWithWhereUniqueWithoutMaterialInput = {
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateWithoutMaterialInput, Prisma.HppMaterialUsageUncheckedUpdateWithoutMaterialInput>;
};
export type HppMaterialUsageUpdateManyWithWhereWithoutMaterialInput = {
    where: Prisma.HppMaterialUsageScalarWhereInput;
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateManyMutationInput, Prisma.HppMaterialUsageUncheckedUpdateManyWithoutMaterialInput>;
};
export type HppMaterialUsageScalarWhereInput = {
    AND?: Prisma.HppMaterialUsageScalarWhereInput | Prisma.HppMaterialUsageScalarWhereInput[];
    OR?: Prisma.HppMaterialUsageScalarWhereInput[];
    NOT?: Prisma.HppMaterialUsageScalarWhereInput | Prisma.HppMaterialUsageScalarWhereInput[];
    id?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    hppCalculationId?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    materialId?: Prisma.StringFilter<"HppMaterialUsage"> | string;
    quantity?: Prisma.FloatFilter<"HppMaterialUsage"> | number;
    unitPrice?: Prisma.IntFilter<"HppMaterialUsage"> | number;
    totalPrice?: Prisma.IntFilter<"HppMaterialUsage"> | number;
    createdAt?: Prisma.DateTimeFilter<"HppMaterialUsage"> | Date | string;
};
export type HppMaterialUsageCreateWithoutHppCalculationInput = {
    id?: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
    material: Prisma.MaterialCreateNestedOneWithoutHppMaterialUsagesInput;
};
export type HppMaterialUsageUncheckedCreateWithoutHppCalculationInput = {
    id?: string;
    materialId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
};
export type HppMaterialUsageCreateOrConnectWithoutHppCalculationInput = {
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    create: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput>;
};
export type HppMaterialUsageCreateManyHppCalculationInputEnvelope = {
    data: Prisma.HppMaterialUsageCreateManyHppCalculationInput | Prisma.HppMaterialUsageCreateManyHppCalculationInput[];
    skipDuplicates?: boolean;
};
export type HppMaterialUsageUpsertWithWhereUniqueWithoutHppCalculationInput = {
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    update: Prisma.XOR<Prisma.HppMaterialUsageUpdateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedUpdateWithoutHppCalculationInput>;
    create: Prisma.XOR<Prisma.HppMaterialUsageCreateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedCreateWithoutHppCalculationInput>;
};
export type HppMaterialUsageUpdateWithWhereUniqueWithoutHppCalculationInput = {
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateWithoutHppCalculationInput, Prisma.HppMaterialUsageUncheckedUpdateWithoutHppCalculationInput>;
};
export type HppMaterialUsageUpdateManyWithWhereWithoutHppCalculationInput = {
    where: Prisma.HppMaterialUsageScalarWhereInput;
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateManyMutationInput, Prisma.HppMaterialUsageUncheckedUpdateManyWithoutHppCalculationInput>;
};
export type HppMaterialUsageCreateManyMaterialInput = {
    id?: string;
    hppCalculationId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
};
export type HppMaterialUsageUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppCalculation?: Prisma.HppCalculationUpdateOneRequiredWithoutMaterialUsageNestedInput;
};
export type HppMaterialUsageUncheckedUpdateWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hppCalculationId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageUncheckedUpdateManyWithoutMaterialInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    hppCalculationId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageCreateManyHppCalculationInput = {
    id?: string;
    materialId: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    createdAt?: Date | string;
};
export type HppMaterialUsageUpdateWithoutHppCalculationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    material?: Prisma.MaterialUpdateOneRequiredWithoutHppMaterialUsagesNestedInput;
};
export type HppMaterialUsageUncheckedUpdateWithoutHppCalculationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageUncheckedUpdateManyWithoutHppCalculationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    materialId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.FloatFieldUpdateOperationsInput | number;
    unitPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    totalPrice?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HppMaterialUsageSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hppCalculationId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    hppCalculation?: boolean | Prisma.HppCalculationDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hppMaterialUsage"]>;
export type HppMaterialUsageSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hppCalculationId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    hppCalculation?: boolean | Prisma.HppCalculationDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hppMaterialUsage"]>;
export type HppMaterialUsageSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    hppCalculationId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
    hppCalculation?: boolean | Prisma.HppCalculationDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hppMaterialUsage"]>;
export type HppMaterialUsageSelectScalar = {
    id?: boolean;
    hppCalculationId?: boolean;
    materialId?: boolean;
    quantity?: boolean;
    unitPrice?: boolean;
    totalPrice?: boolean;
    createdAt?: boolean;
};
export type HppMaterialUsageOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "hppCalculationId" | "materialId" | "quantity" | "unitPrice" | "totalPrice" | "createdAt", ExtArgs["result"]["hppMaterialUsage"]>;
export type HppMaterialUsageInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hppCalculation?: boolean | Prisma.HppCalculationDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type HppMaterialUsageIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hppCalculation?: boolean | Prisma.HppCalculationDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type HppMaterialUsageIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hppCalculation?: boolean | Prisma.HppCalculationDefaultArgs<ExtArgs>;
    material?: boolean | Prisma.MaterialDefaultArgs<ExtArgs>;
};
export type $HppMaterialUsagePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HppMaterialUsage";
    objects: {
        hppCalculation: Prisma.$HppCalculationPayload<ExtArgs>;
        material: Prisma.$MaterialPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        hppCalculationId: string;
        materialId: string;
        quantity: number;
        unitPrice: number;
        totalPrice: number;
        createdAt: Date;
    }, ExtArgs["result"]["hppMaterialUsage"]>;
    composites: {};
};
export type HppMaterialUsageGetPayload<S extends boolean | null | undefined | HppMaterialUsageDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload, S>;
export type HppMaterialUsageCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HppMaterialUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HppMaterialUsageCountAggregateInputType | true;
};
export interface HppMaterialUsageDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HppMaterialUsage'];
        meta: {
            name: 'HppMaterialUsage';
        };
    };
    /**
     * Find zero or one HppMaterialUsage that matches the filter.
     * @param {HppMaterialUsageFindUniqueArgs} args - Arguments to find a HppMaterialUsage
     * @example
     * // Get one HppMaterialUsage
     * const hppMaterialUsage = await prisma.hppMaterialUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HppMaterialUsageFindUniqueArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one HppMaterialUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HppMaterialUsageFindUniqueOrThrowArgs} args - Arguments to find a HppMaterialUsage
     * @example
     * // Get one HppMaterialUsage
     * const hppMaterialUsage = await prisma.hppMaterialUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HppMaterialUsageFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HppMaterialUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageFindFirstArgs} args - Arguments to find a HppMaterialUsage
     * @example
     * // Get one HppMaterialUsage
     * const hppMaterialUsage = await prisma.hppMaterialUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HppMaterialUsageFindFirstArgs>(args?: Prisma.SelectSubset<T, HppMaterialUsageFindFirstArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first HppMaterialUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageFindFirstOrThrowArgs} args - Arguments to find a HppMaterialUsage
     * @example
     * // Get one HppMaterialUsage
     * const hppMaterialUsage = await prisma.hppMaterialUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HppMaterialUsageFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HppMaterialUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more HppMaterialUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HppMaterialUsages
     * const hppMaterialUsages = await prisma.hppMaterialUsage.findMany()
     *
     * // Get first 10 HppMaterialUsages
     * const hppMaterialUsages = await prisma.hppMaterialUsage.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hppMaterialUsageWithIdOnly = await prisma.hppMaterialUsage.findMany({ select: { id: true } })
     *
     */
    findMany<T extends HppMaterialUsageFindManyArgs>(args?: Prisma.SelectSubset<T, HppMaterialUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a HppMaterialUsage.
     * @param {HppMaterialUsageCreateArgs} args - Arguments to create a HppMaterialUsage.
     * @example
     * // Create one HppMaterialUsage
     * const HppMaterialUsage = await prisma.hppMaterialUsage.create({
     *   data: {
     *     // ... data to create a HppMaterialUsage
     *   }
     * })
     *
     */
    create<T extends HppMaterialUsageCreateArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageCreateArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many HppMaterialUsages.
     * @param {HppMaterialUsageCreateManyArgs} args - Arguments to create many HppMaterialUsages.
     * @example
     * // Create many HppMaterialUsages
     * const hppMaterialUsage = await prisma.hppMaterialUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends HppMaterialUsageCreateManyArgs>(args?: Prisma.SelectSubset<T, HppMaterialUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many HppMaterialUsages and returns the data saved in the database.
     * @param {HppMaterialUsageCreateManyAndReturnArgs} args - Arguments to create many HppMaterialUsages.
     * @example
     * // Create many HppMaterialUsages
     * const hppMaterialUsage = await prisma.hppMaterialUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many HppMaterialUsages and only return the `id`
     * const hppMaterialUsageWithIdOnly = await prisma.hppMaterialUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends HppMaterialUsageCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HppMaterialUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a HppMaterialUsage.
     * @param {HppMaterialUsageDeleteArgs} args - Arguments to delete one HppMaterialUsage.
     * @example
     * // Delete one HppMaterialUsage
     * const HppMaterialUsage = await prisma.hppMaterialUsage.delete({
     *   where: {
     *     // ... filter to delete one HppMaterialUsage
     *   }
     * })
     *
     */
    delete<T extends HppMaterialUsageDeleteArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageDeleteArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one HppMaterialUsage.
     * @param {HppMaterialUsageUpdateArgs} args - Arguments to update one HppMaterialUsage.
     * @example
     * // Update one HppMaterialUsage
     * const hppMaterialUsage = await prisma.hppMaterialUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends HppMaterialUsageUpdateArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageUpdateArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more HppMaterialUsages.
     * @param {HppMaterialUsageDeleteManyArgs} args - Arguments to filter HppMaterialUsages to delete.
     * @example
     * // Delete a few HppMaterialUsages
     * const { count } = await prisma.hppMaterialUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends HppMaterialUsageDeleteManyArgs>(args?: Prisma.SelectSubset<T, HppMaterialUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HppMaterialUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HppMaterialUsages
     * const hppMaterialUsage = await prisma.hppMaterialUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends HppMaterialUsageUpdateManyArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more HppMaterialUsages and returns the data updated in the database.
     * @param {HppMaterialUsageUpdateManyAndReturnArgs} args - Arguments to update many HppMaterialUsages.
     * @example
     * // Update many HppMaterialUsages
     * const hppMaterialUsage = await prisma.hppMaterialUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more HppMaterialUsages and only return the `id`
     * const hppMaterialUsageWithIdOnly = await prisma.hppMaterialUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends HppMaterialUsageUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one HppMaterialUsage.
     * @param {HppMaterialUsageUpsertArgs} args - Arguments to update or create a HppMaterialUsage.
     * @example
     * // Update or create a HppMaterialUsage
     * const hppMaterialUsage = await prisma.hppMaterialUsage.upsert({
     *   create: {
     *     // ... data to create a HppMaterialUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HppMaterialUsage we want to update
     *   }
     * })
     */
    upsert<T extends HppMaterialUsageUpsertArgs>(args: Prisma.SelectSubset<T, HppMaterialUsageUpsertArgs<ExtArgs>>): Prisma.Prisma__HppMaterialUsageClient<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of HppMaterialUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageCountArgs} args - Arguments to filter HppMaterialUsages to count.
     * @example
     * // Count the number of HppMaterialUsages
     * const count = await prisma.hppMaterialUsage.count({
     *   where: {
     *     // ... the filter for the HppMaterialUsages we want to count
     *   }
     * })
    **/
    count<T extends HppMaterialUsageCountArgs>(args?: Prisma.Subset<T, HppMaterialUsageCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HppMaterialUsageCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a HppMaterialUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HppMaterialUsageAggregateArgs>(args: Prisma.Subset<T, HppMaterialUsageAggregateArgs>): Prisma.PrismaPromise<GetHppMaterialUsageAggregateType<T>>;
    /**
     * Group by HppMaterialUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HppMaterialUsageGroupByArgs} args - Group by arguments.
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
    groupBy<T extends HppMaterialUsageGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HppMaterialUsageGroupByArgs['orderBy'];
    } : {
        orderBy?: HppMaterialUsageGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HppMaterialUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHppMaterialUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the HppMaterialUsage model
     */
    readonly fields: HppMaterialUsageFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for HppMaterialUsage.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__HppMaterialUsageClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    hppCalculation<T extends Prisma.HppCalculationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HppCalculationDefaultArgs<ExtArgs>>): Prisma.Prisma__HppCalculationClient<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    material<T extends Prisma.MaterialDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MaterialDefaultArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the HppMaterialUsage model
 */
export interface HppMaterialUsageFieldRefs {
    readonly id: Prisma.FieldRef<"HppMaterialUsage", 'String'>;
    readonly hppCalculationId: Prisma.FieldRef<"HppMaterialUsage", 'String'>;
    readonly materialId: Prisma.FieldRef<"HppMaterialUsage", 'String'>;
    readonly quantity: Prisma.FieldRef<"HppMaterialUsage", 'Float'>;
    readonly unitPrice: Prisma.FieldRef<"HppMaterialUsage", 'Int'>;
    readonly totalPrice: Prisma.FieldRef<"HppMaterialUsage", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"HppMaterialUsage", 'DateTime'>;
}
/**
 * HppMaterialUsage findUnique
 */
export type HppMaterialUsageFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HppMaterialUsage to fetch.
     */
    where: Prisma.HppMaterialUsageWhereUniqueInput;
};
/**
 * HppMaterialUsage findUniqueOrThrow
 */
export type HppMaterialUsageFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HppMaterialUsage to fetch.
     */
    where: Prisma.HppMaterialUsageWhereUniqueInput;
};
/**
 * HppMaterialUsage findFirst
 */
export type HppMaterialUsageFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HppMaterialUsage to fetch.
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppMaterialUsages to fetch.
     */
    orderBy?: Prisma.HppMaterialUsageOrderByWithRelationInput | Prisma.HppMaterialUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HppMaterialUsages.
     */
    cursor?: Prisma.HppMaterialUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppMaterialUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppMaterialUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HppMaterialUsages.
     */
    distinct?: Prisma.HppMaterialUsageScalarFieldEnum | Prisma.HppMaterialUsageScalarFieldEnum[];
};
/**
 * HppMaterialUsage findFirstOrThrow
 */
export type HppMaterialUsageFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HppMaterialUsage to fetch.
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppMaterialUsages to fetch.
     */
    orderBy?: Prisma.HppMaterialUsageOrderByWithRelationInput | Prisma.HppMaterialUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for HppMaterialUsages.
     */
    cursor?: Prisma.HppMaterialUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppMaterialUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppMaterialUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HppMaterialUsages.
     */
    distinct?: Prisma.HppMaterialUsageScalarFieldEnum | Prisma.HppMaterialUsageScalarFieldEnum[];
};
/**
 * HppMaterialUsage findMany
 */
export type HppMaterialUsageFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which HppMaterialUsages to fetch.
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of HppMaterialUsages to fetch.
     */
    orderBy?: Prisma.HppMaterialUsageOrderByWithRelationInput | Prisma.HppMaterialUsageOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing HppMaterialUsages.
     */
    cursor?: Prisma.HppMaterialUsageWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` HppMaterialUsages from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` HppMaterialUsages.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of HppMaterialUsages.
     */
    distinct?: Prisma.HppMaterialUsageScalarFieldEnum | Prisma.HppMaterialUsageScalarFieldEnum[];
};
/**
 * HppMaterialUsage create
 */
export type HppMaterialUsageCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a HppMaterialUsage.
     */
    data: Prisma.XOR<Prisma.HppMaterialUsageCreateInput, Prisma.HppMaterialUsageUncheckedCreateInput>;
};
/**
 * HppMaterialUsage createMany
 */
export type HppMaterialUsageCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many HppMaterialUsages.
     */
    data: Prisma.HppMaterialUsageCreateManyInput | Prisma.HppMaterialUsageCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * HppMaterialUsage createManyAndReturn
 */
export type HppMaterialUsageCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppMaterialUsage
     */
    select?: Prisma.HppMaterialUsageSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HppMaterialUsage
     */
    omit?: Prisma.HppMaterialUsageOmit<ExtArgs> | null;
    /**
     * The data used to create many HppMaterialUsages.
     */
    data: Prisma.HppMaterialUsageCreateManyInput | Prisma.HppMaterialUsageCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppMaterialUsageIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * HppMaterialUsage update
 */
export type HppMaterialUsageUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a HppMaterialUsage.
     */
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateInput, Prisma.HppMaterialUsageUncheckedUpdateInput>;
    /**
     * Choose, which HppMaterialUsage to update.
     */
    where: Prisma.HppMaterialUsageWhereUniqueInput;
};
/**
 * HppMaterialUsage updateMany
 */
export type HppMaterialUsageUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update HppMaterialUsages.
     */
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateManyMutationInput, Prisma.HppMaterialUsageUncheckedUpdateManyInput>;
    /**
     * Filter which HppMaterialUsages to update
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * Limit how many HppMaterialUsages to update.
     */
    limit?: number;
};
/**
 * HppMaterialUsage updateManyAndReturn
 */
export type HppMaterialUsageUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HppMaterialUsage
     */
    select?: Prisma.HppMaterialUsageSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the HppMaterialUsage
     */
    omit?: Prisma.HppMaterialUsageOmit<ExtArgs> | null;
    /**
     * The data used to update HppMaterialUsages.
     */
    data: Prisma.XOR<Prisma.HppMaterialUsageUpdateManyMutationInput, Prisma.HppMaterialUsageUncheckedUpdateManyInput>;
    /**
     * Filter which HppMaterialUsages to update
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * Limit how many HppMaterialUsages to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HppMaterialUsageIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * HppMaterialUsage upsert
 */
export type HppMaterialUsageUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the HppMaterialUsage to update in case it exists.
     */
    where: Prisma.HppMaterialUsageWhereUniqueInput;
    /**
     * In case the HppMaterialUsage found by the `where` argument doesn't exist, create a new HppMaterialUsage with this data.
     */
    create: Prisma.XOR<Prisma.HppMaterialUsageCreateInput, Prisma.HppMaterialUsageUncheckedCreateInput>;
    /**
     * In case the HppMaterialUsage was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.HppMaterialUsageUpdateInput, Prisma.HppMaterialUsageUncheckedUpdateInput>;
};
/**
 * HppMaterialUsage delete
 */
export type HppMaterialUsageDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which HppMaterialUsage to delete.
     */
    where: Prisma.HppMaterialUsageWhereUniqueInput;
};
/**
 * HppMaterialUsage deleteMany
 */
export type HppMaterialUsageDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which HppMaterialUsages to delete
     */
    where?: Prisma.HppMaterialUsageWhereInput;
    /**
     * Limit how many HppMaterialUsages to delete.
     */
    limit?: number;
};
/**
 * HppMaterialUsage without action
 */
export type HppMaterialUsageDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
