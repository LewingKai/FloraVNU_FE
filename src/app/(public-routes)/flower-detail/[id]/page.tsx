import { useParams } from "next/navigation";
import DetailFlower from "./components/detail_flower";
import { Try } from "@mui/icons-material";
import productApi from "@/services/axios/actions/products.action";
import { Flower } from "@/types/home";
import reviewAction from "@/services/axios/actions/review.action";
import { Review } from "@/types/review";

interface Props {
  params: {
    id: string;
  };
}

const DetailFlowerPage = async ({ params }: Props) => {
  const { id } = await params;
  let flowerData: Flower = {} as Flower;
  let reviewList: Review[] = [];
  try {
    const resDetail = await productApi.getDetail(id as string);
    const resReviewList = await reviewAction.getReviewsByFlowerId(id);
    flowerData = resDetail.data || ({} as Flower);
    reviewList = (resReviewList.data as Review[]) || [];
    console.log("reviewList:", reviewList);
  } catch (error) {
    console.error(error);
  }
  return <DetailFlower flowerData={flowerData} reviewList={reviewList} />;
};

export default DetailFlowerPage;
