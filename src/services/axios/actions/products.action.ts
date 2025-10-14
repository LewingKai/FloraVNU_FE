import { SearchParamsType } from "@/types/home";
import { client } from "..";
import productEndpoint from "../endpoints/product.endpoint";

class ProductApi {
  async search(params: SearchParamsType) {
    try {
      const res = await client.get(productEndpoint.search, {
        params: params,
      });
      return res.data;
    } catch (error) {
      return [];
    }
  }
  async getOutStadingFlowers() {
    try {
      const res = await client.get(
        `${productEndpoint.search}?limit=10&page=1&sort=rating:desc`
      );
      return res.data;
    } catch (error) {
      return [];
    }
  }
}

const productApi = new ProductApi();
export default productApi;
