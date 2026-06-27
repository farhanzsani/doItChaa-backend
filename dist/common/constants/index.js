"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRICE_MARGIN_MAX = exports.PRICE_MARGIN_MIN = exports.SIZE_MULTIPLIERS = exports.COMPLEXITY_BASE = exports.HOURLY_RATE_IDR = exports.CROCHET_BUSINESS_CATEGORY = exports.DEFAULT_CATEGORIES = exports.MAX_LIMIT = exports.DEFAULT_LIMIT = exports.DEFAULT_PAGE = void 0;
exports.DEFAULT_PAGE = 1;
exports.DEFAULT_LIMIT = 10;
exports.MAX_LIMIT = 100;
exports.DEFAULT_CATEGORIES = [
    'Academic',
    'Organization',
    'Crochet Business',
    'Personal',
];
exports.CROCHET_BUSINESS_CATEGORY = 'Crochet Business';
// Estimator constants
exports.HOURLY_RATE_IDR = 15000;
exports.COMPLEXITY_BASE = {
    EASY: { minHours: 3, maxHours: 5, baseMaterial: 25000 },
    MEDIUM: { minHours: 6, maxHours: 10, baseMaterial: 40000 },
    HARD: { minHours: 12, maxHours: 20, baseMaterial: 60000 },
    CUSTOM: { minHours: 15, maxHours: 30, baseMaterial: 80000 },
};
exports.SIZE_MULTIPLIERS = [
    { maxCm: 10, multiplier: 1.0 },
    { maxCm: 20, multiplier: 1.5 },
    { maxCm: 35, multiplier: 2.0 },
    { maxCm: Infinity, multiplier: 3.0 },
];
exports.PRICE_MARGIN_MIN = 1.5;
exports.PRICE_MARGIN_MAX = 2.0;
//# sourceMappingURL=index.js.map