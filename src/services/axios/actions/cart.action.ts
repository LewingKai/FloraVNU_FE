import { client } from "..";
import CartEndopoint from "../endpoints/cart.endpoint";

class CartApi {
  async addItemToCart(flowerId: string, quantity: number) {
    try {
      const res = await client.post(CartEndopoint.cart, { flowerId, quantity });
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async getListItemFromCart() {
    try {
      const res = await client.get(CartEndopoint.cart);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async deleteItemFromCart(flowerId: string) {
    try {
      const res = await client.delete(`${CartEndopoint.cart}/${flowerId}`);

      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async clearCart() {
    try {
      const res = await client.delete(`${CartEndopoint.cart}`);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
  async updateQuantityInCart(flowerId: string, type: string) {
    try {
      const res = await client.patch(
        `${CartEndopoint.cart}/${flowerId}/${type}`
      );
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

const cartApi = new CartApi();
export default cartApi;
