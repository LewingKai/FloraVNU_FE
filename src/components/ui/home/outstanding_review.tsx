import { Review } from "@/types/review";
import { Avatar } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useState } from "react";

type Props = {
  outStadingCommentList: Review[];
};

const OutStadingReview = React.memo(({ outStadingCommentList }: Props) => {
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <div className="flex justify-center items-center md:gap-6 gap-3 overflow-x-clip">
        {outStadingCommentList.map((t, index) => (
          <div
            key={t._id}
            className={` cursor-pointer transition-all md:w-[50px] md:h-[50px]  h-[40px] w-[40px] duration-300 rounded-full overflow-clip ${
              selected === index
                ? "scale-125 border-2 border-white"
                : "scale-90 opacity-70"
            }`}
            onClick={() => setSelected(index)}
          >
            <Avatar
              alt="Avatar khách hàng"
              src={t.avatar || "/images/home/rose.png"}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </div>

      {/* Nội dung comment */}
      <div className="sm:max-w-[75vw] max-w-[85%] mx-auto sm:p-6 p-3 rounded-br-4xl rounded-tl-4xl bg-white/80 sm:my-5 my-5 lg:min-h-[25vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] italic text-center">
              “{outStadingCommentList[selected].comment ?? ""}”
            </p>
            <h4 className="text-[12px]  sm:text-[15px] md:text-[18px]  lg:text-[20px] font-bold text-secondary text-center text-lg">
              {outStadingCommentList[selected].name}
            </h4>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
});

export default OutStadingReview;
