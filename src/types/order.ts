export interface FlowerItem {
  flowerId: string;
  quantity: number;
  _id: string;
  name: string;
  image: Image;
  price: number;
  rating: number;
}

export interface Order {
  _id: string;
  accountId: string;
  orderItems: FlowerItem[];
  totalPrice: number;
  senderName: string;
  senderEmail: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  recipientAddress: string;
  deliveryDate: string;
  deliveryTime: string;
  message: string;
  note: string;
  orderStatus: "Pending" | "Processing" | "Delivered" | "Cancelled";
  paymentMethod: "Cash" | "Bank";
  createdAt: string;
  updatedAt: string;
}

export interface Image {
  url: string;
  public_id: string;
}
