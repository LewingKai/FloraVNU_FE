import { client } from "@/services/axios";
import paymentEndpoint from "../endpoints/payment.endpoint";

class PaymentApi {
  async createPayment() {
    try {
      const res = await client.post(paymentEndpoint.createPayment);
      return res.data;
    } catch (err) {
      throw err;
    }
  }
}

const paymentApi = new PaymentApi();
export default paymentApi;
