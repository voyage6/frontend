import axios, { AxiosInstance } from 'axios';

export class AxiosManager {
  private static instance: AxiosInstance;

  private constructor() {}

  static get Instance() {
    if (!this.instance) {
      this.instance = axios.create({
        baseURL: 'http://43.200.6.110',
      });
    }
    return this.instance;
  }

  static chanageUrl(url: string) {
    AxiosManager.instance = axios.create({
      baseURL: url,
    });
  }
}
