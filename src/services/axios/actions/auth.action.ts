import { client } from "@/services/axios";
import authEndpoint from "../endpoints/auth.endpoint";
import accountEndpoint from "../endpoints/account.endpoint";
import { clientRequest } from "../ClientRequest";
import { User } from "@/types/account";

class AuthApi {
  async signIn(username: string, password: string) {
    try {
      const res = await client.post(authEndpoint.login, { username, password });
      clientRequest.setAccessToken(res.data.accessToken);
      localStorage.setItem("user_id", res.data.data._id);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async signUp(formData: User) {
    try {
      const res = await client.post(accountEndpoint.register, formData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const authApi = new AuthApi();

export default authApi;
