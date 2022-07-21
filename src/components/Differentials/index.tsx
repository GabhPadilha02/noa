import styles from "../Differentials/styles.module.scss"

import WaterMark from "../../assets/images/watermark.svg"
import DifferentialsFirst from "../../assets/images/differentials1.png"
import DifferentialsSecond from "../../assets/images/differentials2.png"
import { InstagramLogo, WhatsappLogo } from "phosphor-react"

export default function Differentials() {
  return (
    <main className={styles.differentialsContainer} id="diferenciais">
      <div className={styles.waterMarkDifferentials}>
        <img src={WaterMark} alt="Marca D'agua" width={55} height={55} />
        <h2>Diferenciais</h2>
      </div>
      <div className={styles.alignDifferentialsImages}>
        <div className={styles.differentialImages}>
          <h3>Cadeira de massagem</h3>
          <img src={DifferentialsFirst}  alt="Cadeira de Massagem" />
        </div>
        <div className={styles.dividingLine}></div>
        <div className={styles.differentialImages}>
          <h3>Cappuccino especial, cortesia para as clientes</h3>
          <img src={DifferentialsSecond}  alt="Cappuccino especial" />
        </div>
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