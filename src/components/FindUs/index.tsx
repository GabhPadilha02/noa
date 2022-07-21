import styles from "../FindUs/styles.module.scss"
import WaterMark from "../../assets/images/watermark.svg"
import Map from "../../assets/images/map.svg"

export default function FindUs() {
  return (
    <main id="encontre-nos" className={styles.findUsContainer}>
      <div className={styles.waterMarkFindUs}>
        <img src={WaterMark} alt="Marca D'agua" width={55} height={55} />
        <h2>Encontre-nos</h2>
      </div>
      <a href="https://goo.gl/maps/FT3ZAiRdxrQQjys56" target="_blank">
        <img className={styles.map} src={Map} alt="Mapa" />
      </a>  
    </main>
  )
}