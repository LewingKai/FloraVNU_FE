import { Review } from "@/types/review";
import { Rating } from "@mui/material";
import { useState } from "react";

interface RatingFlowerProps {
  sampleReviews: Review[];
}

const RatingFlowerComponent: React.FC<RatingFlowerProps> = ({
  sampleReviews,
}) => {
  const [showReviewForm, setShowReviewForm] = useState(true);
  const handleSubmitReview = () => {
    return;
  };
  return (
    <div>
      {/* Rating summary */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 min-h-[400px]">
        <div className="w-full md:w-1/3 min-h-full bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center transition-all duration-200">
          <div className="text-4xl font-bold text-gray-800">4/5</div>
          <div className="my-2">
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
          <div className="text-gray-500 text-sm mt-1">
            Dựa trên {sampleReviews.length} đánh giá
          </div>
          {/* {!showReviewForm ? (
            <button
              onClick={() => setShowReviewForm(!showReviewForm)}
              className="mt-6 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Viết đánh giá
            </button>
          ) : null} */}
        </div>

        {/* Review form */}
        {showReviewForm && (
          <div className="w-full md:w-2/3 bg-white p-6 border rounded-lg">
            <h3 className="text-lg font-semibold mb-4">
              Chia sẻ đánh giá của bạn
            </h3>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-2 flex">
                <label htmlFor="rating" className="block mb-2">
                  Xếp hạng:
                </label>
                <Rating
                  name="half-rating"
                  defaultValue={2.5}
                  precision={0.5}
                  id="rating"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="reviewComment" className="block mb-2">
                  Nội dung đánh giá
                </label>
                <textarea
                  id="reviewComment"
                  // value={reviewComment}
                  // onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full border rounded-md p-2 h-32"
                  placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..."
                ></textarea>
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  // onClick={() => setShowReviewForm(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Gửi đánh giá
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Reviews list */}
      <div className="mt-6">
        {sampleReviews.length > 0 ? (
          <div className="space-y-6">
            {sampleReviews.map((review) => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex justify-between">
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-gray-500 text-sm">{review.date}</div>
                </div>
                <div className="my-1">
                  <Rating
                    name="half-rating"
                    defaultValue={2.5}
                    precision={0.5}
                  />
                </div>
                <p className="mt-2 text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            Chưa có đánh giá nào cho sản phẩm này
          </div>
        )}
      </div>
    </div>
  );
};

export default RatingFlowerComponent;
