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
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("img").forEach((img) => img.remove());
    return doc.body.textContent.replace(/["']/g, "") || "";
  };
  normalizeParams(params: SearchParamsType) {
    return JSON.stringify(
      Object.entries(params)
        .sort(([a], [b]) => a.localeCompare(b))
        .reduce((acc, [key, val]) => {
          acc[key] = typeof val === "string" ? val : String(val);
          return acc;
        }, {} as Record<string, string>)
    );
  }
  getProductQueryKey = (params: SearchParamsType) => [
    "products",
    JSON.stringify(params),
  ];
}
const helpersFunction = new HelpersFunctions();
export default helpersFunction;
