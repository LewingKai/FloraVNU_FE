import { client, CreateOrderRequestType } from "@/services/axios";
import accountEndpoint from "../endpoints/account.endpoint";
import OrderEndopoint from "../endpoints/order.endpoints";

class OrderApi {
  async createOrder(dataRequest: CreateOrderRequestType) {
    try {
      const res = await client.post(OrderEndopoint.order, dataRequest);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const orderApi = new OrderApi();

export default orderApi;
