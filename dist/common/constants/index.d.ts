export declare const DEFAULT_PAGE = 1;
export declare const DEFAULT_LIMIT = 10;
export declare const MAX_LIMIT = 100;
export declare const DEFAULT_CATEGORIES: string[];
export declare const CROCHET_BUSINESS_CATEGORY = "Crochet Business";
export declare const HOURLY_RATE_IDR = 15000;
export declare const COMPLEXITY_BASE: Record<string, {
    minHours: number;
    maxHours: number;
    baseMaterial: number;
}>;
export declare const SIZE_MULTIPLIERS: Array<{
    maxCm: number;
    multiplier: number;
}>;
export declare const PRICE_MARGIN_MIN = 1.5;
export declare const PRICE_MARGIN_MAX = 2;
