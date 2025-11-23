import DetailFlower from "./components/detail_flower";
import productApi from "@/services/axios/actions/products.action";
import reviewAction from "@/services/axios/actions/review.action";
import { Flower } from "@/types/home";
import { Review } from "@/types/review";

const DetailFlowerPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  let flowerData: Flower = {} as Flower;
  let OutstandingFlowerList: Flower[] = [];
  let reviewList: Review[] = [];

  try {
    const resDetail = await productApi.getDetail(id);
    const resReviewList = await reviewAction.getReviewsByFlowerId(id);

    flowerData = resDetail.data ?? ({} as Flower);

    const resOutstandingFlower = await productApi.getOutStadingFlowersSameType(
      flowerData?.types?.join(", ") ?? ""
    );

    OutstandingFlowerList = resOutstandingFlower.data ?? [];
    reviewList = (resReviewList.data as Review[]) ?? [];
  } catch (error) {
    console.error(error);
  }

  return (
    <DetailFlower
      flowerData={flowerData}
      reviewList={reviewList}
      OutstandingFlowerList={OutstandingFlowerList}
    />
  );
};

export default DetailFlowerPage;
