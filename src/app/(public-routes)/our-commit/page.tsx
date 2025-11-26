import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cam kết của FloraVNU | Chất lượng - Uy tín - Tận tâm",
  description:
    "FloraVNU cam kết hoa tươi 100%, giao đúng hẹn, bảo hành 3+ ngày, hoàn tiền nếu không hài lòng. Dịch vụ chăm sóc khách hàng 24/7.",
  keywords: [
    "cam kết FloraVNU",
    "chất lượng hoa tươi",
    "bảo hành hoa",
    "dịch vụ khách hàng",
  ],
};

const OurCommitPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-purple-500 text-white rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Cam Kết Của FloraVNU
          </h1>
          <p className="text-lg opacity-90">Chất lượng - Uy tín - Tận tâm</p>
        </div>

        <div className="space-y-6">
          {/* Commit 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🌸</span>
              <h2 className="text-2xl font-bold text-gray-800">Hoa Tươi 100%</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Hoa nhập trực tiếp từ vườn uy tín</li>
              <li>• Kiểm tra chất lượng trước khi giao</li>
              <li>• Cam kết hoa tươi ít nhất 3 ngày</li>
              <li>• Đổi hoa mới nếu không đạt chất lượng</li>
            </ul>
          </div>

          {/* Commit 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🚚</span>
              <h2 className="text-2xl font-bold text-gray-800">Giao Đúng Hẹn</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Giao hàng 24/7, kể cả ngày lễ</li>
              <li>• Nội thành: 1-4 giờ</li>
              <li>• Ngoại thành: 4-6 giờ</li>
              <li>• Thông báo trạng thái đơn hàng real-time</li>
            </ul>
          </div>

          {/* Commit 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">💯</span>
              <h2 className="text-2xl font-bold text-gray-800">Hài Lòng 100%</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Đổi trả miễn phí trong 2 giờ nếu không đúng mô tả</li>
              <li>• Hoàn tiền 100% nếu giao trễ quá 2 giờ</li>
              <li>• Hỗ trợ khách hàng 24/7</li>
              <li>• Giải quyết khiếu nại nhanh chóng</li>
            </ul>
          </div>

          {/* Commit 4 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🎁</span>
              <h2 className="text-2xl font-bold text-gray-800">Giá Trị Thêm</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Miễn phí thiệp chúc mừng cao cấp</li>
              <li>• Miễn phí ship đơn từ 500.000đ (nội thành)</li>
              <li>• Tư vấn chọn hoa miễn phí</li>
              <li>• Giảm giá 5% thanh toán VNPAY</li>
            </ul>
          </div>

          {/* Commit 5 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <span className="text-4xl mr-4">🔒</span>
              <h2 className="text-2xl font-bold text-gray-800">Bảo Mật & An Toàn</h2>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li>• Bảo mật thông tin khách hàng tuyệt đối</li>
              <li>• Thanh toán qua cổng VNPAY bảo mật</li>
              <li>• Không spam, không chia sẻ thông tin</li>
              <li>• Tuân thủ pháp luật Việt Nam</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Trải Nghiệm Dịch Vụ Ngay Hôm Nay!
          </h3>
          <p className="text-gray-700 mb-6">
            FloraVNU - Nơi tình yêu bắt đầu, nơi niềm tin được gửi gắm
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:0338963327"
              className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
            >
              📞 Gọi ngay: 0338963327
            </a>
            <a
              href="/products"
              className="bg-white text-secondary border-2 border-secondary px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors"
            >
              🛍️ Xem sản phẩm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCommitPage;
