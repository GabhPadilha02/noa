import styles from "../Footer/styles.module.scss"
import Logo from "../../assets/images/logo.png"
import { InstagramLogo, MapPin, WhatsappLogo } from "phosphor-react"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={Logo} alt="" />
      
        <div className={styles.footerLinks}>
          <a href="https://goo.gl/maps/V4nWbEmNHtFravLc6" target="_blank" className={styles.links}>
            <MapPin className={styles.iconFooter}/>
            <p>R. Isidoro Caetano, 190 - Pioneiros, Balneário Camboriú - SC, 88331-005</p>
          </a>

          <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.links}>
            <InstagramLogo className={styles.iconFooter}/>
            <p>@noa.beauty_bc</p>
          </a>

          <a href="https://wa.me/554199491851" target="_blank" className={styles.links}>
            <WhatsappLogo className={styles.iconFooter}/>
            <p>+55 41 9949-1851</p>
          </a>  
        </div>
    </footer>
  )
}