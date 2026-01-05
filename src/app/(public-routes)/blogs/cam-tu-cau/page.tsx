import Head from "next/head"
import Image from "next/image"
import img1 from "../../../../../public/images/blogs/cam_tu_cau.png"
import img2 from "../../../../../public/images/blogs/cam_tu_cau2.png"
import img3 from "../../../../../public/images/blogs/cam_tu_cau3.png"
export default function BlogHortensia() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Hoa cẩm tú cầu – Biểu tượng của sự tinh tế, lòng biết ơn và sắc màu cảm xúc",
    description: "Khám phá ý nghĩa của hoa cẩm tú cầu, cách chăm sóc và ứng dụng trong trang trí, quà tặng để gửi thông điệp yêu thương và trân trọng.",
    url: "https://floravnu.com/blog/hoa-cam-tu-cau",
    datePublished: "2026-01-05T00:00:00+07:00",
    dateModified: "2026-01-05T00:00:00+07:00",
    author: {
      "@type": "Organization",
      name: "FloraVNU",
    },
    publisher: {
      "@type": "Organization",
      name: "FloraVNU",
      logo: {
        "@type": "ImageObject",
        url: "https://floravnu.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://floravnu.com/blogs/hoa-cam-tu-cau",
    },
  }

  return (
    <div className="detail-blog">
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Hoa cẩm tú cầu – Biểu tượng tinh tế và sắc màu cảm xúc | FloraVNU</title>
        <meta
          name='description'
          content='Khám phá ý nghĩa của hoa cẩm tú cầu – loài hoa tinh tế, tượng trưng cho lòng biết ơn, tình yêu và sắc màu cảm xúc. Chọn hoa tươi tại FloraVNU.'
        />
        <meta
          name='keywords'
          content='hoa cẩm tú cầu, ý nghĩa hoa cẩm tú cầu, hoa tươi, quà tặng, trang trí, FloraVNU'
        />
        <meta name='author' content='FloraVNU' />

        <meta
          property='og:title'
          content='Hoa cẩm tú cầu – Biểu tượng tinh tế và sắc màu cảm xúc'
        />
        <meta
          property='og:description'
          content='Khám phá ý nghĩa, cách chăm sóc và ứng dụng hoa cẩm tú cầu trong quà tặng và trang trí. Chọn hoa tươi tại FloraVNU.'
        />
        <meta property='og:url' content='https://floravnu.com/blog/hoa-cam-tu-cau' />
        <meta property='og:type' content='article' />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <header>
        <h1>Hoa cẩm tú cầu – Biểu tượng của sự tinh tế, lòng biết ơn và sắc màu cảm xúc</h1>
      </header>

      <section className='space-y-4'>
        <p>
          <strong>Hoa cẩm tú cầu</strong> (Hydrangea) là một trong những loài hoa nổi bật với vẻ đẹp mềm mại,
          thanh thoát và sắc màu thay đổi theo đất trồng. Từ lâu, cẩm tú cầu đã trở thành biểu tượng
          của <strong>lòng biết ơn, sự tinh tế và cảm xúc sâu sắc</strong>. Trên website <strong>FloraVNU</strong>,
          chúng tôi muốn mang đến cho bạn cái nhìn toàn diện về ý nghĩa, cách chăm sóc và ứng dụng của hoa
          cẩm tú cầu, để mỗi bó hoa gửi đi đều là thông điệp trọn vẹn.
        </p>

        <Image
          src={img1}
          alt='Hoa cẩm tú cầu xanh'
          className='mt-10 w-[70vw] h-[25vh] sm:w-[40vw] sm:h-[50vh] object-cover mx-auto rounded-3xl'
        />

        <h2>1. Ý nghĩa của hoa cẩm tú cầu theo màu sắc</h2>
        <p>
          Hoa cẩm tú cầu có nhiều màu sắc khác nhau, mỗi màu mang một thông điệp riêng:
        </p>
        <ul className='list-disc ml-5 space-y-2'>
          <li>
            <strong>Xanh:</strong> Biểu tượng của sự bình yên, thanh thản và lòng tin. Thích hợp
            để tặng bạn bè, người thân hoặc trang trí không gian yên tĩnh.
          </li>
          <li>
            <strong>Hồng:</strong> Tượng trưng cho tình yêu, sự ngọt ngào và cảm xúc ấm áp. Lựa chọn
            hoàn hảo để tặng người yêu hoặc trong dịp kỷ niệm lãng mạn.
          </li>
          <li>
            <strong>Trắng:</strong> Đại diện cho sự thuần khiết, trong sáng và lòng kính trọng. Phù hợp
            cho các dịp cưới hỏi hoặc làm hoa trang trí tinh tế.
          </li>
          <li>
            <strong>Tím:</strong> Biểu tượng của sự bí ẩn, sang trọng và quyền quý. Thường dùng trong
            trang trí sang trọng hoặc quà tặng đặc biệt.
          </li>
        </ul>

        <h2>2. Cách chăm sóc hoa cẩm tú cầu tươi lâu</h2>
        <Image
          src={img2}
          alt='Hoa cẩm tú cầu chăm sóc'
          className='mt-10 w-[70vw] h-[25vh] sm:w-[40vw] sm:h-[50vh] object-cover mx-auto rounded-3xl'
        />
        <p>
          Để hoa cẩm tú cầu luôn tươi và rực rỡ, bạn nên lưu ý:
        </p>
        <ul className='list-disc ml-5 space-y-2'>
          <li><strong>Ánh sáng:</strong> Hoa ưa sáng nhưng tránh ánh nắng trực tiếp quá gắt.</li>
          <li><strong>Nước:</strong> Giữ đất ẩm nhưng không để úng nước, tưới đều đặn.</li>
          <li><strong>Đất trồng:</strong> Tơi xốp, giàu chất hữu cơ và thoát nước tốt.</li>
          <li><strong>Phân bón:</strong> Bón định kỳ để hoa nở đều, giữ màu sắc rực rỡ.</li>
          <li><strong>Cắt tỉa:</strong> Loại bỏ cành héo, già để cây tập trung nuôi hoa mới.</li>
        </ul>

        <h2>3. Ứng dụng hoa cẩm tú cầu trong đời sống</h2>
        <Image
          src={img3}
          alt='Hoa cẩm tú cầu trang trí'
          className='mt-10 w-[70vw] h-[25vh] sm:w-[40vw] sm:h-[50vh] object-cover mx-auto rounded-3xl'
        />
        <p>
          Hoa cẩm tú cầu không chỉ để ngắm mà còn được ứng dụng rộng rãi:
        </p>
        <ul className='list-disc ml-5 space-y-2'>
          <li><strong>Trang trí nhà cửa:</strong> Trồng trong vườn, ban công hoặc cắm trong lọ để không gian thêm lãng mạn.</li>
          <li><strong>Quà tặng:</strong> Tặng sinh nhật, kỷ niệm hoặc gửi lời cảm ơn sâu sắc.</li>
          <li><strong>Sự kiện & tiệc cưới:</strong> Trang trí bàn tiệc, cổng hoa, backdrop, tạo cảm giác sang trọng, tinh tế.</li>
        </ul>

        <h2>4. Lời khuyên khi chọn hoa cẩm tú cầu</h2>
        <p>
          Chọn hoa tươi, chùm đều và cánh hoa không héo. Kết hợp với các loài hoa khác như hồng, baby để tạo bó hoa phong phú, bắt mắt. Lựa chọn màu sắc phù hợp với thông điệp bạn muốn gửi gắm.
        </p>

        <h2>
          Hãy chọn hoa cẩm tú cầu tại <a href="http://localhost:3000/"><strong>FloraVNU</strong></a> để gửi thông điệp yêu thương và trân trọng đến người thân!
        </h2>
        <blockquote>
          Một bó hoa cẩm tú cầu không chỉ đẹp mà còn chứa đựng thông điệp sâu sắc, giúp gắn kết tình cảm và mang đến niềm vui cho người nhận.
        </blockquote>
      </section>
    </div>
  )
}
