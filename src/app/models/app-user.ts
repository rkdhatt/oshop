export interface AppUser {
    name: string;
    email: string;
    isAdmin: boolean; // matches firebase db for user info.
}