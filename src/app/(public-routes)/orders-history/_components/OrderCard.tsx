"use client";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Stack,
  Divider,
  Box,
} from "@mui/material";
import { Order } from "@/types/order";
import OrderItem from "./OrderItem";
import { Button } from "@/components/ui/Button";

interface Props {
  order: Order;
  onPay: (id: string) => void;
  onCancel: (id: string) => void;
  onDelete: (id: string) => void;
  onChangePayment: (id: string) => void;
  onReview: (flowerId: string) => void;
}

export default function OrderCard({
  order,
  onPay,
  onCancel,
  onDelete,
  onChangePayment,
  onReview,
}: Props) {
  const statusColor = {
    Pending: "#FFA500",
    Processing: "#1E90FF",
    Delivered: "#28A745",
    Cancelled: "#DC3545",
  }[order.orderStatus];

  const statusLabel = {
    Pending: "Chờ xử lý",
    Processing: "Đang xử lý",
    Delivered: "Đã giao",
    Cancelled: "Đã hủy",
  }[order.orderStatus];

  return (
    <Card
      sx={{
        mb: 3,
        borderRadius: "16px",
        boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        },
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          backgroundColor: statusColor,
          color: "#fff",
          fontWeight: 600,
          px: 2,
          py: 0.5,
          borderRadius: "20px",
          fontSize: 13,
          textTransform: "uppercase",
        }}
      >
        {statusLabel}
      </Box>

      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            Đơn #{order._id}
          </Typography>
        }
        subheader={
          <Typography fontSize={14} color="text.secondary">
            Ngày đặt: {new Date(order.createdAt).toLocaleDateString("vi-VN")}
          </Typography>
        }
      />

      <Divider />

      <CardContent sx={{ px: 3, pt: 2, pb: 3 }}>
        <Stack spacing={2}>
          {order.orderItems.map((item) => (
            <OrderItem
              key={item._id}
              {...item}
              onReview={onReview}
              orderStatus={order.orderStatus}
            />
          ))}

          <Divider sx={{ my: 2 }} />

          <Stack spacing={0.5}>
            <Typography variant="body2">
              <b>Người nhận:</b> {order.recipientName}
            </Typography>
            <Typography variant="body2">
              <b>Địa chỉ:</b> {order.recipientAddress}
            </Typography>
            <Typography variant="body2">
              <b>Thời gian giao:</b>{" "}
              {new Date(order.deliveryDate).toLocaleString("vi-VN")}
            </Typography>
            <Typography variant="body2">
              <b>Phương thức thanh toán:</b> {order.paymentMethod}
            </Typography>
            <Typography variant="body2">
              <b>Trạng thái thanh toán:</b>{" "}
              {order.paymentStatus ? "Đã thanh toán" : "Chưa thanh toán"}
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontWeight={600} color="primary.main">
              Tổng tiền: {order.totalPrice.toLocaleString()}₫
            </Typography>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            justifyContent="flex-end"
            sx={{ mt: 2 }}
          >
            {order.orderStatus === "Pending" && (
              <>
                <Button
                  onClick={() => onCancel(order._id)}
                  className="bg-gray-300 hover:bg-gray-400"
                >
                  Hủy đơn
                </Button>
                <Button
                  onClick={() => onChangePayment(order._id)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Đổi phương thức
                </Button>
              </>
            )}

            {(order.orderStatus === "Processing" ||
              order.orderStatus === "Delivered") && (
              <Button
                onClick={() => onPay(order._id)}
                className="bg-green-600 hover:bg-green-700"
              >
                Thanh toán
              </Button>
            )}

            {order.orderStatus === "Cancelled" && (
              <Button
                onClick={() => onDelete(order._id)}
                className="border border-gray-400 text-gray-700 hover:bg-gray-100"
              >
                Xóa đơn
              </Button>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
