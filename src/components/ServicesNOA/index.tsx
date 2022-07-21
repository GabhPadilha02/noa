import styles from "../ServicesNOA/styles.module.scss"
import WaterMark from "../../assets/images/watermark.svg"
import Slider from "../Slider"
import { SwiperProps, SwiperSlide } from "swiper/react"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../Slider/slider.css'

import ServicesFirst from "../../assets/images/services1.svg"
import ServicesSecond from "../../assets/images/services2.svg"
import ServicesThird from "../../assets/images/services3.svg"
import ServicesFourth from "../../assets/images/services4.svg"
import ServicesFifth from "../../assets/images/services5.svg"
import ServicesSixth from "../../assets/images/services6.svg"

import { Circle } from "phosphor-react"

export default function ServicesNOA() {

  const settings: SwiperProps = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    }
  };

  return (
    <main className={styles.servicesContainer} id="servicos">
      <div className={styles.waterMarkServices}>
        <img src={WaterMark} alt="Marca D'agua" width={55} height={55} />
        <h2>Serviços</h2>
      </div>

      <div className={styles.sliderPosition}>
          <Slider settings={settings}>
            <SwiperSlide className={styles.swiperSlideServices}>
              <img className={styles.servicesImage}  src={ServicesFirst}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Unhas</h3>
                <ul className={styles.listContainer}>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Manicure e pedicure clássico</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Esmaltação em gel</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Blindagem</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Alongamento</span> 
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>
            
            <SwiperSlide className={styles.swiperSlideServices}>
              <img className={styles.servicesImage}  src={ServicesSecond}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3 className={styles.resizeTitle}>Remoção de micropigmentação e pigmentos indesejados</h3>
              </div>
              <a href="https://wa.me/554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img className={styles.servicesImage} src={ServicesThird}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Micropigmentação</h3>
                <ul>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Técnicas internacional e artística para micropigmentação</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>O que há de mais moderno e sofisticado no mercado</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Técnica de pálpebras, lábios e sobrancelhas</span> 
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img className={styles.servicesImage} src={ServicesFourth}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3 className={styles.resizeTitle}>Harmonização e rejuvenescimento facial</h3>
                <ul>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Botox</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Preenchimentos</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Fios de pdo e estimuladores e colágeno</span> 
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img className={styles.servicesImage} src={ServicesFifth}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Sobrancelhas</h3>
                <ul>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Design de sobrancelhas</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Aplicação de henna e tintura</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Depilação com fio egípcio</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Brow lamination</span> 
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img className={styles.servicesImage} src={ServicesSixth}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Cílios</h3>
                <ul>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Alongamento de cílios</span> 
                  </li>
                  <li>
                    <Circle className={styles.dots}/>
                    <span>Lash Lifting</span> 
                  </li>
                </ul>
              </div>
              <a href="https://wa.me/554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>
            
          </Slider>
        </div> 
    </main>
  )
}