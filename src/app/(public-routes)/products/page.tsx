import ProductsList from "./components/ProductList";
import productApi from "@/services/axios/actions/products.action";
import { Flower, SearchParamsType } from "@/types/home";

type Props = {
  searchParams?: SearchParamsType;
};

export default async function ProductsScreen({ searchParams }: Props) {
  let flowerList: Flower[] = [];
  try {
    const resolvedParams = await searchParams;
    const res = await productApi.search(resolvedParams || {});
    flowerList = Array.isArray(res) ? res : res.data || [];
  } catch (error) {
    console.error(error);
  }

  return (
    <ProductsList flowerList={flowerList} searchParams={searchParams || {}} />
  );
}
