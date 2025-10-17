// /app/products/page.tsx hoặc tương tự
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import productApi from "@/services/axios/actions/products.action";
import ProductsList from "./components/ProductList";
import { SearchParamsType } from "@/types/home";

type Props = {
  searchParams?: SearchParamsType;
};

export default async function ProductsScreen({ searchParams }: Props) {
  const queryClient = new QueryClient();

  const params: SearchParamsType = {
    limit: searchParams?.limit ?? "20",
    forms: searchParams?.forms ?? "",
    occasions: searchParams?.occasions ?? "",
    types: searchParams?.types ?? "",
    priceMax: searchParams?.priceMax ?? 500000,
    sort: searchParams?.sort ?? "",
    searchType: searchParams?.searchType ?? "name",
    keyword: searchParams?.keyword ?? "",
    page: searchParams?.page ?? "1",
    priceMin: searchParams?.priceMin ?? 0,
  };
  // Prefetch từ server (SEO)

  await queryClient.prefetchQuery({
    queryKey: ["products", JSON.stringify(params)],
    queryFn: async () => {
      console.log("searchParams: gọi api ở ngoài", params);
      const res = await productApi.search(params || {});
      if (res) return Array.isArray(res) ? res : res || [];
    },
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsList searchParams={params || {}} />
    </HydrationBoundary>
  );
}
