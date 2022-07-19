import styles from "../Feedbacks/styles.module.scss"
import WaterMark from "../../assets/images/watermark.png"
import FeedbackBoxFirst from "../../assets/images/FeedbackBox1.png"
import FeedbackBoxSecond from "../../assets/images/FeedbackBox2.png"
import FeedbackBoxThird from "../../assets/images/FeedbackBox3.png"
import FeedbackBoxFourth from "../../assets/images/FeedbackBox4.png"
import FeedbackBoxFifth from "../../assets/images/FeedbackBox5.png"
import FeedbackBoxSixth from "../../assets/images/FeedbackBox6.png"
import { InstagramLogo, WhatsappLogo } from "phosphor-react"

export default function Feedbacks() {
  return (
    <main className={styles.feedbacksContainer} id="feedbacks">
      <div className={styles.waterMarkFeedbacks}>
        <img src={WaterMark} alt="Marca D'agua" width={55} height={55} />
        <h2>Feedbacks</h2>
      </div>
      <div className={styles.alignFeedbacks}>
        <div className={styles.feedbacksDisplay}>

          <div className={styles.feedbacksItem}>
            <h3>Amanda,</h3>
            <p>Após a micropigmentação</p>
            <img src={FeedbackBoxFirst}  alt="Feedback" />
          </div>
          <div className={styles.feedbacksItem}>
            <h3>Stefany,</h3>
            <p>Após a micropigmentação</p>
            <img src={FeedbackBoxThird} alt="Feedback" />
          </div>
          <div className={styles.feedbacksItem}>
            <h3>Heloísa,</h3>
            <p>Após a Esmaltação em gel</p>
            <img src={FeedbackBoxFifth} alt="Feedback" />
          </div>
        </div>

        <div className={styles.feedbacksDisplay}>

          <div className={styles.feedbacksItem}>
            <h3>Brenda,</h3>
            <p>Após a manicure e alongamento de cílios</p>
            <img src={FeedbackBoxSecond}  alt="Feedback" />
          </div>
          
          <div className={styles.feedbacksItem}>
            <h3>Eliziane,</h3>
            <p>Após a micropigmentação</p>
            <img src={FeedbackBoxFourth}  alt="Feedback" />
          </div>
          
          <div className={styles.feedbacksItem}>
            <h3>Juliana,</h3>
            <p>Após a micropigmentação e unhas</p>
            <img src={FeedbackBoxSixth} alt="Feedback" />
          </div>
        </div>
      </div>
      <div className={styles.socialButtons}>
          <a href="https://web.whatsapp.com/send?phone=554199491851" target="_blank" className={styles.whatsappButton}>
            <span>Contacte-nos</span>
            <WhatsappLogo width={30} height={30}/>
          </a>
          <a href="https://www.instagram.com/noa.beauty_bc/" target="_blank" className={styles.whatsappButton}>
            <span>Siga-nos</span>
            <InstagramLogo width={30} height={30}/>
          </a>
      </div>
      
    </main>
  )
}