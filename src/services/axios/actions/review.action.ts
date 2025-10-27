import { client } from "..";
import { clientRequest } from "../ClientRequest";
import { reviewEndpoint } from "../endpoints/review.endpoint";

type ReviewIRequest = {
  content: string;
  rating: number;
  flowerId: string;
  //   userId: string;
};

class ReviewAction {
  async submitReview(reviewRequest: ReviewIRequest) {
    try {
      const response = await clientRequest
        .getAxiosInstance()
        .post(reviewEndpoint.comments, reviewRequest);
      return response.data;
    } catch (error) {
      console.error("Error submitting review:", error);
      return {};
    }
  }
  async deleteReview(reviewId: string) {
    try {
      const response = await client.delete(
        `${reviewEndpoint.comments}/${reviewId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error deleting review:", error);
      return {};
    }
  }
  async getReviewsByFlowerId(flowerId: string) {
    try {
      const response = await client.get(
        `${reviewEndpoint.comments}/${flowerId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching reviews:", error);
      return [];
    }
  }
}

const reviewAction = new ReviewAction();
export default reviewAction;
