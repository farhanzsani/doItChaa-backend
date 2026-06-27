export declare const Priority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly URGENT: "URGENT";
};
export type Priority = (typeof Priority)[keyof typeof Priority];
export declare const TaskStatus: {
    readonly PENDING: "PENDING";
    readonly COMPLETED: "COMPLETED";
};
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus];
export declare const Complexity: {
    readonly EASY: "EASY";
    readonly MEDIUM: "MEDIUM";
    readonly HARD: "HARD";
    readonly CUSTOM: "CUSTOM";
};
export type Complexity = (typeof Complexity)[keyof typeof Complexity];
