import { SwiperProps, SwiperSlide } from "swiper/react"
import Slider from "../Slider"

import styles from "../Presentation/styles.module.scss"

import BigArrow from "../../assets/images/arrowg.svg"
import HomeFirst from "../../assets/images/home1.svg"
import HomeSecond from "../../assets/images/home2.svg"
import HomeThird from "../../assets/images/home3.svg"
import HomeFourth from "../../assets/images/home4.svg"
import { WhatsappLogo } from "phosphor-react"
export default function Presentation() {
  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    }
  }
  return (
    <main>
      <div className={styles.displaySlider}>
        <div className={styles.alignArrow}>
          <div className={styles.homeText}>
            <h1>Sua beleza <br/> floresce <br/> aqui</h1>
            <p>Clínica especializada em embelezamento feminino</p>
            <div className={styles.lineForSlider}></div>
          </div>
          <div className={styles.arrow}>
            <img width={45} height={75} src={BigArrow} alt="Flecha-Ícone"/>
          </div>
        </div>
        <div className={styles.sliderPosition}>
          <Slider settings={settings}>
            <SwiperSlide className={styles.swiperSlide}>
              <img  src={HomeFirst}  alt="Slider-Home"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img  src={HomeSecond}  alt="Slider-Home"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img  src={HomeThird}  alt="Slider-Home"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img  src={HomeFourth}  alt="Slider-Home"/>
            </SwiperSlide>  
          </Slider>
        </div> 
      </div>
      
        <a href="https://wa.me/554199491851" target="_blank" className={styles.whatsappButton}>
              <span>Agende seu horário</span>
              <WhatsappLogo width={20} height={20}/>
        </a>
      
    </main>
  )
}