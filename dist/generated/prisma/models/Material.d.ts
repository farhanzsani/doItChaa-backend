import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model Material
 *
 */
export type MaterialModel = runtime.Types.Result.DefaultSelection<Prisma.$MaterialPayload>;
export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null;
    _avg: MaterialAvgAggregateOutputType | null;
    _sum: MaterialSumAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type MaterialAvgAggregateOutputType = {
    price: number | null;
    stock: number | null;
};
export type MaterialSumAggregateOutputType = {
    price: number | null;
    stock: number | null;
};
export type MaterialMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    unit: string | null;
    price: number | null;
    stock: number | null;
    description: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaterialMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    unit: string | null;
    price: number | null;
    stock: number | null;
    description: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MaterialCountAggregateOutputType = {
    id: number;
    name: number;
    unit: number;
    price: number;
    stock: number;
    description: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MaterialAvgAggregateInputType = {
    price?: true;
    stock?: true;
};
export type MaterialSumAggregateInputType = {
    price?: true;
    stock?: true;
};
export type MaterialMinAggregateInputType = {
    id?: true;
    name?: true;
    unit?: true;
    price?: true;
    stock?: true;
    description?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaterialMaxAggregateInputType = {
    id?: true;
    name?: true;
    unit?: true;
    price?: true;
    stock?: true;
    description?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MaterialCountAggregateInputType = {
    id?: true;
    name?: true;
    unit?: true;
    price?: true;
    stock?: true;
    description?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MaterialAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType;
};
export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
    [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMaterial[P]> : Prisma.GetScalarType<T[P], AggregateMaterial[P]>;
};
export type MaterialGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MaterialWhereInput;
    orderBy?: Prisma.MaterialOrderByWithAggregationInput | Prisma.MaterialOrderByWithAggregationInput[];
    by: Prisma.MaterialScalarFieldEnum[] | Prisma.MaterialScalarFieldEnum;
    having?: Prisma.MaterialScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MaterialCountAggregateInputType | true;
    _avg?: MaterialAvgAggregateInputType;
    _sum?: MaterialSumAggregateInputType;
    _min?: MaterialMinAggregateInputType;
    _max?: MaterialMaxAggregateInputType;
};
export type MaterialGroupByOutputType = {
    id: string;
    name: string;
    unit: string;
    price: number;
    stock: number;
    description: string | null;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MaterialCountAggregateOutputType | null;
    _avg: MaterialAvgAggregateOutputType | null;
    _sum: MaterialSumAggregateOutputType | null;
    _min: MaterialMinAggregateOutputType | null;
    _max: MaterialMaxAggregateOutputType | null;
};
export type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MaterialGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MaterialGroupByOutputType[P]>;
}>>;
export type MaterialWhereInput = {
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    id?: Prisma.StringFilter<"Material"> | string;
    name?: Prisma.StringFilter<"Material"> | string;
    unit?: Prisma.StringFilter<"Material"> | string;
    price?: Prisma.IntFilter<"Material"> | number;
    stock?: Prisma.FloatFilter<"Material"> | number;
    description?: Prisma.StringNullableFilter<"Material"> | string | null;
    userId?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    hppCalculations?: Prisma.HppCalculationListRelationFilter;
    hppMaterialUsages?: Prisma.HppMaterialUsageListRelationFilter;
};
export type MaterialOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    hppCalculations?: Prisma.HppCalculationOrderByRelationAggregateInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageOrderByRelationAggregateInput;
};
export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    OR?: Prisma.MaterialWhereInput[];
    NOT?: Prisma.MaterialWhereInput | Prisma.MaterialWhereInput[];
    name?: Prisma.StringFilter<"Material"> | string;
    unit?: Prisma.StringFilter<"Material"> | string;
    price?: Prisma.IntFilter<"Material"> | number;
    stock?: Prisma.FloatFilter<"Material"> | number;
    description?: Prisma.StringNullableFilter<"Material"> | string | null;
    userId?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    hppCalculations?: Prisma.HppCalculationListRelationFilter;
    hppMaterialUsages?: Prisma.HppMaterialUsageListRelationFilter;
}, "id">;
export type MaterialOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MaterialCountOrderByAggregateInput;
    _avg?: Prisma.MaterialAvgOrderByAggregateInput;
    _max?: Prisma.MaterialMaxOrderByAggregateInput;
    _min?: Prisma.MaterialMinOrderByAggregateInput;
    _sum?: Prisma.MaterialSumOrderByAggregateInput;
};
export type MaterialScalarWhereWithAggregatesInput = {
    AND?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    OR?: Prisma.MaterialScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MaterialScalarWhereWithAggregatesInput | Prisma.MaterialScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    unit?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    price?: Prisma.IntWithAggregatesFilter<"Material"> | number;
    stock?: Prisma.FloatWithAggregatesFilter<"Material"> | number;
    description?: Prisma.StringNullableWithAggregatesFilter<"Material"> | string | null;
    userId?: Prisma.StringWithAggregatesFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Material"> | Date | string;
};
export type MaterialCreateInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMaterialsInput;
    hppCalculations?: Prisma.HppCalculationCreateNestedManyWithoutMaterialsInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hppCalculations?: Prisma.HppCalculationUncheckedCreateNestedManyWithoutMaterialsInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMaterialsNestedInput;
    hppCalculations?: Prisma.HppCalculationUpdateManyWithoutMaterialsNestedInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppCalculations?: Prisma.HppCalculationUncheckedUpdateManyWithoutMaterialsNestedInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialCreateManyInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialListRelationFilter = {
    every?: Prisma.MaterialWhereInput;
    some?: Prisma.MaterialWhereInput;
    none?: Prisma.MaterialWhereInput;
};
export type MaterialOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MaterialCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialAvgOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type MaterialMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    unit?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MaterialSumOrderByAggregateInput = {
    price?: Prisma.SortOrder;
    stock?: Prisma.SortOrder;
};
export type MaterialScalarRelationFilter = {
    is?: Prisma.MaterialWhereInput;
    isNot?: Prisma.MaterialWhereInput;
};
export type MaterialCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutUserInput, Prisma.MaterialUncheckedCreateWithoutUserInput> | Prisma.MaterialCreateWithoutUserInput[] | Prisma.MaterialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutUserInput | Prisma.MaterialCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MaterialCreateManyUserInputEnvelope;
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
};
export type MaterialUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutUserInput, Prisma.MaterialUncheckedCreateWithoutUserInput> | Prisma.MaterialCreateWithoutUserInput[] | Prisma.MaterialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutUserInput | Prisma.MaterialCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MaterialCreateManyUserInputEnvelope;
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
};
export type MaterialUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutUserInput, Prisma.MaterialUncheckedCreateWithoutUserInput> | Prisma.MaterialCreateWithoutUserInput[] | Prisma.MaterialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutUserInput | Prisma.MaterialCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MaterialUpsertWithWhereUniqueWithoutUserInput | Prisma.MaterialUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MaterialCreateManyUserInputEnvelope;
    set?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    disconnect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    delete?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    update?: Prisma.MaterialUpdateWithWhereUniqueWithoutUserInput | Prisma.MaterialUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MaterialUpdateManyWithWhereWithoutUserInput | Prisma.MaterialUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
};
export type MaterialUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutUserInput, Prisma.MaterialUncheckedCreateWithoutUserInput> | Prisma.MaterialCreateWithoutUserInput[] | Prisma.MaterialUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutUserInput | Prisma.MaterialCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MaterialUpsertWithWhereUniqueWithoutUserInput | Prisma.MaterialUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MaterialCreateManyUserInputEnvelope;
    set?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    disconnect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    delete?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    update?: Prisma.MaterialUpdateWithWhereUniqueWithoutUserInput | Prisma.MaterialUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MaterialUpdateManyWithWhereWithoutUserInput | Prisma.MaterialUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
};
export type MaterialCreateNestedManyWithoutHppCalculationsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutHppCalculationsInput, Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput> | Prisma.MaterialCreateWithoutHppCalculationsInput[] | Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput | Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
};
export type MaterialUncheckedCreateNestedManyWithoutHppCalculationsInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutHppCalculationsInput, Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput> | Prisma.MaterialCreateWithoutHppCalculationsInput[] | Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput | Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
};
export type MaterialUpdateManyWithoutHppCalculationsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutHppCalculationsInput, Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput> | Prisma.MaterialCreateWithoutHppCalculationsInput[] | Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput | Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput[];
    upsert?: Prisma.MaterialUpsertWithWhereUniqueWithoutHppCalculationsInput | Prisma.MaterialUpsertWithWhereUniqueWithoutHppCalculationsInput[];
    set?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    disconnect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    delete?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    update?: Prisma.MaterialUpdateWithWhereUniqueWithoutHppCalculationsInput | Prisma.MaterialUpdateWithWhereUniqueWithoutHppCalculationsInput[];
    updateMany?: Prisma.MaterialUpdateManyWithWhereWithoutHppCalculationsInput | Prisma.MaterialUpdateManyWithWhereWithoutHppCalculationsInput[];
    deleteMany?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
};
export type MaterialUncheckedUpdateManyWithoutHppCalculationsNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutHppCalculationsInput, Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput> | Prisma.MaterialCreateWithoutHppCalculationsInput[] | Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput[];
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput | Prisma.MaterialCreateOrConnectWithoutHppCalculationsInput[];
    upsert?: Prisma.MaterialUpsertWithWhereUniqueWithoutHppCalculationsInput | Prisma.MaterialUpsertWithWhereUniqueWithoutHppCalculationsInput[];
    set?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    disconnect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    delete?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    connect?: Prisma.MaterialWhereUniqueInput | Prisma.MaterialWhereUniqueInput[];
    update?: Prisma.MaterialUpdateWithWhereUniqueWithoutHppCalculationsInput | Prisma.MaterialUpdateWithWhereUniqueWithoutHppCalculationsInput[];
    updateMany?: Prisma.MaterialUpdateManyWithWhereWithoutHppCalculationsInput | Prisma.MaterialUpdateManyWithWhereWithoutHppCalculationsInput[];
    deleteMany?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
};
export type MaterialCreateNestedOneWithoutHppMaterialUsagesInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutHppMaterialUsagesInput, Prisma.MaterialUncheckedCreateWithoutHppMaterialUsagesInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutHppMaterialUsagesInput;
    connect?: Prisma.MaterialWhereUniqueInput;
};
export type MaterialUpdateOneRequiredWithoutHppMaterialUsagesNestedInput = {
    create?: Prisma.XOR<Prisma.MaterialCreateWithoutHppMaterialUsagesInput, Prisma.MaterialUncheckedCreateWithoutHppMaterialUsagesInput>;
    connectOrCreate?: Prisma.MaterialCreateOrConnectWithoutHppMaterialUsagesInput;
    upsert?: Prisma.MaterialUpsertWithoutHppMaterialUsagesInput;
    connect?: Prisma.MaterialWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MaterialUpdateToOneWithWhereWithoutHppMaterialUsagesInput, Prisma.MaterialUpdateWithoutHppMaterialUsagesInput>, Prisma.MaterialUncheckedUpdateWithoutHppMaterialUsagesInput>;
};
export type MaterialCreateWithoutUserInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hppCalculations?: Prisma.HppCalculationCreateNestedManyWithoutMaterialsInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hppCalculations?: Prisma.HppCalculationUncheckedCreateNestedManyWithoutMaterialsInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutUserInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutUserInput, Prisma.MaterialUncheckedCreateWithoutUserInput>;
};
export type MaterialCreateManyUserInputEnvelope = {
    data: Prisma.MaterialCreateManyUserInput | Prisma.MaterialCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MaterialUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutUserInput, Prisma.MaterialUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutUserInput, Prisma.MaterialUncheckedCreateWithoutUserInput>;
};
export type MaterialUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutUserInput, Prisma.MaterialUncheckedUpdateWithoutUserInput>;
};
export type MaterialUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyWithoutUserInput>;
};
export type MaterialScalarWhereInput = {
    AND?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
    OR?: Prisma.MaterialScalarWhereInput[];
    NOT?: Prisma.MaterialScalarWhereInput | Prisma.MaterialScalarWhereInput[];
    id?: Prisma.StringFilter<"Material"> | string;
    name?: Prisma.StringFilter<"Material"> | string;
    unit?: Prisma.StringFilter<"Material"> | string;
    price?: Prisma.IntFilter<"Material"> | number;
    stock?: Prisma.FloatFilter<"Material"> | number;
    description?: Prisma.StringNullableFilter<"Material"> | string | null;
    userId?: Prisma.StringFilter<"Material"> | string;
    createdAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Material"> | Date | string;
};
export type MaterialCreateWithoutHppCalculationsInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMaterialsInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageCreateNestedManyWithoutMaterialInput;
};
export type MaterialUncheckedCreateWithoutHppCalculationsInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hppMaterialUsages?: Prisma.HppMaterialUsageUncheckedCreateNestedManyWithoutMaterialInput;
};
export type MaterialCreateOrConnectWithoutHppCalculationsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutHppCalculationsInput, Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput>;
};
export type MaterialUpsertWithWhereUniqueWithoutHppCalculationsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutHppCalculationsInput, Prisma.MaterialUncheckedUpdateWithoutHppCalculationsInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutHppCalculationsInput, Prisma.MaterialUncheckedCreateWithoutHppCalculationsInput>;
};
export type MaterialUpdateWithWhereUniqueWithoutHppCalculationsInput = {
    where: Prisma.MaterialWhereUniqueInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutHppCalculationsInput, Prisma.MaterialUncheckedUpdateWithoutHppCalculationsInput>;
};
export type MaterialUpdateManyWithWhereWithoutHppCalculationsInput = {
    where: Prisma.MaterialScalarWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyWithoutHppCalculationsInput>;
};
export type MaterialCreateWithoutHppMaterialUsagesInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMaterialsInput;
    hppCalculations?: Prisma.HppCalculationCreateNestedManyWithoutMaterialsInput;
};
export type MaterialUncheckedCreateWithoutHppMaterialUsagesInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    hppCalculations?: Prisma.HppCalculationUncheckedCreateNestedManyWithoutMaterialsInput;
};
export type MaterialCreateOrConnectWithoutHppMaterialUsagesInput = {
    where: Prisma.MaterialWhereUniqueInput;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutHppMaterialUsagesInput, Prisma.MaterialUncheckedCreateWithoutHppMaterialUsagesInput>;
};
export type MaterialUpsertWithoutHppMaterialUsagesInput = {
    update: Prisma.XOR<Prisma.MaterialUpdateWithoutHppMaterialUsagesInput, Prisma.MaterialUncheckedUpdateWithoutHppMaterialUsagesInput>;
    create: Prisma.XOR<Prisma.MaterialCreateWithoutHppMaterialUsagesInput, Prisma.MaterialUncheckedCreateWithoutHppMaterialUsagesInput>;
    where?: Prisma.MaterialWhereInput;
};
export type MaterialUpdateToOneWithWhereWithoutHppMaterialUsagesInput = {
    where?: Prisma.MaterialWhereInput;
    data: Prisma.XOR<Prisma.MaterialUpdateWithoutHppMaterialUsagesInput, Prisma.MaterialUncheckedUpdateWithoutHppMaterialUsagesInput>;
};
export type MaterialUpdateWithoutHppMaterialUsagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMaterialsNestedInput;
    hppCalculations?: Prisma.HppCalculationUpdateManyWithoutMaterialsNestedInput;
};
export type MaterialUncheckedUpdateWithoutHppMaterialUsagesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppCalculations?: Prisma.HppCalculationUncheckedUpdateManyWithoutMaterialsNestedInput;
};
export type MaterialCreateManyUserInput = {
    id?: string;
    name: string;
    unit: string;
    price: number;
    stock?: number;
    description?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MaterialUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppCalculations?: Prisma.HppCalculationUpdateManyWithoutMaterialsNestedInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppCalculations?: Prisma.HppCalculationUncheckedUpdateManyWithoutMaterialsNestedInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MaterialUpdateWithoutHppCalculationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMaterialsNestedInput;
    hppMaterialUsages?: Prisma.HppMaterialUsageUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateWithoutHppCalculationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hppMaterialUsages?: Prisma.HppMaterialUsageUncheckedUpdateManyWithoutMaterialNestedInput;
};
export type MaterialUncheckedUpdateManyWithoutHppCalculationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    unit?: Prisma.StringFieldUpdateOperationsInput | string;
    price?: Prisma.IntFieldUpdateOperationsInput | number;
    stock?: Prisma.FloatFieldUpdateOperationsInput | number;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type MaterialCountOutputType
 */
