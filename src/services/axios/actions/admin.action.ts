import { client } from "@/services/axios";
import adminEndpoint from "../endpoints/admin.endpoint";

interface Params {
  page: number
  limit: number
  search?: string
  status?: string
  startDate?: string
  endDate?: string
  sortBy?: string
  sortOrder?: string
}

class AdminApi {
  async getAccounts(params?: Params) {
    try {
      const res = await client.get(adminEndpoint.getAccounts, {
        params,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  async findAccountByName(name: string) {
    try {
      const res = await client.get(adminEndpoint.findAccountByName(name))
      return res.data
    } catch (err) {
      throw err
    }
  }

  async searchOrder(params?: Params) {
    try {
      const res = await client.get(adminEndpoint.searchOrder, {params})
      return res.data
    } catch (err) {
      throw err
    }
  }

  async getOrderStats() {
    try {
      const res = await client.get(adminEndpoint.getOrderStats)
      return res.data
    } catch (err) {
      throw err
    }
  }
}

const adminApi = new AdminApi();
export default adminApi;
