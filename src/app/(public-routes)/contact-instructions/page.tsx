import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ FloraVNU | Hỗ trợ khách hàng 24/7",
  description:
    "Liên hệ FloraVNU qua hotline 0338963327, email floravnu@gmail.com. Hỗ trợ tư vấn đặt hoa, giải đáp thắc mắc 24/7. Địa chỉ: Khu phố 34, Phường Linh Xuân, TP.HCM.",
  keywords: [
    "liên hệ FloraVNU",
    "hotline đặt hoa",
    "hỗ trợ khách hàng",
    "tư vấn hoa tươi",
  ],
};

const ContactInstructionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-purple-500 text-white rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Liên Hệ FloraVNU
          </h1>
          <p className="text-lg opacity-90">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Phone */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">📞</div>
            <h2 className="text-xl font-bold mb-2">Hotline</h2>
            <a
              href="tel:0338963327"
              className="text-2xl text-secondary font-bold hover:underline"
            >
              0338963327
            </a>
            <p className="text-gray-600 mt-2">Hỗ trợ 24/7</p>
          </div>

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-5xl mb-4">✉️</div>
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <a
              href="mailto:floravnu@gmail.com"
              className="text-xl text-secondary font-bold hover:underline break-all"
            >
              floravnu@gmail.com
            </a>
            <p className="text-gray-600 mt-2">Phản hồi trong 24h</p>
          </div>

          {/* Address */}
          <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow md:col-span-2">
            <div className="text-5xl mb-4">📍</div>
            <h2 className="text-xl font-bold mb-2">Địa chỉ</h2>
            <p className="text-lg text-gray-700">
              Khu phố 34, Phường Linh Xuân
              <br />
              TP. Hồ Chí Minh
            </p>
            <p className="text-gray-600 mt-2">Thứ 2 - CN: 6:00 - 22:00</p>
          </div>
        </div>

        {/* Support Topics */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Chúng Tôi Có Thể Giúp Gì Cho Bạn?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-pink-200 rounded-lg p-4">
              <h3 className="font-bold text-secondary mb-2">
                🛍️ Tư vấn đặt hoa
              </h3>
              <p className="text-sm text-gray-600">
                Gợi ý mẫu hoa phù hợp với dịp, ngân sách
              </p>
            </div>
            <div className="border border-pink-200 rounded-lg p-4">
              <h3 className="font-bold text-secondary mb-2">
                📦 Theo dõi đơn hàng
              </h3>
              <p className="text-sm text-gray-600">
                Kiểm tra trạng thái giao hàng
              </p>
            </div>
            <div className="border border-pink-200 rounded-lg p-4">
              <h3 className="font-bold text-secondary mb-2">↩️ Đổi trả hàng</h3>
              <p className="text-sm text-gray-600">
                Hỗ trợ đổi trả theo chính sách
              </p>
            </div>
            <div className="border border-pink-200 rounded-lg p-4">
              <h3 className="font-bold text-secondary mb-2">
                ❓ Giải đáp thắc mắc
              </h3>
              <p className="text-sm text-gray-600">
                Trả lời mọi câu hỏi về sản phẩm, dịch vụ
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Quick Links */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-center mb-4">
            Câu Hỏi Thường Gặp
          </h3>
          <div className="space-y-2 text-center">
            <a
              href="/order-instructions"
              className="block text-secondary hover:underline"
            >
              → Làm thế nào để đặt hoa?
            </a>
            <a
              href="/operating-policy"
              className="block text-secondary hover:underline"
            >
              → Chính sách giao hàng & đổi trả
            </a>
            <a
              href="/our-commit"
              className="block text-secondary hover:underline"
            >
              → Cam kết của FloraVNU
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInstructionsPage;
