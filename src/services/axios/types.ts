export type Message = {
  type: MessageType;
  name?: string;
  description?: string;
};

export type MessageType = "401";

export type Res_Error = {
  status: string;
  result: string;
  error: {
    code: string;
    message: string;
  };
};
export type ItemCartRequest = {
  flowerId: string;
  quantity: string;
  price: number;
  discountPercent: number;
};
export type CreateOrderRequestType = {
  senderName?: string;
  senderEmail?: string;
  senderPhone?: string;
  recipientName?: string;
  // receiverEmail?: string;
  recipientPhone?: string;
  recipientAddress?: string;
  deliveryDate?: string;
  deliveryTime?: string;
  message?: string;
  note?: string;
  paymentMethod?: string;
  isDelivery?: string;
  totalPrice?: number;
  orderItems?: ItemCartRequest[];
};

interface ImageCartItem {
  url?: string;
}
export interface CardItemData {
  _id?: string;
  name?: string;
  image?: ImageCartItem;
  description?: string;
  price?: number;
  stockQuantity?: number;
}
