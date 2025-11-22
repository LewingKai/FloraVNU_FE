"use client";
import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import { toast } from "react-toastify";

import OrderCard from "./_components/OrderCard";
import OrderStatusSelect from "./_components/OrderStatusSelect";
import ReviewModal from "./_components/ReviewModal";

import orderApi from "@/services/axios/actions/order.action";
import paymentApi from "@/services/axios/actions/payment.action";
import reviewAction from "@/services/axios/actions/review.action";
import useOrders from "@/stores/useOrders";

export default function OrdersHistoryPage() {
  const [filterStatus, setFilterStatus] = useState("Pending");
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [selectedFlowerId, setSelectedFlowerId] = useState<string | null>(null);
  const { orders, fetchOrders } = useOrders();

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = filterStatus
    ? orders.filter((o) => o.orderStatus === filterStatus)
    : orders;

  const handlePay = async (description: string, amount: number) => {
    try {
      const res = await paymentApi.createPayment(description, amount);
      window.location.href = res.data.checkoutUrl;
    } catch (err) {
      toast.error("Thanh toán thất bại!");
      throw err;
    }
  };

  const handleCancel = async (id: string) => {
    try {
      await orderApi.cancelOrder(id);
      toast.success("Hủy đơn thành công!");
      fetchOrders();
    } catch (err) {
      toast.error("Hủy đơn thất bại!");
      throw err;
    }
  };

  const handleChangePayment = async (paymentMethod: string, id: string) => {
    try {
      await orderApi.updatePaymentMethod(paymentMethod, id);
      toast.success("Thay đổi phương thức thanh toán thành công!");
      fetchOrders();
    } catch (err) {
      toast.error("Thay đổi phương thức thanh toán thất bại!");
      throw err;
    }
  };

  const handleSubmitReview = async (
    flowerId: string,
    rating: number,
    content: string
  ) => {
    try {
      const data = {
        flowerId,
        rating,
        content,
      };
      await reviewAction.submitReview(data);
      toast.success("Đánh giá thành công!");
    } catch (err) {
      toast.error("Gửi đánh giá thất bại!");
      throw err;
    }
  };

  const handleReview = (flowerId: string) => {
    setSelectedFlowerId(flowerId);
    setReviewModalOpen(true);
  };

  return (
    <Container maxWidth="md" sx={{ pt: { xs: 10, sm: 14 }, pb: 6 }}>
      <Box
        display="flex"
        justifyContent={{ xs: "center", sm: "space-between" }}
        alignItems="center"
        flexWrap="wrap"
        gap={2}
        mb={4}
      >
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign={{ xs: "center", sm: "left" }}
          width="100%"
        >
          Lịch sử đơn hàng
        </Typography>
        <Box sx={{ width: { xs: "100%", sm: 250 }, mx: { xs: "auto", sm: 0 } }}>
          <OrderStatusSelect status={filterStatus} onChange={setFilterStatus} />
        </Box>
      </Box>

      {filteredOrders.length > 0 ? (
        <Box display="flex" flexDirection="column" alignItems="center" gap={3}>
          {filteredOrders.map((order) => (
            <Box key={order._id} sx={{ width: "100%", maxWidth: 600 }}>
              <OrderCard
                order={order}
                onPay={() => handlePay(order._id, order.totalPrice)}
                onCancel={() => handleCancel(order._id)}
                onChangePayment={() =>
                  handleChangePayment(
                    order.paymentMethod === "Cash" ? "Bank" : "Cash",
                    order._id
                  )
                }
                onReview={handleReview}
              />
            </Box>
          ))}
        </Box>
      ) : (
        <Box
          textAlign="center"
          mt={6}
          p={3}
          sx={{
            borderRadius: "12px",
            backgroundColor: "#f9f9f9",
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.05)",
          }}
        >
          <Typography variant="body1" color="text.secondary">
            Không có đơn hàng nào.
          </Typography>
        </Box>
      )}

      <ReviewModal
        open={reviewModalOpen}
        onClose={() => setReviewModalOpen(false)}
        flowerId={selectedFlowerId}
        onSubmit={handleSubmitReview}
      />
    </Container>
  );
}
