# FloraVNU - Tiệm hoa tươi, nơi tình yêu bắt đầu

FloraVNU là nền tảng thương mại điện tử chuyên cung cấp hoa tươi tại Làng Đại học Thủ Đức, được xây dựng bằng Next.js 15 và TypeScript.

## Giới thiệu

FloraVNU mang đến những đóa hoa tươi đẹp và ý nghĩa cho mọi dịp - từ sinh nhật, khai trương, tốt nghiệp đến các ngày lễ đặc biệt. Website được phát triển bởi nhóm sinh viên Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM phục vụ mục đích học tập.

## Tính năng chính

### Người dùng
- Duyệt và tìm kiếm sản phẩm hoa với bộ lọc đa dạng (theo sự kiện, loại hoa, kiểu dáng, giá)
- Giỏ hàng và đặt hàng trực tuyến
- Thanh toán qua VNPAY hoặc COD
- Theo dõi lịch sử đơn hàng và trạng thái giao hàng
- Đánh giá và bình luận sản phẩm (rating 0.5-5 sao)
- Quản lý thông tin tài khoản (hồ sơ, đổi mật khẩu, xóa tài khoản)
- Chatbox hỗ trợ khách hàng với AI
- Tùy chọn nhận tại cửa hàng hoặc giao hàng tận nơi
- Thêm lời nhắn và ghi chú cho đơn hàng

### Quản trị viên
- Quản lý đơn hàng (xem, cập nhật trạng thái, hủy)
- Quản lý tài khoản người dùng
- Quản lý sản phẩm hoa (thêm, sửa, xóa)

## Công nghệ sử dụng

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- UI Components: Material-UI (MUI), Custom UI components
- State Management: Zustand
- Data Fetching: TanStack Query (React Query)
- Form Handling: React Hook Form
- HTTP Client: Axios
- Validation: Custom validation utilities
- Rich Text: DOMPurify cho sanitize HTML
- Carousel: React Slick
- Icons: Font Awesome, MUI Icons
- Notifications: React Toastify
- Code Quality: ESLint, Prettier, Husky, Lint-staged

## Cấu trúc dự án

```
src/
├── app/                            # App Router pages
│   ├── (public-routes)/            # Public pages
│   │   ├── about-us/               # About page
│   │   ├── account/                # Account management
│   │   ├── blogs/                  # Blog listing
│   │   ├── contact-instructions/   # Contact guide
│   │   ├── create-order/           # Checkout form
│   │   ├── flower-detail/[id]/     # Product detail with reviews
│   │   ├── forgot-password/        # Password recovery
│   │   ├── my-cart/                # Shopping cart
│   │   └── operating-policy/       # Operating policy
│   │   ├── order-instructions/     # Order guide
│   │   ├── orders-history/         # Order history & review
│   │   ├── our-commit/             # Commitments
│   │   ├── privacy-policy/         # Privacy policy
│   │   ├── products/               # Products listing & filtering
│   │   ├── sign-in/                # Login
│   │   ├── sign-up/                # Register
│   │   ├── page.tsx                # Home page
│   ├── (private-routes)/           # Protected pages
│   │   └── admin/                  # Admin panel
│   ├── layout.tsx                  # Root layout with SEO
│   ├── sitemap.tsx                 # Dynamic sitemap
│   └── globals.css                 # Global styles
└── assets/                         # Static assets
    └── images/                     # Images & icons
├── components/                     # Reusable components
│   ├── layout/                     # Layout components
│   ├── pages/                      # Page-specific components
│   ├── ui/                         # Reusable UI components
│   ├── AccountMenu.tsx             # User account dropdown
│   └── flower_item.tsx             # Product card
│   ├── RecommendCarousel.tsx       # Product carousel
├── configs/                        # Configuration files
│   ├── pathName.ts                 # Route paths
│   └── env.constant.ts             # Environment variables
├── helpers/                        # Helper functions
│   ├── cn.ts                       # Tailwind CSS class merger
│   ├── helpers.ts                  # Format, strip HTML
│   └── text_vn.ts                  # Vietnamese text constants
├── services/                       # API services
│   └── axios/
│       ├── actions/                # API action classes
│       ├── endpoints/              # API endpoints
│       └── ClientRequest.ts        # Request wrapper
│       ├── index.ts                # Axios client
│       ├── server.ts               # Server-side utilities
│       ├── types.ts                # API types
├── stores/                         # Zustand stores
│   └── useAuth.ts                  # Auth state management
│   └── useOrders.ts                # Orders state management
├── types/                          # TypeScript types
│   └── account.ts                  # User, Account
│   ├── home.ts                     # Flower, search params
│   └── order.ts                    # Order
│   └── review.ts                   # Review, reviewer
├── utils/                          # Utility functions
│   ├── createEmotionCache.ts       # Emotion cache setup for MUI
│   ├── eventbus.ts                 # Event emitter
│   └── validation.ts               # Form validation
```

