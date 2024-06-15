import compa from '../assets/chatgpt.jpg'
import youtube from '../assets/youtube.svg'
import github from '../assets/github.svg'
import whatsapp from '../assets/whatsappLogo3.png'
import styles from '../style/redes.module.css'

const Redes = () => {
    return (
        <article className={styles.redes}>
            <a target='_blank' className={`${styles.compa} hover:animate-pulse animate-once`} href="https://chatgpt.com/"><img src={compa} alt="logo de chatGPT" /></a>
            <a target='_blank' className={`${styles.github} hover:animate-pulse animate-once`} href="https://github.com/Dantesssss/tp2.git"><img src={github} alt="logo de github" /></a>
            <a target='_blank' className={`${styles.whatsapp} hover:animate-pulse animate-once`} href="https://chat.whatsapp.com/Kbn5XASwNSVAZxKrY2TJO4"><img src={whatsapp} alt="logo de youtube" /></a>
            <a target='_blank' className={`${styles.youtube} hover:animate-pulse animate-once`} href="https://www.youtube.com/watch?v=xvFZjo5PgG0"><img src={youtube} alt="logo de youtube" /></a>
        </article>
    )
}

export default Redes;

