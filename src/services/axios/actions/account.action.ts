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

  async updateAccount(formData: FormData, id: string) {
    try {
      const res = await client.patch(
        accountEndpoint.updateAccount(id),
        formData
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async changePassword(
    currentPassword: string,
    newPassword: string,
    confirmNewPassword: string,
    id: string
  ) {
    try {
      const res = await client.patch(accountEndpoint.changePassword(id), {
        currentPassword,
        newPassword,
        confirmNewPassword,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const accountApi = new AccountApi();

export default accountApi;
