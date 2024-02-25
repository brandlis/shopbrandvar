// types Response General services

import { AxiosError } from "axios";

export type ApiResponse<T = any | undefined> = {
  success: boolean;
  status?: number;
  statusCode?: number | null;
  errorMessage?: string | null;
  response?: T;
  error?: AxiosError;
};

// types response all products
export type ResponseProducts = Products[];

export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}
