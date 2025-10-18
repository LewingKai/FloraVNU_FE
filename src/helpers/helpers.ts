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
}
const helpersFunction = new HelpersFunctions();
export default helpersFunction;
