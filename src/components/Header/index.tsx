
import { InstagramLogo, WhatsappLogo } from "phosphor-react";
import Logo from "../../assets/images/logo.png"
import styles from "../Header/styles.module.scss"


export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src={Logo} alt="Logo"/>
      <nav className={styles.linksContainer}>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#diferenciais">Diferenciais</a>
        <a href="#feedbacks">Feedbacks</a>
        <a href="#encontre-nos">Encontre-nos</a>
        <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.whatsappButton}>
          <span>Contacte-nos</span>
          <WhatsappLogo width={20} height={20}/>
        </a>
        <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.whatsappButton}>
          <span>Siga-nos</span>
          <InstagramLogo width={20} height={20}/>
        </a>
      </nav>
    </header> 
  )
}