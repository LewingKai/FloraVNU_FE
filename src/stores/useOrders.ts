import orderApi from "@/services/axios/actions/order.action";
import { Order } from "@/types/order";
import { create } from "zustand";

interface OrdersState {
  orders: Order[];
  fetchOrders: () => Promise<void>;
}

const initialState: Pick<OrdersState, "orders"> = {
  orders: [],
};

const useOrders = create<OrdersState>((set) => ({
  ...initialState,

  async fetchOrders() {
    try {
      const res = await orderApi.getOrderByAccountId();
      set({ orders: res.data });
    } catch (error) {
      throw error;
    }
  },
}));

export default useOrders;
