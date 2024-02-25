import { storeApi } from "../api/storeApi";
import { ApiResponse, ResponseProducts } from "../helpers/types";

export const getProductsApi = async (): Promise<
  ApiResponse<ResponseProducts>
> => {
  try {
    const response = await storeApi.get("/products");

    return { success: true, response: response.data };
  } catch (error: any) {
    return { success: false, errorMessage: error };
  }
};
