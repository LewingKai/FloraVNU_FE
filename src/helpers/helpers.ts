import { FilterListType } from "@/app/(public-routes)/products/components/ProductList";
import { SearchParamsType } from "@/types/home";

class HelpersFunctions {
  formatPrice(price: number): string {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
  // làm sạch chuỗi nếu có thẻ html
  stripHtmlTags = (html: string) => {
    if (!html) return "";
    let cleaned = html.replace(/<img[^>]*>/gi, "");
    cleaned = cleaned.replace(/<\/?[^>]+(>|$)/g, "");
    cleaned = cleaned.replace(/["']/g, "");
    return cleaned.trim();
  };

  normalizeParams(params: SearchParamsType) {
    return JSON.stringify(
      Object.entries(params)
        .sort(([a], [b]) => a.localeCompare(b))
        .reduce(
          (acc, [key, val]) => {
            acc[key] = typeof val === "string" ? val : String(val);
            return acc;
          },
          {} as Record<string, string>
        )
    );
  }
  getProductQueryKey = (params: SearchParamsType) => [
    "products",
    JSON.stringify(params),
  ];

   mapFilterToSearchParams = (
  filters: FilterListType
): SearchParamsType => ({
  limit: filters.limited,
  forms: filters.forms.length ? filters.forms.join(",") : undefined,
  occasions: filters.occasions.length ? filters.occasions.join(",") : undefined,
  types: filters.types.length ? filters.types.join(",") : undefined,
  priceMax: filters.priceMax,
  priceMin: filters.priceMin,
  searchType: filters.searchType,
  keyword: filters.keyword,
  page: filters.page.toString(),
  sort: `price:${filters.priceSort},stockQuantity:${filters.stockQuantity}`,
});
}
const helpersFunction = new HelpersFunctions();
export default helpersFunction;
