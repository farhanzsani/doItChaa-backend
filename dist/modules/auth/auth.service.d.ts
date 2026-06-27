import type { RegisterInput, LoginInput } from './auth.schema';
export declare function registerUser(input: RegisterInput): Promise<{
    user: any;
    token: string;
}>;
export declare function loginUser(input: LoginInput): Promise<{
    user: {
        id: any;
        email: any;
        createdAt: any;
    };
    token: string;
}>;
export declare function getCurrentUser(userId: string): Promise<any>;
