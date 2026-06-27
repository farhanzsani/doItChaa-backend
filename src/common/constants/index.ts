export const DEFAULT_PAGE = 1;
export const DEFAULT_LIMIT = 10;
export const MAX_LIMIT = 100;

export const DEFAULT_CATEGORIES = [
  'Academic',
  'Organization',
  'Crochet Business',
  'Personal',
];

export const CROCHET_BUSINESS_CATEGORY = 'Crochet Business';

// Estimator constants
export const HOURLY_RATE_IDR = 15000;

export const COMPLEXITY_BASE: Record<
  string,
  { minHours: number; maxHours: number; baseMaterial: number }
> = {
  EASY:   { minHours: 3,  maxHours: 5,  baseMaterial: 25000 },
  MEDIUM: { minHours: 6,  maxHours: 10, baseMaterial: 40000 },
  HARD:   { minHours: 12, maxHours: 20, baseMaterial: 60000 },
  CUSTOM: { minHours: 15, maxHours: 30, baseMaterial: 80000 },
};

export const SIZE_MULTIPLIERS: Array<{ maxCm: number; multiplier: number }> = [
  { maxCm: 10, multiplier: 1.0 },
  { maxCm: 20, multiplier: 1.5 },
  { maxCm: 35, multiplier: 2.0 },
  { maxCm: Infinity, multiplier: 3.0 },
];

export const PRICE_MARGIN_MIN = 1.5;
export const PRICE_MARGIN_MAX = 2.0;
