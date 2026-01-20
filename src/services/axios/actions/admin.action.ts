import { client } from "@/services/axios";
import adminEndpoint from "../endpoints/admin.endpoint";

class AdminApi {
  async getAccounts(params?: { page?: number; limit?: number }) {
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
}

const adminApi = new AdminApi();
export default adminApi;
