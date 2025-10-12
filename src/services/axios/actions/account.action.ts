import { client } from "@/services/axios";
import accountEndpoint from "../endpoints/account.endpoint";

class AccountApi {
  async findAccountById(id: string) {
    try {
      const res = await client.get(accountEndpoint.findAccountById(id));
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const accountApi = new AccountApi();

export default accountApi;
