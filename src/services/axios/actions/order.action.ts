import { client } from "@/services/axios";
import orderEndpoint from "../endpoints/order.endpoint";

class OrderApi {
  async getOrderByAccountId() {
    try {
      const res = await client.get(orderEndpoint.getOrderByAccountId);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async updateOrderStatus(status: string, id: string) {
    try {
      const res = await client.patch(orderEndpoint.updateOrderStatus(id), {
        status,
      });
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  async deleteOrder(id: string) {
    try {
      const res = await client.delete(orderEndpoint.deleteOrder(id));
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const orderApi = new OrderApi();
export default orderApi;
