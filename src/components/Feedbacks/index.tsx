import styles from "../Feedbacks/styles.module.scss"
import WaterMark from "../../assets/images/watermark.svg"
import FeedbackBoxFirst from "../../assets/images/FeedbackBox1.png"
import FeedbackBoxSecond from "../../assets/images/FeedbackBox2.svg"
import FeedbackBoxThird from "../../assets/images/FeedbackBox3.svg"
import FeedbackBoxFourth from "../../assets/images/FeedbackBox4.svg"
import FeedbackBoxFifth from "../../assets/images/FeedbackBox5.svg"
import FeedbackBoxSixth from "../../assets/images/FeedbackBox6.svg"
import { WhatsappLogo } from "phosphor-react"

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
          <a href="https://wa.me/554199491851" target="_blank" className={styles.whatsappButton}>
            <span>Agende seu horário</span>
            <WhatsappLogo width={20} height={20}/>
          </a>
      </div>
      
    </main>
  )
}