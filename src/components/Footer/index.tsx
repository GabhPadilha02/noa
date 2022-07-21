import styles from "../Footer/styles.module.scss"
import Logo from "../../assets/images/logo.svg"
import { InstagramLogo, MapPin } from "phosphor-react"

export default function Footer() {
  return (
    <footer className={styles.container}>
      <img src={Logo} alt="Logo" />
      <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.instaButton}>
            <p>Nos acompanhe nas redes sociais</p>  
            <InstagramLogo className={styles.iconFooter} width={30} height={30}/>
      </a>
      
        <div className={styles.footerLinks}>
          <a href="https://goo.gl/maps/V4nWbEmNHtFravLc6" target="_blank" className={styles.links}>
            <MapPin className={styles.iconFooter}/>
            <p>R. Isidoro Caetano, 190 - Pioneiros, Balneário Camboriú - SC, 88331-005</p>
          </a> 
        </div>
        
    </footer>
  )
}