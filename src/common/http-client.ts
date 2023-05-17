import axios from "axios";
import { AxiosInstance } from "axios";

import type { IHttpClient } from "@duitku/types/http-client.type";

export class HttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  public get(url: string, config?: any) {
    return this.axiosInstance.get(url, config);
  }
  public post(url: string, data?: any, config?: any) {
    return this.axiosInstance.post(url, data, config);
  }
  public put(url: string, data?: any, config?: any) {
    return this.axiosInstance.put(url, data, config);
  }
  public delete(url: string, config?: any) {
    return this.axiosInstance.delete(url, config);
  }
}
