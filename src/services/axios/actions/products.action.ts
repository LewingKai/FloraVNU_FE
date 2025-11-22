import { SearchParamsType } from "@/types/home";
import { client } from "..";
import productEndpoint from "../endpoints/product.endpoint";

class ProductApi {
  async search(params: SearchParamsType) {
    try {
      const filteredParams: Record<string, any> = {};
      Object.entries(params).forEach(([key, value]) => {
        if (
          value !== undefined &&
          value !== null &&
          value !== "" &&
          !(typeof value === "number" && isNaN(value))
        ) {
          filteredParams[key] = value;
        }
      });

      const res = await client.get(productEndpoint.search, {
        params: filteredParams,
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
  async getDetail(id: string) {
    try {
      const endpoint = productEndpoint.getDetail.replace(":id", id);
      const res = await client.get(endpoint);
      return res.data;
    } catch (error) {
      return null;
    }
  }
  async getAllOccasions() {
    try {
      const res = await client.get(productEndpoint.getOccasionsFilter);
      return res.data;
    } catch (error) {
      return null;
    }
  }
  async getAllForm() {
    try {
      const res = await client.get(productEndpoint.getFormFilter);
      return res.data;
    } catch (error) {
      return null;
    }
  }
  async getAllType() {
    try {
      const res = await client.get(productEndpoint.fetchTypesFilter);
      return res.data;
    } catch (error) {
      return null;
    }
  }
}

const productApi = new ProductApi();
export default productApi;
