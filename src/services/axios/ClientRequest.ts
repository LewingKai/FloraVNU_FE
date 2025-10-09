import { ENV } from "@/configs/env.constant";
import type {
  InternalAxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
} from "axios";
import axios from "axios";
import type { Res_Error } from "./types";

export class ClientRequest {
  static instance: ClientRequest | null = null;

  public static getInstance(): ClientRequest {
    if (!ClientRequest.instance) {
      ClientRequest.instance = new ClientRequest();
    }
    return ClientRequest.instance;
  }

  private axiosInstance!: AxiosInstance;

  public static EVENTS = {
    FORBIDDEN: "FORBIDDEN",
    TOKEN_EXPIRED: "TOKEN_EXPIRED",
  };

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: ENV.NEXT_PUBLIC_BACKEND_URL,
      timeout: 30000,
    });

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

  public getAxiosInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  public hasAccessToken(): boolean {
    return localStorage.getItem("access_token") !== null;
  }

  public getAccessToken(): string | null {
    return localStorage.getItem("access_token");
  }

  public setAccessToken(value: string) {
    localStorage.setItem("access_token", value);
  }

  public removeAccessToken(): void {
    localStorage.removeItem("access_token");
  }
}

export const clientRequest = new ClientRequest();
