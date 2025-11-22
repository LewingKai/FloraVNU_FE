export interface Order {
  _id: string;
  accountId: string;
  orderItems: OrderItem[];
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
  paymentStatus: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface OrderItem {
  discountPercent: number;
  flowerId: FlowerItem;
  price: number;
  quantity: 1;
  _id: string;
}

export interface FlowerItem {
  description: string;
  discountPercent: number;
  image: Image;
  name: string;
  price: number;
  rating: number;
  stockQuantity: number;
  _id: string;
}

export interface Image {
  url: string;
}
