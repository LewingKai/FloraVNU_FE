export interface User {
  username: string;
  fullName: string;
  email: string;
  gender: string;
  birthday: string;
  phone: string;
  password: string;
}

export interface Account {
  _id: string;
  username: string;
  fullName: string;
  email: string;
  gender: string;
  birthday: string;
  phone: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  avatar?: Avatar;
}

export interface Avatar {
  url: string;
  public_id: string;
}
