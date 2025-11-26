import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật - FloraVNU | Bảo vệ thông tin khách hàng",
  description:
    "Chính sách bảo mật thông tin khách hàng của FloraVNU. Cam kết bảo vệ dữ liệu cá nhân, không chia sẻ với bên thứ ba, tuân thủ pháp luật Việt Nam.",
  keywords: [
    "chính sách bảo mật FloraVNU",
    "bảo vệ thông tin khách hàng",
    "quyền riêng tư",
  ],
};

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-purple-500 text-white rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Chính Sách Bảo Mật
          </h1>
          <p className="text-lg opacity-90">
            FloraVNU cam kết bảo vệ thông tin cá nhân của bạn
          </p>
        </div>

        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">📋</span>
              Thu Thập Thông Tin
            </h2>
            <p className="text-gray-700 mb-3">
              FloraVNU thu thập các thông tin sau:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Họ tên, số điện thoại, email, địa chỉ</li>
              <li>• Thông tin thanh toán (qua cổng thanh toán bảo mật)</li>
              <li>• Lịch sử đơn hàng và tương tác trên website</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">🎯</span>
              Mục Đích Sử Dụng
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Xử lý và giao đơn hàng</li>
              <li>• Liên hệ xác nhận và hỗ trợ khách hàng</li>
              <li>• Gửi thông tin khuyến mãi (nếu đồng ý)</li>
              <li>• Cải thiện chất lượng dịch vụ</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">🔒</span>
              Bảo Mật Thông Tin
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                • <strong>Không chia sẻ</strong> với bên thứ ba vì mục đích
                thương mại
              </li>
              <li>• Mã hóa dữ liệu thanh toán theo chuẩn PCI-DSS</li>
              <li>• Hệ thống bảo mật SSL/TLS</li>
              <li>
                • Chỉ chia sẻ với đối tác vận chuyển để giao hàng (tên, SĐT,
                địa chỉ)
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">⚖️</span>
              Quyền Của Khách Hàng
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Yêu cầu xem, chỉnh sửa thông tin cá nhân</li>
              <li>• Yêu cầu xóa dữ liệu (trừ thông tin giao dịch theo luật)</li>
              <li>• Từ chối nhận email marketing</li>
              <li>• Khiếu nại về việc sử dụng dữ liệu</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">🍪</span>
              Cookie & Công Nghệ Theo Dõi
            </h2>
            <p className="text-gray-700 mb-3">
              Website sử dụng cookie để cải thiện trải nghiệm người dùng:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Ghi nhớ giỏ hàng và thông tin đăng nhập</li>
              <li>• Phân tích hành vi truy cập (Google Analytics)</li>
              <li>• Bạn có thể tắt cookie trong trình duyệt</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-3">📞</span>
              Liên Hệ
            </h2>
            <p className="text-gray-700 mb-4">
              Nếu có thắc mắc về chính sách bảo mật, liên hệ:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Hotline</p>
                <a
                  href="tel:0338963327"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  0338963327
                </a>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Email</p>
                <a
                  href="mailto:floravnu@gmail.com"
                  className="text-pink-600 font-semibold hover:underline"
                >
                  floravnu@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-gray-600 text-sm bg-yellow-50 p-4 rounded-xl">
          <p>
            ⚠️ Chính sách tuân thủ Luật An ninh mạng 2018 và quy định về bảo vệ
            dữ liệu cá nhân của Việt Nam.
          </p>
          <p className="mt-2">
            Cập nhật lần cuối: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
