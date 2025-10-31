"use client";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Rating,
  TextField,
  Stack,
} from "@mui/material";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

import reviewAction from "@/services/axios/actions/review.action";

interface ReviewModalProps {
  open: boolean;
  onClose: () => void;
  flowerId: string | null;
  onSubmit: (flowerId: string, rating: number, comment: string) => void;
}

export default function ReviewModal({
  open,
  onClose,
  flowerId,
  onSubmit,
}: ReviewModalProps) {
  const [rating, setRating] = useState<number | null>(5);
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!flowerId) return;
    onSubmit(flowerId, rating || 0, content);
    setRating(5);
    setContent("");
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Đánh giá sản phẩm</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <Rating
            value={rating}
            onChange={(_, value) => setRating(value)}
            size="large"
            precision={0.5}
          />
          <TextField
            label="Nhận xét của bạn"
            multiline
            rows={3}
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 3 }}>
        <Button
          variant="default"
          className="bg-red-600 hover:bg-red-500 text-white"
          onClick={onClose}
        >
          Hủy
        </Button>
        <Button variant="default" onClick={handleSubmit}>
          Gửi đánh giá
        </Button>
      </DialogActions>
    </Dialog>
  );
}
