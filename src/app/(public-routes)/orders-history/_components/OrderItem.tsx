import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Stack,
  Tooltip,
} from "@mui/material";
import { FlowerItem } from "@/types/order";
import { Button } from "@/components/ui/Button";

interface Props extends FlowerItem {
  onReview: (flowerId: string) => void;
  orderStatus: string;
}

export default function OrderItem({
  flowerId,
  name,
  image,
  price,
  rating,
  quantity,
  onReview,
  orderStatus,
}: Props) {
  const isDelivered = orderStatus === "Delivered";

  return (
    <Card
      sx={{
        display: "flex",
        mb: 1.5,
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={image.url}
        sx={{ width: 120, objectFit: "cover" }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" fontWeight={600}>
          {name}
        </Typography>
        <Rating value={rating || 4} readOnly size="small" />
        <Typography variant="body2" sx={{ mt: 0.5 }}>
          <b>Số lượng:</b> {quantity}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "#FF69B5", fontWeight: 600, mt: 0.5 }}
        >
          {price.toLocaleString()}₫
        </Typography>

        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 1 }}>
          <Tooltip
            title={
              isDelivered
                ? "Đánh giá sản phẩm"
                : "Chỉ có thể đánh giá sau khi đơn đã giao"
            }
          >
            <span>
              <Button
                variant="default"
                disabled={!isDelivered}
                onClick={() => onReview(flowerId)}
                className={`${
                  isDelivered
                    ? "bg-secondary"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >
                Đánh giá
              </Button>
            </span>
          </Tooltip>
        </Stack>
      </CardContent>
    </Card>
  );
}
