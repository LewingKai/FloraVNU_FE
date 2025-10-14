import { useParams } from "next/navigation";
import DetailFlower from "./components/detail_flower";
import { Try } from "@mui/icons-material";
import productApi from "@/services/axios/actions/products.action";
import { Flower } from "@/types/home";

interface Props {
  params: {
    id: string;
  };
}

const DetailFlowerPage = async ({ params }: Props) => {
  const { id } = await params;
  let flowerData: Flower = {} as Flower;
  try {
    const res = await productApi.getDetail(id as string);
    flowerData = res.data || ({} as Flower);
  } catch (error) {
    console.error(error);
  }
  return <DetailFlower flowerData={flowerData} />;
};

export default DetailFlowerPage;
