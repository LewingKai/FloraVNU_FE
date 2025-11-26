import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách hoạt động - FloraVNU | Quy định & Điều khoản",
  description:
    "Chính sách về bán hàng, giao nhận, đổi trả, bảo hành hoa tươi của FloraVNU. Quy định minh bạch, bảo vệ quyền lợi khách hàng.",
  keywords: [
    "chính sách FloraVNU",
    "đổi trả hoa",
    "giao nhận hoa",
    "bảo hành hoa tươi",
  ],
};

const OperatingPolicyPage = () => {
  const policies = [
    {
      title: "Bán Hàng & Đặt Hàng",
      icon: "🛍️",
      items: [
        "Khách hàng từ 16 tuổi trở lên",
        "Đơn hàng xác nhận sau khi thanh toán",
        "Giá sản phẩm đã bao gồm VAT 8%",
        "FloraVNU có quyền từ chối đơn gian lận",
      ],
    },
    {
      title: "Giao Hàng",
      icon: "🚚",
      items: [
        "Nội thành TP.HCM: 1-4 giờ",
        "Ngoại thành: 4-6 giờ",
        "Miễn phí ship từ 500.000đ (nội thành)",
        "Phí giao gấp (1h): +50.000đ",
      ],
    },
    {
      title: "Đổi Trả & Hoàn Tiền",
      icon: "↩️",
      items: [
        "Đổi miễn phí nếu hoa héo, sai mẫu",
        "Thông báo trong 2 giờ khi nhận hàng",
        "Hoàn tiền 100% nếu giao trễ >2h",
        "Không đổi trả do bảo quản sai",
      ],
    },
    {
      title: "Bảo Hành",
      icon: "🌸",
      items: [
        "Hoa tươi tối thiểu 3 ngày",
        "Hoa cao cấp: 5-7 ngày",
        "Đổi hoa mới nếu héo trước hạn",
        "Điều kiện: Chăm sóc đúng cách",
      ],
    },
    {
      title: "Thanh Toán",
      icon: "💳",
      items: [
        "VNPAY: ATM, Visa, QR Code (giảm 5%)",
        "COD: Thanh toán khi nhận hàng",
        "Bảo mật chuẩn PCI-DSS",
        "Hoàn tiền trong 3-5 ngày",
      ],
    },
    {
      title: "Bảo Mật",
      icon: "🔒",
      items: [
        "Không chia sẻ thông tin với bên thứ ba",
        "Bảo mật thanh toán tuyệt đối",
        "Tuân thủ Luật An ninh mạng 2018",
        "Chỉ dùng thông tin để xử lý đơn",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-secondary to-purple-500 text-white rounded-2xl p-8 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Chính Sách Hoạt Động
          </h1>
          <p className="text-lg opacity-90">
            FloraVNU cam kết minh bạch, bảo vệ quyền lợi khách hàng
          </p>
          <p className="text-sm mt-2 opacity-80">
            Cập nhật: {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>

        {/* Policies Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{policy.icon}</span>
                <h2 className="text-xl font-bold text-gray-800">
                  {policy.title}
                </h2>
              </div>
              <ul className="space-y-2">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start text-gray-700">
                    <span className="text-secondary mr-2 mt-1">•</span>
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Cần Hỗ Trợ? Liên Hệ Ngay
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">📞</div>
              <a
                href="tel:0338963327"
                className="text-pink-600 font-semibold hover:underline"
              >
                0338963327
              </a>
            </div>
            <div className="bg-white p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">✉️</div>
              <a
                href="mailto:floravnu@gmail.com"
                className="text-pink-600 font-semibold hover:underline"
              >
                floravnu@gmail.com
              </a>
            </div>
            <div className="bg-white p-4 rounded-xl text-center">
              <div className="text-2xl mb-2">📍</div>
              <p className="text-sm text-gray-700">
                Khu phố 34, P. Linh Xuân
                <br />
                TP.HCM
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-6 text-gray-600 text-sm bg-yellow-50 p-4 rounded-xl">
          <p className="font-semibold mb-2">⚠️ Lưu ý quan trọng</p>
          <p>
            FloraVNU có quyền thay đổi chính sách và sẽ thông báo trên website.
            Mọi thắc mắc xin liên hệ hotline: 0338963327
          </p>
          <p className="text-xs mt-2 text-gray-500">
            Tuân thủ Luật Thương mại điện tử 2005, Luật Bảo vệ quyền lợi người
            tiêu dùng 2010
          </p>
        </div>
      </div>
    </div>
  );
};

export default OperatingPolicyPage;
