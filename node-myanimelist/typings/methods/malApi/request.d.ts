import { AxiosRequestConfig, AxiosError } from "axios";
export declare class MalRequest<T> {
    config: AxiosRequestConfig;
    constructor(config: AxiosRequestConfig);
    getUrl(): string;
    call(): Promise<T>;
}
export default MalRequest;
export interface MalError {
    message?: string;
    error: string;
}
export declare type ResponseError = AxiosError<MalError>;
