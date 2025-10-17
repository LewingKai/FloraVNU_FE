const accountEndpoint = {
  register: "/account",
  findAccountById: (id: string | null) => `/account/${id}`,
  updateAccount: (id: string) => `/account/${id}`,
  changePassword: (id: string) => `/account/${id}/password`,
};

export default accountEndpoint;
