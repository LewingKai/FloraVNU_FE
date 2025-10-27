const orderEndpoint = {
  getOrderByAccountId: "/order/account",
  updateOrderStatus: (id: string) => `/order/${id}/status`,
  deleteOrder: (id: string) => `/order/${id}`,
};

export default orderEndpoint;
