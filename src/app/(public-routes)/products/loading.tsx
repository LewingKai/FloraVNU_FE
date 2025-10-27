import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <CircularProgress
        enableTrackSlot
        size="3rem"
        sx={{
          color: "#E32C89",
        }}
      />
    </div>
  );
}
