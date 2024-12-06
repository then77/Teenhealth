export interface BaseUser {
    id?: number;
    name: string;
    email: string;
    created_at?: Date;
    updated_at?: Date;
    email_verified_at?: Date;
    profile_picture?: string;
    is_admin?: boolean;
}

export interface User extends BaseUser {
    
}