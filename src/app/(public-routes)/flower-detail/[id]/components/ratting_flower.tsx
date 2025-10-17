import { DetailProductTextVN } from "@/helpers/text_vn";
import reviewAction from "@/services/axios/actions/review.action";
import useAuth from "@/stores/useAuth";
import { Review } from "@/types/review";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Try } from "@mui/icons-material";
import { Avatar, Rating } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

interface RatingFlowerProps {
  reviewList: Review[];
  flowerid: string;
}

const RatingFlowerComponent: React.FC<RatingFlowerProps> = ({
  reviewList,
  flowerid,
}) => {
  const [showReviewForm, setShowReviewForm] = useState(true);
  const [ratingValue, setRatingValue] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [visibleCount, setVisibleCount] = useState(5);
  const { user } = useAuth();
  const reversedReviews = [...reviewList].reverse();

  const visibleReviews = reversedReviews.slice(0, visibleCount);
  const handleDeleteReview = async (idReview: string) => {
    try {
      const res = await reviewAction.deleteReview(idReview);
      toast.success("Xóa bình luận thành công!");
    } catch (error) {
      console.error("Error deleting review:", error);
      toast.error("Không thể xóa bình luận!");
    }
  };
  const handleLoadMore = () => {
    if (visibleCount >= reversedReviews.length) {
      setVisibleCount(5);
      return;
    }
    setVisibleCount((prev) => prev + 5);
  };
  const handleSubmitReview = async () => {
    const requestData = {
      flowerId: flowerid,
      content: reviewComment,
      rating: ratingValue,
    };
    try {
      const res = await reviewAction.submitReview(requestData);
      if (res.data != null) {
        toast.success("Bình luận thành công!");
      } else {
        toast.error("Bình luận thất bại!");
      }
      setRatingValue(5);
      setReviewComment("");
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Bình luận thất bại!");
    }
  };
  const averageRating =
    reviewList.length > 0
      ? Math.ceil(
          reviewList.reduce((sum, r) => sum + (r.rating || 0), 0) /
            reviewList.length
        )
      : 0;
  return (
    <div>
      {/* Rating summary */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 min-h-[400px]">
        <div className="w-full md:w-1/3 min-h-full bg-gray-50 p-6 rounded-lg flex flex-col items-center justify-center transition-all duration-200">
          <div className="text-4xl font-bold text-gray-800">
            {averageRating}/5
          </div>
          <div className="my-2">
            <Rating
              name="average-rating"
              value={averageRating}
              precision={0.5}
              readOnly
              size="large"
            />
          </div>
          <div className="text-gray-500 text-sm mt-1">
            Dựa trên {reviewList.length} đánh giá
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
              {DetailProductTextVN.shareYourReview}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitReview();
              }}
            >
              <div className="mb-2 flex">
                <label htmlFor="rating" className="block mb-2">
                  {DetailProductTextVN.rating}
                </label>
                <Rating
                  name="half-rating"
                  value={ratingValue}
                  precision={0.5}
                  onChange={(_, value) => setRatingValue(value ?? 0)}
                  id="rating"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="reviewComment" className="block mb-2">
                  {DetailProductTextVN.ratingContent}
                </label>
                <textarea
                  id="reviewComment"
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
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
                  {DetailProductTextVN.cancel}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  {DetailProductTextVN.sendReview}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Reviews list */}
      <div className="mt-6">
        {visibleReviews.length > 0 ? (
          <div className="space-y-6">
            {visibleReviews.map((review) => (
              <div key={review.createdAt} className="border-b pb-6 mt-5">
                <div className="flex justify-between">
                  <div className=" flex gap-2 justify-between items-center">
                    <Avatar src={review.accountId?.avatar.url} />
                    <div className="font-semibold">
                      {review.accountId?.username}
                    </div>
                  </div>
                  <div className="text-gray-500 text-sm">
                    {review.createdAt}
                  </div>
                </div>
                <div className="my-2">
                  <Rating
                    name="half-rating"
                    value={review.rating || 0}
                    precision={0.5}
                    readOnly
                  />
                </div>
                <p className=" text-gray-700">{review.content}</p>
                {review.accountId?._id == user?._id ? (
                  <button
                    className="flex justify-end w-full"
                    onClick={() => handleDeleteReview(review._id.toString())}
                  >
                    <FontAwesomeIcon icon={faTrash} color="red" />
                  </button>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            {DetailProductTextVN.noReview}
          </div>
        )}
      </div>
      {visibleCount < 5 && (
        <div className="w-full flex justify-center mt-5">
          <button
            className="mt-2 mx-auto px-4 py-2 bg-blue-300 rounded hover:bg-blue-500 text-white"
            onClick={handleLoadMore}
          >
            {visibleCount < reversedReviews.length ? "Xem thêm" : "Rút gọn"}
          </button>
        </div>
      )}
    </div>
  );
};

export default RatingFlowerComponent;