## Bắt đầu

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

3. Tạo file `.env` trong thư mục root với các biến môi trường:
```env
NEXT_PUBLIC_BACKEND_URL=your_backend_url
NEXT_PUBLIC_CLIENT_URL=your_client_url
```

4. Chạy development server:
```bash
npm run dev
```

Website sẽ chạy tại `http://localhost:3000`

## Scripts

```bash
npm run dev          # Chạy development server (port 3000)
npm run build        # Build production
npm run start        # Chạy production server
npm run lint         # Chạy ESLint
npm run format       # Format code với Prettier
npm run prepare      # Setup Husky hooks (tự động chạy khi install)
```

## Bảo mật

- Sanitize HTML content với DOMPurify để tránh XSS
- Client-side validation với custom rules
- Protected routes với middleware kiểm tra authentication
- Secure authentication flow với JWT tokens
- Environment variables để bảo vệ API keys

## Features đặc biệt

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly UI cho mobile
- Hamburger menu cho mobile navigation

### Performance
- Image optimization với Next.js Image component
- Code splitting tự động với App Router
- React Query caching (3 phút stale time)
- Lazy loading components
- Prefetching dữ liệu từ server (SSR)

### SEO
- Metadata động cho mỗi trang
- Sitemap tự động được generate
- Open Graph tags cho social sharing
- Structured data (JSON-LD)
- Google Search Console verification
- Canonical URLs

### User Experience
- Real-time search với debouncing
- Filter sản phẩm đa chiều
- Toast notifications cho user actions
- Loading states và error handling
- Pagination cho danh sách sản phẩm
- Rating system với half-star precision
- Event bus cho real-time updates

## Code Quality

- ESLint: Linting với Next.js config
- Prettier: Code formatting
- Husky: Git hooks
- Lint-staged: Pre-commit formatting
- Commitlint: Commit message validation
- TypeScript: Type safety

## API Integration

Website tích hợp với backend API cho các chức năng:

- Authentication: Đăng ký, đăng nhập, quên mật khẩu
- Products: Tìm kiếm, lọc, chi tiết sản phẩm
- Cart: Thêm, xóa, cập nhật giỏ hàng
- Orders: Tạo đơn, theo dõi, hủy đơn
- Reviews: Đánh giá, bình luận sản phẩm
- Payment: Tích hợp VNPAY gateway
- Chatbox: AI support bot

## Deployment

Project được deploy tại: [https://floravnu.com](https://floravnu.com)

### Build Production

```bash
npm run build
npm run start
```

## License

[MIT License](LICENSE)

## Nhóm phát triển

Sinh viên Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM

Team: NhungChangTraiBanHoa

## Links

- Website: [https://floravnu.com](https://floravnu.com)
- Backend Repository: [https://github.com/DatHuynhCoder/BE_FloraVNU](https://github.com/DatHuynhCoder/BE_FloraVNU)
- Frontend Repository: [https://github.com/LewingKai/FloraVNU_FE](https://github.com/LewingKai/FloraVNU_FE)

---

Made with love by NhungChangTraiBanHoa Team
