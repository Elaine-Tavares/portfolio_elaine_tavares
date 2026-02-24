import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useTranslation();//t() → Tradução para textos simples (string pura)
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>   
        <div className={styles.main_session_social}>
            <a href="https://www.linkedin.com/in/elainetavaresweb/" target='_blank' rel="noopener noreferrer"><FaLinkedin className={styles.linkedin}/></a>
            <a href="https://www.instagram.com/elainetavares2026/" target='_blank' rel="noopener noreferrer"><FaInstagramSquare className={styles.instagram}/></a>
            <a href="https://github.com/Elaine-Tavares" target='_blank' rel="noopener noreferrer"><FaGithub className={styles.github}/></a>
            <a href="https://wa.link/307ehj" target='_blank' rel="noopener noreferrer"><FaWhatsappSquare className={styles.whats}/></a>
        </div> 
        <p className={styles.copy}>
          {t("footer.developedBy")}<br/> <strong>Elaine Tavares</strong> © {year}
        </p>
      </div>
      <a href="#main" className="logo">
        <div className="logo_container_capivara">
          <span>Elaine</span>
          <img src='/logo.png' alt="Capivara na frente de um notebook" />
        </div>
        <span className="tavares">TavaresWeb</span>
      </a>
    </footer>
  );
}
