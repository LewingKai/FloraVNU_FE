import { client } from "@/services/axios";
import adminEndpoint from "../endpoints/admin.endpoint";

class AdminApi {
  async getAccounts() {
    try {
      const res = await client.get(adminEndpoint.getAccounts);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

const adminApi = new AdminApi();
export default adminApi;
