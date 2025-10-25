// /app/products/page.tsx hoặc tương tự
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import productApi from "@/services/axios/actions/products.action";
import ProductsList from "./components/ProductList";
import { SearchParamsType } from "@/types/home";
import helpersFunction from "@/helpers/helpers";

type Props = {
  searchParams?: SearchParamsType;
};

export default async function ProductsScreen({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const queryClient = new QueryClient();

  const params: SearchParamsType = {
    limit: resolvedSearchParams?.limit ?? "20",
    forms: resolvedSearchParams?.forms ?? "",
    occasions: resolvedSearchParams?.occasions ?? "",
    types: resolvedSearchParams?.types ?? "",
    priceMax: resolvedSearchParams?.priceMax ?? 50000000,
    sort: resolvedSearchParams?.sort ?? "",
    searchType: resolvedSearchParams?.searchType ?? "name",
    keyword: resolvedSearchParams?.keyword ?? "",
    page: resolvedSearchParams?.page ?? "1",
    priceMin: resolvedSearchParams?.priceMin ?? 0,
  };
  // Prefetch từ server (SEO)

  // await queryClient.prefetchQuery({
  //   queryKey: helpersFunction.getProductQueryKey(params),
  //   queryFn: async () => {
  //     console.log("gọi lại api ở ngoài");
  //     const res = await productApi.search(params || {});
  //     if (res) return Array.isArray(res) ? res : res || [];
  //   },
  // });
  // let filterList = {};
  // try {
  //   const resFilterOccasions = await productApi.getAllOccasions();
  //   const resFilterForm = await productApi.getAllForm();
  //   const resFilterType = await productApi.getAllType();

  //   filterList = {
  //     occasions: resFilterOccasions.data || [],
  //     forms: resFilterForm.data || [],
  //     types: resFilterType.data || [],
  //   };
  // } catch (error) {
  //   console.error(error);
  // }
  await queryClient.prefetchQuery({
    queryKey: helpersFunction.getProductQueryKey(params),
    queryFn: () => productApi.search(params),
  });

  // Filter list
  let filterList = {};
  try {
    const [resOccasions, resForm, resType] = await Promise.all([
      productApi.getAllOccasions(),
      productApi.getAllForm(),
      productApi.getAllType(),
    ]);
    filterList = {
      occasions: resOccasions.data || [],
      forms: resForm.data || [],
      types: resType.data || [],
    };
    console.log("filterrerer", filterList);
  } catch (error) {
    console.error(error);
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProductsList searchParams={params} filterListCate={filterList} />
    </HydrationBoundary>
  );
}
