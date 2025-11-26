# FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu

FloraVNU là nền tảng thương mại điện tử chuyên cung cấp hoa tươi tại Làng Đại học Thủ Đức, được xây dựng bằng Next.js 15 và TypeScript.

## 🌸 Giới thiệu

FloraVNU mang đến những đóa hoa tươi đẹp và ý nghĩa cho mọi dịp - từ sinh nhật, khai trương, tốt nghiệp đến các ngày lễ đặc biệt. Website được phát triển bởi nhóm sinh viên Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM phục vụ mục đích học tập.

## ✨ Tính năng chính

### Người dùng
- 🛍️ Duyệt và tìm kiếm sản phẩm hoa với bộ lọc đa dạng
- 🛒 Giỏ hàng và đặt hàng trực tuyến
- 💳 Thanh toán qua VNPAY hoặc COD
- 📦 Theo dõi lịch sử đơn hàng
- ⭐ Đánh giá và bình luận sản phẩm
- 👤 Quản lý thông tin tài khoản
- 💬 Chatbox hỗ trợ khách hàng

### Quản trị viên
- 📊 Quản lý đơn hàng
- 👥 Quản lý tài khoản người dùng
- 🌺 Quản lý sản phẩm hoa

## 🛠️ Công nghệ sử dụng

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Material-UI (MUI)
- **State Management:** Zustand
- **Data Fetching:** TanStack Query (React Query)
- **Form Handling:** React Hook Form
- **HTTP Client:** Axios
- **Validation:** Custom validation utilities
- **Rich Text:** DOMPurify cho sanitize HTML
- **Carousel:** React Slick
- **Icons:** Font Awesome, MUI Icons
- **Notifications:** React Toastify

## 📁 Cấu trúc dự án

```
src/
├── app/                          # App Router pages
│   ├── (public-routes)/         # Public pages
│   │   ├── page.tsx            # Home page
│   │   ├── products/           # Products page
│   │   ├── flower-detail/      # Product detail
│   │   ├── my-cart/            # Shopping cart
│   │   ├── create-order/       # Checkout
│   │   ├── orders-history/     # Order history
│   │   ├── account/            # Account management
│   │   ├── sign-in/            # Login
│   │   ├── sign-up/            # Register
│   │   ├── forgot-password/    # Password recovery
│   │   └── about-us/           # About page
│   ├── (private-routes)/        # Protected pages
│   │   └── admin/              # Admin panel
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/                  # Reusable components
│   ├── layout/                 # Layout components
│   ├── pages/                  # Page-specific components
│   ├── ui/                     # UI components
│   └── flower_item.tsx         # Product card
├── services/                    # API services
│   └── axios/
│       ├── actions/            # API action classes
│       ├── endpoints/          # API endpoints
│       └── types.ts            # API types
├── stores/                      # Zustand stores
│   └── useAuth.ts              # Auth store
├── types/                       # TypeScript types
├── utils/                       # Utility functions
├── helpers/                     # Helper functions
├── configs/                     # Configuration files
└── hooks/                       # Custom hooks
```

## 🚀 Bắt đầu

### Yêu cầu

- Node.js 18.x trở lên

### Cài đặt

1. Clone repository:
```bash
git clone https://github.com/LewingKai/FloraVNU_FE.git
cd floravnu_fe
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file `.env` và cấu hình:
```env
NEXT_PUBLIC_BACKEND_URL=your_backend_url
NEXT_PUBLIC_CLIENT_URL=your_client_url
```

4. Chạy development server:
```bash
npm run dev
```

## 📝 Scripts

```bash
npm run dev          # Chạy development server
npm run build        # Build production
npm run start        # Chạy production server
npm run lint         # Chạy ESLint
npm run format       # Format code với Prettier
npm run prepare      # Setup Husky hooks
```

## 🔒 Bảo mật

- Sanitize HTML content với DOMPurify
- Validation phía client và server
- Protected routes với middleware
- Secure authentication flow

## 🎨 Features đặc biệt

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly UI

### Performance
- Image optimization với Next.js Image
- Code splitting tự động
- React Query caching
- Lazy loading components

### SEO
- Metadata động cho mỗi trang
- Sitemap tự động
- Open Graph tags
- Structured data

## 📄 License

[MIT License](LICENSE)

## 👥 Nhóm phát triển

Sinh viên Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM

## 🔗 Links

- [Backend Repository](https://github.com/DatHuynhCoder/BE_FloraVNU)

---

Made with ❤️ by NhungChangTraiBanHoa Team
