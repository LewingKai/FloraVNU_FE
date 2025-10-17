import HomePage from "@/components/pages/home_page";
import productApi from "@/services/axios/actions/products.action";
import { Flower } from "@/types/home";
import { Review } from "@/types/review";

const outStadingCommentList: Review[] = [
  {
    _id: 1,
    name: "Lan Anh",
    avatar: "/images/home/rose.png",
    comment:
      "Hoa rất tươi và được gói cực kỳ tinh tế, từng chi tiết nhỏ đều được chăm chút cẩn thận. Shop giao đúng giờ hẹn nên mình không phải lo lắng gì cả, bó hoa mở ra còn thơm ngát cả phòng. Mình thật sự hài lòng và chắc chắn sẽ quay lại để đặt thêm nhiều lần nữa.",
  },
  {
    _id: 2,
    name: "Hoàng Minh",
    avatar: "/images/home/rose.png",
    comment:
      "Lần đầu đặt hoa online mà thấy chất lượng hơn mong đợi rất nhiều. Hoa không chỉ tươi mới mà cách phối màu cũng rất sang trọng, đúng chuẩn gu của mình. Dịch vụ từ khâu tư vấn, gói hoa cho đến vận chuyển đều chuyên nghiệp, khiến mình cảm thấy tin tưởng tuyệt đối và chắc chắn sẽ ủng hộ dài lâu.",
  },
  {
    _id: 3,
    name: "Thu Hà",
    avatar: "/images/home/rose.png",
    comment:
      "Nhân viên tư vấn vô cùng dễ thương, nhiệt tình giải đáp mọi thắc mắc và gợi ý mẫu hoa phù hợp với dịp tặng. Khi nhận hàng thì bó hoa đúng y hình quảng cáo, màu sắc rực rỡ và không hề bị dập nát. Người nhận hoa rất vui và cảm động, mình cũng thấy an tâm và hạnh phúc khi chọn đúng cửa hàng uy tín.",
  },
  {
    _id: 4,
    name: "Ngọc Trâm",
    avatar: "/images/home/rose.png",
    comment:
      "Dịch vụ cực kỳ tận tâm, hoa được giao nhanh chóng chỉ sau vài giờ đặt, lại còn được bảo quản cẩn thận nên khi tới nơi vẫn giữ nguyên độ tươi. Hương thơm tự nhiên tỏa ra rất dễ chịu, bó hoa lại được gói rất sang trọng, làm mình cảm giác như món quà trở nên đặc biệt hơn hẳn. Thật sự xứng đáng 5 sao cho shop!",
  },
];
export default async function Home() {
  let flowerList: Flower[] = [];
  try {
    const res = await productApi.getOutStadingFlowers();
    flowerList = res.data || [];
  } catch (error) {
    console.error(error);
  }
  return (
    <HomePage
      outStandingFlower={flowerList}
      outStadingCommentList={outStadingCommentList}
    />
  );
}
