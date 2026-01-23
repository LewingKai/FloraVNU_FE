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
  async saveHistory({
    sessionId,
    summary,
    query,
    cleanResponse,
  }: {
    sessionId: string;
    summary: string;
    query: string;
    cleanResponse: string;
  }) {
    try {
      const res = await client.post(ChatboxEndpoint.saveChatbox, {
        sessionId,
        summary,
        query,
        cleanResponse,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const chatBoxApi = new ChatBoxApi();
export default chatBoxApi;
