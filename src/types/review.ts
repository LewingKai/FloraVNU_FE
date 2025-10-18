export interface Review {
  _id: number;
  comment?: string;
  createdAt?: string;
  accountId?: Reviewer;
  rating?: number;
  avatar?: string;
  content?: string;
  flowerId?: string;
  name?: string;
  // images?: { url: string; public_id: string }[];
}

export interface Reviewer {
  _id: string;
  username: string;
  avatar: {
    url?: string;
    public_id?: string;
  };
}
