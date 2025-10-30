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
        flexDirection: { xs: "column", sm: "row" },
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        image={image.url}
        alt={name}
        sx={{
          width: { xs: "100%", sm: 160 },
          height: { xs: 160, sm: "auto" },
          objectFit: "cover",
        }}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 0.5 }}>
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
                className={
                  isDelivered
                    ? "bg-secondary"
                    : "bg-gray-300 cursor-not-allowed"
                }
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
