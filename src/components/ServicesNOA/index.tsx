import styles from "../ServicesNOA/styles.module.scss"
import WaterMark from "../../assets/images/watermark.png"
import Slider from "../Slider"
import { SwiperProps, SwiperSlide } from "swiper/react"

import ServicesFirst from "../../assets/images/services1.png"
import ServicesSecond from "../../assets/images/services2.png"
import ServicesThird from "../../assets/images/services3.png"
import ServicesFourth from "../../assets/images/services4.png"
import ServicesFifth from "../../assets/images/services5.png"
import ServicesSixth from "../../assets/images/services6.png"

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
              <img  src={ServicesFirst} width={501} height={582}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Unhas</h3>
                <ul>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Manicure e pedicure clássico</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Esmaltação em gel</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Blindagem</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Alongamento</span> 
                  </li>
                </ul>
              </div>
              <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>
            
            <SwiperSlide className={styles.swiperSlideServices}>
              <img  src={ServicesSecond} width={501} height={582}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3 className={styles.resizeTitle}>Remoção de micropigmentação e pigmentos indesejados</h3>
              </div>
              <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img  src={ServicesThird} width={501} height={582}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Micropigmentação</h3>
                <ul>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Técnicas internacional e artística para micropigmentação</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>O que há de mais moderno e sofisticado no mercado</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Técnica de pálpebras, lábios e sobrancelhas</span> 
                  </li>
                </ul>
              </div>
              <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img  src={ServicesFourth} width={501} height={582}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3 className={styles.resizeTitle}>Harmonização e rejuvenescimento facial</h3>
                <ul>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Botox</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Preenchimentos</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Fios de pdo e estimuladores e colágeno</span> 
                  </li>
                </ul>
              </div>
              <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img  src={ServicesFifth} width={501} height={582}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Sobrancelhas</h3>
                <ul>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Design de sobrancelhas</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Aplicação de henna e tintura</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Depilação com fio egípcio</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Brow lamination</span> 
                  </li>
                </ul>
              </div>
              <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>

            <SwiperSlide className={styles.swiperSlideServices}>
              <img  src={ServicesSixth} width={501} height={582}  alt="Slider-Services"/>
              <div className={styles.servicesInfo}>
                <h3>Cílios</h3>
                <ul>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Alongamento de cílios</span> 
                  </li>
                  <li>
                    <Circle width={12} height={12}/>
                    <span>Lash Lifting</span> 
                  </li>
                </ul>
              </div>
              <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.scheduleNow}>Agende agora!</a>
            </SwiperSlide>
            
          </Slider>
        </div> 
    </main>
  )
}