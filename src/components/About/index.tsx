
import styles from "../About/styles.module.scss"
import WaterMark from "../../assets/images/watermark.svg"
import AboutFirst from "../../assets/images/about1.svg"
import AboutSecond from "../../assets/images/about2.svg"
import AboutThird from "../../assets/images/about3.svg"
import { WhatsappLogo } from "phosphor-react"

export default function About() {
  return (
    <main className={styles.aboutContainer} id="sobre">  
      <div className={styles.waterMarkAbout}>
        <img src={WaterMark} alt="Marca D'agua" width={55} height={55} />
        <h2>Sobre</h2>
      </div>
      <div className={styles.aboutText}>
        <h3>Sobre o NOA</h3>
        <p>NOA Beauty, um lugar aconchegante para quem busca realçar a sua beleza e relaxar. Ideal para mulheres que buscam excelência e exclusividade. Nossa equipe conta com profissionais extremamente capacitados para cuidar de você.</p>
      </div>
      <div className={styles.aboutGalery}>
          <img src={AboutFirst}  alt="NOA" />
          <img src={AboutSecond} className={styles.positioningTheCentralImage} alt="NOA" />
          <img src={AboutThird}  alt="NOA" />
      </div>
      <div className={styles.socialButtons}>
          <a href="https://wa.me/554199491851" target="_blank" className={styles.whatsappButton}>
            <span>Agende seu horário</span>
            <WhatsappLogo width={20} height={20}/>
          </a>  
      </div>
    </main>
    
  )
}