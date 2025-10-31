import { client, CreateOrderRequestType } from "@/services/axios";
import orderEndpoint from "../endpoints/order.endpoint";

class OrderApi {
  async createOrder(dataRequest: CreateOrderRequestType) {
    try {
      const res = await client.post(orderEndpoint.order, dataRequest);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
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

  async cancelOrder(id: string) {
    try {
      const res = await client.patch(orderEndpoint.cancelOrder(id));
      return res.data;
    } catch (err) {
      throw err;
    }
  }

  async updatePaymentMethod(paymentMethod: string, id: string) {
    try {
      const res = await client.patch(orderEndpoint.updatePaymentMethod(id), {
        paymentMethod,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

const orderApi = new OrderApi();
export default orderApi;