export type MaterialCountOutputType = {
    hppCalculations: number;
    hppMaterialUsages: number;
};
export type MaterialCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hppCalculations?: boolean | MaterialCountOutputTypeCountHppCalculationsArgs;
    hppMaterialUsages?: boolean | MaterialCountOutputTypeCountHppMaterialUsagesArgs;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaterialCountOutputType
     */
    select?: Prisma.MaterialCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeCountHppCalculationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HppCalculationWhereInput;
};
/**
 * MaterialCountOutputType without action
 */
export type MaterialCountOutputTypeCountHppMaterialUsagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HppMaterialUsageWhereInput;
};
export type MaterialSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    stock?: boolean;
    description?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    hppCalculations?: boolean | Prisma.Material$hppCalculationsArgs<ExtArgs>;
    hppMaterialUsages?: boolean | Prisma.Material$hppMaterialUsagesArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    stock?: boolean;
    description?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    stock?: boolean;
    description?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["material"]>;
export type MaterialSelectScalar = {
    id?: boolean;
    name?: boolean;
    unit?: boolean;
    price?: boolean;
    stock?: boolean;
    description?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MaterialOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "unit" | "price" | "stock" | "description" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["material"]>;
export type MaterialInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    hppCalculations?: boolean | Prisma.Material$hppCalculationsArgs<ExtArgs>;
    hppMaterialUsages?: boolean | Prisma.Material$hppMaterialUsagesArgs<ExtArgs>;
    _count?: boolean | Prisma.MaterialCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MaterialIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type MaterialIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $MaterialPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Material";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        hppCalculations: Prisma.$HppCalculationPayload<ExtArgs>[];
        hppMaterialUsages: Prisma.$HppMaterialUsagePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        unit: string;
        price: number;
        stock: number;
        description: string | null;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["material"]>;
    composites: {};
};
export type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MaterialPayload, S>;
export type MaterialCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MaterialCountAggregateInputType | true;
};
export interface MaterialDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Material'];
        meta: {
            name: 'Material';
        };
    };
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     *
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MaterialFindManyArgs>(args?: Prisma.SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     *
     */
    create<T extends MaterialCreateArgs>(args: Prisma.SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MaterialCreateManyArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     *
     */
    delete<T extends MaterialDeleteArgs>(args: Prisma.SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MaterialUpdateArgs>(args: Prisma.SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: Prisma.SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Materials and returns the data updated in the database.
     * @param {MaterialUpdateManyAndReturnArgs} args - Arguments to update many Materials.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.updateManyAndReturn({
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
    updateManyAndReturn<T extends MaterialUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MaterialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: Prisma.SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma.Prisma__MaterialClient<runtime.Types.Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(args?: Prisma.Subset<T, MaterialCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MaterialCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterialAggregateArgs>(args: Prisma.Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>;
    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
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
    groupBy<T extends MaterialGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MaterialGroupByArgs['orderBy'];
    } : {
        orderBy?: MaterialGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Material model
     */
    readonly fields: MaterialFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Material.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    hppCalculations<T extends Prisma.Material$hppCalculationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$hppCalculationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppCalculationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    hppMaterialUsages<T extends Prisma.Material$hppMaterialUsagesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Material$hppMaterialUsagesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HppMaterialUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Material model
 */
export interface MaterialFieldRefs {
    readonly id: Prisma.FieldRef<"Material", 'String'>;
    readonly name: Prisma.FieldRef<"Material", 'String'>;
    readonly unit: Prisma.FieldRef<"Material", 'String'>;
    readonly price: Prisma.FieldRef<"Material", 'Int'>;
    readonly stock: Prisma.FieldRef<"Material", 'Float'>;
    readonly description: Prisma.FieldRef<"Material", 'String'>;
    readonly userId: Prisma.FieldRef<"Material", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Material", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Material", 'DateTime'>;
}
/**
 * Material findUnique
 */
export type MaterialFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material to fetch.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material findUniqueOrThrow
 */
export type MaterialFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material to fetch.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material findFirst
 */
export type MaterialFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material to fetch.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Materials.
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Materials.
     */
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * Material findFirstOrThrow
 */
export type MaterialFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Material to fetch.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Materials.
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Materials.
     */
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * Material findMany
 */
export type MaterialFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Materials to fetch.
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Materials to fetch.
     */
    orderBy?: Prisma.MaterialOrderByWithRelationInput | Prisma.MaterialOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Materials.
     */
    cursor?: Prisma.MaterialWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Materials.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Materials.
     */
    distinct?: Prisma.MaterialScalarFieldEnum | Prisma.MaterialScalarFieldEnum[];
};
/**
 * Material create
 */
export type MaterialCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Material.
     */
    data: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
};
/**
 * Material createMany
 */
export type MaterialCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Material createManyAndReturn
 */
export type MaterialCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * The data used to create many Materials.
     */
    data: Prisma.MaterialCreateManyInput | Prisma.MaterialCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Material update
 */
export type MaterialUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Material.
     */
    data: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
    /**
     * Choose, which Material to update.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material updateMany
 */
export type MaterialUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    /**
     * Filter which Materials to update
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * Limit how many Materials to update.
     */
    limit?: number;
};
/**
 * Material updateManyAndReturn
 */
export type MaterialUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: Prisma.MaterialSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Material
     */
    omit?: Prisma.MaterialOmit<ExtArgs> | null;
    /**
     * The data used to update Materials.
     */
    data: Prisma.XOR<Prisma.MaterialUpdateManyMutationInput, Prisma.MaterialUncheckedUpdateManyInput>;
    /**
     * Filter which Materials to update
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * Limit how many Materials to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.MaterialIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Material upsert
 */
export type MaterialUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: Prisma.MaterialWhereUniqueInput;
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: Prisma.XOR<Prisma.MaterialCreateInput, Prisma.MaterialUncheckedCreateInput>;
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.MaterialUpdateInput, Prisma.MaterialUncheckedUpdateInput>;
};
/**
 * Material delete
 */
export type MaterialDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Material to delete.
     */
    where: Prisma.MaterialWhereUniqueInput;
};
/**
 * Material deleteMany
 */
export type MaterialDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: Prisma.MaterialWhereInput;
    /**
     * Limit how many Materials to delete.
     */
    limit?: number;
};
/**
 * Material.hppCalculations
 */
export type Material$hppCalculationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.HppCalculationWhereInput;
    orderBy?: Prisma.HppCalculationOrderByWithRelationInput | Prisma.HppCalculationOrderByWithRelationInput[];
    cursor?: Prisma.HppCalculationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HppCalculationScalarFieldEnum | Prisma.HppCalculationScalarFieldEnum[];
};
/**
 * Material.hppMaterialUsages
 */
export type Material$hppMaterialUsagesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Material without action
 */
export type MaterialDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
