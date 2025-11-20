const accountEndpoint = {
  register: "/account",
  findAccountById: (id: string | null) => `/account/${id}`,
  updateAccount: (id: string) => `/account/${id}`,
  changePassword: (id: string) => `/account/${id}/password`,
  forgotPassword: "/account/password/forgot",
  resetPassword: "/account/password/reset",
};

export default accountEndpoint;
