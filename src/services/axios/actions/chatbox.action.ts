import { client } from "..";
import ChatboxEndpoint from "../endpoints/chatbox.endpoint";

class ChatBoxApi {
  async sendMessage(mesage: string, sessionId: string) {
    try {
      const res = await client.post(ChatboxEndpoint.chatbox, {
        query: mesage,
        sessionId: sessionId,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const chatBoxApi = new ChatBoxApi();
export default chatBoxApi;
