import { Authorization } from "./authorization";

export class AuthenticateResponse {
    authorization: Authorization;
    session: string;
    name: string;
    email: string;
    role: string;
    canal: string;
    usuario: string;
    configuration: string;
}