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
}
const helpersFunction = new HelpersFunctions();
export default helpersFunction;
