const orderEndpoint = {
  order: "/order",
  getOrderByAccountId: "/order/account",
  updateOrderStatus: (id: string) => `/order/${id}/status`,
  deleteOrder: (id: string) => `/order/${id}`,
  cancelOrder: (id: string) => `/order/${id}/cancel`,
  updatePaymentMethod: (id: string) => `/order/${id}/payment-method`,
};

export default orderEndpoint;
