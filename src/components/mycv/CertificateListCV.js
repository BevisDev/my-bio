import { Swiper, SwiperSlide } from "swiper/react";
import CertificateCard from "./CertificateCard";

const CertificateListCV = () => {
  return (
    <section id="certificates" className="cv-container">
      <h1 className="mb-2">CERTIFICATES</h1>
      <div className="certificate-list">
        <Swiper grabCursor={"true"} spaceBetween={25} slidesPerView={"auto"}>
          <SwiperSlide>
            <CertificateCard />
          </SwiperSlide>
          <SwiperSlide>
            <CertificateCard />
          </SwiperSlide>
          <SwiperSlide>
            <CertificateCard />
          </SwiperSlide>
          <SwiperSlide>
            <CertificateCard />
          </SwiperSlide>
          <SwiperSlide>
            <CertificateCard />
          </SwiperSlide>
          <SwiperSlide>
            <CertificateCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CertificateListCV;
