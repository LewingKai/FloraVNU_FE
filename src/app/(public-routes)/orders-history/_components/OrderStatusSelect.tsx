"use client";
import CustomSelect from "@/components/ui/CustomSelect";

interface Props {
  status: string;
  onChange: (value: string) => void;
}

export default function OrderStatusSelect({ status, onChange }: Props) {
  return (
    <CustomSelect
      value={status}
      onChange={onChange}
      placeholder="Lọc theo trạng thái"
      options={[
        { label: "Chờ xử lý", value: "Pending" },
        { label: "Đang giao", value: "Processing" },
        { label: "Đã giao", value: "Delivered" },
        { label: "Đã hủy", value: "Cancelled" },
      ]}
      validationRules={() => true}
    />
  );
}
