import { Swiper, SwiperSlide } from "swiper/react";
import CertificateCardCV from "./CertificateCardCV";
import { CV_CERTIFICATES_ID } from "../../constant/Const";

const CertificateListCV = () => {
  return (
    <section id={CV_CERTIFICATES_ID} className="py-[90px]">
      <div className="cv-main-container">
        <div className="cv-main-section-container">
          <div className="text-[12px] text-white font-light border-solid-1px border-[#565656] rounded-[30px] px-[20px] py-[5px] mb-[53px] inline-flex items-center">
            <i className="las la-certificate text-[14px] mr-[10px] mb-[1px]"></i>
            CERTIFICATES
          </div>
          <div className="certificate-list">
            <Swiper
              grabCursor={"true"}
              spaceBetween={25}
              slidesPerView={"auto"}
            >
              <SwiperSlide>
                <CertificateCardCV />
              </SwiperSlide>
              <SwiperSlide>
                <CertificateCardCV />
              </SwiperSlide>
              <SwiperSlide>
                <CertificateCardCV />
              </SwiperSlide>
              <SwiperSlide>
                <CertificateCardCV />
              </SwiperSlide>
              <SwiperSlide>
                <CertificateCardCV />
              </SwiperSlide>
              <SwiperSlide>
                <CertificateCardCV />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateListCV;
