import { SwiperProps, SwiperSlide } from "swiper/react"
import Slider from "../Slider"

import styles from "../Presentation/styles.module.scss"

import BigArrow from "../../assets/images/arrowg.png"
import HomeFirst from "../../assets/images/home1.png"
import HomeSecond from "../../assets/images/home2.png"
import HomeThird from "../../assets/images/home3.png"
import HomeFourth from "../../assets/images/home4.png"
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
            <p>Clinica especializada em embelezamento feminino</p>
            <div className={styles.lineForSlider}></div>
          </div>
          <div className={styles.arrow}>
            <img width={45} height={75} src={BigArrow} alt="Flecha-Ícone"/>
          </div>
        </div>
        <div className={styles.sliderPosition}>
          <Slider settings={settings}>
            <SwiperSlide className={styles.swiperSlide}>
              <img  src={HomeFirst} width={400} height={600} alt="Slider-Home"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img  src={HomeSecond} width={400} height={600} alt="Slider-Home"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img  src={HomeThird} width={400} height={600} alt="Slider-Home"/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperSlide}>
                <img  src={HomeFourth} width={400} height={600} alt="Slider-Home"/>
            </SwiperSlide>  
          </Slider>
        </div> 
          
      </div>
    </main>
  )
}