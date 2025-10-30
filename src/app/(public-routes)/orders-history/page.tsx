"use client";
import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

import OrderCard from "./_components/OrderCard";
import OrderStatusSelect from "./_components/OrderStatusSelect";
import { Order } from "@/types/order";

import orderApi from "@/services/axios/actions/order.action";
import productApi from "@/services/axios/actions/products.action";
import paymentApi from "@/services/axios/actions/payment.action";

export default function OrdersHistoryPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("Pending");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await orderApi.getOrderByAccountId();
        const orders = res.data;

        const ordersData = await Promise.all(
          orders.map(async (order) => ({
            ...order,
            orderItems: await Promise.all(
              order.orderItems.map(async (item) => {
                const detail = await productApi.getDetail(item.flowerId);
                if (!detail) return item;
                const { name, image, price, rating } = detail.data;
                return { ...item, name, image, price, rating };
              })
            ),
          }))
        );

        setOrders(ordersData);
      } catch (err) {
        toast.error("Lấy thông tin đơn thất bại!");
        throw err;
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = filterStatus
    ? orders.filter((o) => o.orderStatus === filterStatus)
    : orders;

  const handlePay = async () => {
    try {
      const res = await paymentApi.createPayment();
      redirect(res.checkoutUrl);
    } catch (err) {
      toast.error("Thanh toán thất bại!");
      throw err;
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await orderApi.cancelOrder(id);
      toast.success("Hủy đơn thành công!");
    } catch (err) {
      toast.error("Hủy đơn thất bại!");
      throw err;
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await orderApi.deleteOrder(id);
      toast.success("Xóa đơn thành công");
    } catch (err) {
      toast.error("Xóa đơn thất bại!");
      throw err;
    }
  };

  const handleChangePayment = async (paymentMethod: string, id: string) => {
    try {
      await orderApi.updatePaymentMethod(paymentMethod, id);
      toast.success("Thay đổi phương thức thanh toán thành công!");
    } catch (err) {
      toast.error("Thay đổi phương thức thanh toán thất bại!");
      throw err;
    }
  };

  const handleReview = (flowerId: string) =>
    console.log("Đánh giá hoa:", flowerId);

  return (
    <Container sx={{ pt: 14, pb: 4 }}>
      <Box sx={{ maxWidth: 250, mb: 3 }}>
        <OrderStatusSelect status={filterStatus} onChange={setFilterStatus} />
      </Box>

      {loading ? (
        <CircularProgress sx={{ mt: 4 }} />
      ) : filteredOrders.length > 0 ? (
        filteredOrders.map((order) => (
          <OrderCard
            key={order._id}
            order={order}
            onPay={handlePay}
            onCancel={() => handleCancel(order._id)}
            onDelete={() => handleDelete(order._id)}
            onChangePayment={() =>
              handleChangePayment(
                `${order.paymentMethod === "Cash" ? "Bank" : "Cash"}`,
                order._id
              )
            }
            onReview={handleReview}
          />
        ))
      ) : (
        <Typography variant="body1" sx={{ mt: 3 }}>
          Không có đơn hàng nào.
        </Typography>
      )}
    </Container>
  );
}
