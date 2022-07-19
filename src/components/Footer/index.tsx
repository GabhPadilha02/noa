import styles from "../Footer/styles.module.scss"
import Logo from "../../assets/images/logo.png"
import { InstagramLogo, MapPin, WhatsappLogo } from "phosphor-react"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={Logo} alt="" />
      
        <div className={styles.footerLinks}>
          <a href="https://goo.gl/maps/V4nWbEmNHtFravLc6" target="_blank" className={styles.links}>
            <MapPin/>
            <p>R. Isidoro Caetano, 190 - Pioneiros, Balneário Camboriú - SC, 88331-005</p>
          </a>

          <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.links}>
            <InstagramLogo />
            <p>@noa.beauty_bc</p>
          </a>

          <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.links}>
            <WhatsappLogo />
            <p>+55 41 9949-1851</p>
          </a>  

        </div>
        
    </footer>
  )
}