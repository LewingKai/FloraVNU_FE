class HelpersFunctions {
  formatPrice(price: number): string {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }
}
const helpersFunction = new HelpersFunctions();
export default helpersFunction;
