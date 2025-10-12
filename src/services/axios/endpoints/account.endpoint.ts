const accountEndpoint = {
  register: "/account",
  findAccountById: (id: string | null) => `/account/${id}`,
};

export default accountEndpoint;
