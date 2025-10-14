import { ENV } from "@/configs/env.constant";
import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import type { Res_Error } from "./types";

export class ClientRequest {
  private static instance: ClientRequest | null = null;
  private axiosInstance: AxiosInstance;

  public static EVENTS = {
    FORBIDDEN: "FORBIDDEN",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
  };

  private constructor() {
    this.axiosInstance = axios.create({
      baseURL: ENV.NEXT_PUBLIC_BACKEND_URL,
      timeout: 30000,
    });

    // Request interceptor
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = this.getAccessToken();
        if (token && config.headers) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response interceptor
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<unknown>) => response,
      (error) => {
        if (error.response && error.response.data) {
          const err: Res_Error = error.response.data;
          return Promise.reject(err);
        }
        return Promise.reject(error);
      }
    );
  }

  public static getInstance(): ClientRequest {
    if (!ClientRequest.instance) {
      ClientRequest.instance = new ClientRequest();
    }
    return ClientRequest.instance;
  }

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  private getAccessToken(): string | null {
    if (typeof window !== "undefined") {
      return localStorage.getItem("access_token");
    }
    return null;
  }

  public setAccessToken(value: string): void {
    localStorage.setItem("access_token", value);
  }

  public removeAccessToken(): void {
    localStorage.removeItem("access_token");
  }

  public hasAccessToken(): boolean {
    return localStorage.getItem("access_token") !== null;
  }
}

export const clientRequest = ClientRequest.getInstance();
