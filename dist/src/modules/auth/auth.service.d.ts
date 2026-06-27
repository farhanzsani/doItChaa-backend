import type { RegisterInput, LoginInput } from './auth.schema';
export declare function registerUser(input: RegisterInput): Promise<{
    user: {
        id: string;
        email: string;
        createdAt: Date;
    };
    token: string;
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: {
        id: string;
        email: string;
        createdAt: Date;
    };
    token: string;
}>;
export declare function getCurrentUser(userId: string): Promise<{
    id: string;
    email: string;
    createdAt: Date;
}>;
