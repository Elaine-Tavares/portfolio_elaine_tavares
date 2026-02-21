import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>   
        <div className={styles.main_session_social}>
            <a href="https://www.linkedin.com/in/elainetavaresweb/" target="blank"><FaLinkedin className={styles.linkedin}/></a>
            <a href="https://www.instagram.com/elainetavares2026/" target="blank"><FaInstagramSquare className={styles.instagram}/></a>
            <a href="https://github.com/Elaine-Tavares" target="blank"><FaGithub className={styles.github}/></a>
            <a href="https://wa.link/307ehj" target="blank"><FaWhatsappSquare className={styles.whats}/></a>
        </div> 
        <p className={styles.copy}>
          {t("footer.developedBy")}<br/> <strong>Elaine Tavares</strong> © {year}
        </p>
      </div>
    </footer>
  );
}
