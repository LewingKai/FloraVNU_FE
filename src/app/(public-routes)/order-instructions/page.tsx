import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hướng dẫn đặt hoa - FloraVNU | Cách đặt hoa online nhanh chóng",
  description:
    "Hướng dẫn chi tiết cách đặt hoa tươi online tại FloraVNU. Quy trình đơn giản, thanh toán linh hoạt, giao hàng nhanh chóng trong 1-4 giờ.",
  keywords: [
    "hướng dẫn đặt hoa",
    "cách đặt hoa online",
    "đặt hoa FloraVNU",
    "thanh toán đặt hoa",
  ],
};

const OrderInstructionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-purple-500 text-white rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hướng Dẫn Đặt Hoa
          </h1>
          <p className="text-lg opacity-90">
            Đặt hoa dễ dàng chỉ với 4 bước đơn giản
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                1
              </div>
              <h2 className="text-xl font-bold">Chọn sản phẩm</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-14">
              <li>• Duyệt qua bộ sưu tập hoa tươi</li>
              <li>• Xem chi tiết sản phẩm, giá cả</li>
              <li>• Chọn &ldquo;Thêm vào giỏ hàng&rdquo; hoặc &ldquo;Mua ngay&rdquo;</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                2
              </div>
              <h2 className="text-xl font-bold">Điền thông tin</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-14">
              <li>• Thông tin người gửi: Họ tên, SĐT, Email</li>
              <li>• Thông tin người nhận: Họ tên, SĐT, địa chỉ</li>
              <li>• Chọn ngày giờ giao hàng</li>
              <li>• Nhập lời nhắn (nếu có)</li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                3
              </div>
              <h2 className="text-xl font-bold">Thanh toán</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-14">
              <li>• VNPAY: Thanh toán qua ATM, Visa, QR Code</li>
              <li>• COD: Thanh toán khi nhận hàng</li>
              <li>• Kiểm tra lại đơn hàng trước khi xác nhận</li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center font-bold mr-4">
                4
              </div>
              <h2 className="text-xl font-bold">Nhận hoa</h2>
            </div>
            <ul className="space-y-2 text-gray-700 ml-14">
              <li>• Nội thành: Giao trong 1-4 giờ</li>
              <li>• Ngoại thành: Giao trong 4-6 giờ</li>
              <li>• Nhận thông báo trạng thái đơn hàng qua SMS/Email</li>
              <li>• Kiểm tra hàng trước khi nhận (COD)</li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mt-8 text-center">
          <h3 className="text-xl font-bold mb-4">Cần hỗ trợ?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0338963327"
              className="text-secondary font-semibold hover:underline"
            >
              📞 0338963327
            </a>
            <a
              href="mailto:floravnu@gmail.com"
              className="text-secondary font-semibold hover:underline"
            >
              ✉️ floravnu@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInstructionsPage;
