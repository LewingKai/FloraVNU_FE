import { client } from "@/services/axios";
import authEndpoint from "../endpoints/auth.endpoint";
import { clientRequest } from "../ClientRequest";

class AuthApi {
  async signIn(username: string, password: string) {
    try {
      const res = await client.post(authEndpoint.login, { username, password });
      clientRequest.setAccessToken(res.data.accessToken);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const authApi = new AuthApi();

export default authApi;
