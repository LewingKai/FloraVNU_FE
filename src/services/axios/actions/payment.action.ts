import { client } from "@/services/axios";
import paymentEndpoint from "../endpoints/payment.endpoint";

class PaymentApi {
  async createPayment(description: string, amount: number) {
    try {
      const orderId = String(
        Number(`${Date.now()}${Math.floor(10 + Math.random() * 90)}`)
      );
      const res = await client.post(paymentEndpoint.createPayment, {
        orderId,
        description,
        amount,
      });
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

const paymentApi = new PaymentApi();
export default paymentApi;
