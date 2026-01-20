const adminEndpoint = {
  getAccounts: "/account/admin/list",
  getOrderStats: "/order/stats/overview",
  findAccountByName: (name: string) => `/account/name/${name}`,
  searchOrder: '/order'
};

export default adminEndpoint;
