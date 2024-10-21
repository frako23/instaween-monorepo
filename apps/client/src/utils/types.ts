
export type User = {
    email: string;
    given_name: string;
    id: string;
    name: string;
    picture: string;
    verified_email: boolean;
}

export type Token = {
    access_token: string;
    authuser: string;
    expires_in: number;
}