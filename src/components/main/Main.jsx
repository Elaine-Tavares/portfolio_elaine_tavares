import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import minhaFoto from './../../assets/images/elaine.webp'
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './Main.module.css'
import { useEffect } from "react";

export default function Main() {
    useEffect(() => {
            AOS.init({
              duration: 1000, // duração da animação (em ms)
              once: false, // se a animação deve acontecer só uma vez
            });
        }, []);

  const { t } = useTranslation();//t() → Tradução para textos simples (string pura)
  
  return (
      <section id='main' className={styles.main_session}>
          <div className={styles.main_session_text} data-aos="fade-up">
            <div className={styles.text}>
              <div className={styles.container_div_h3}>

                {/*Saudação traduzida*/}
                <h3>{t("hero.greeting")}</h3>           
                <h3>Elaine Tavares.</h3>
              </div>
              <div className={styles.container_div_h1}>

                {/*Título traduzido*/}
                <h1>{t("hero.title1")}</h1>
                <h2>{t("hero.title2")}</h2>
              </div> 

              {/* Redes sociais */}
            <div className={styles.main_session_social}>

              {/* Linkedin */}
              <a href="https://www.linkedin.com/in/elainetavaresweb/" target="_blank" rel="noopener noreferrer"><FaLinkedin className={styles.linkedin}/></a>

              {/* Instagram */}
              <a href="https://www.instagram.com/elainetavares2026/" target="_blank" rel="noopener noreferrer"><FaInstagramSquare className={styles.instagram}/></a>

              {/* GitHub */}
              <a href="https://github.com/Elaine-Tavares" target="_blank" rel="noopener noreferrer"><FaGithub className={styles.github}/></a>

              {/* Whats */}
              <a href="https://wa.link/307ehj" target="_blank" rel="noopener noreferrer"><FaWhatsappSquare className={styles.whats}/></a>
            </div> 

             {/* Botões do currículo */}
            <div className={styles.main_session_cv}>

              {/* Visualizar currículo */}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>{t("buttons.cv")}</a>

              {/* Baixar currículo */}
              <a href="/resume.pdf" download className={styles.button}>{t("buttons.cv2")}</a>
            </div>
           </div>   
          </div>

          {/* Container com Imagem + animação */}
          <div className={styles.main_session_img} data-aos="fade-up">

           {/* SVG animado*/}
           <svg
            className={styles.bg_svg}
            viewBox="0 0 800 600"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
           >
            <g
              fill="var(--svg)"
              fontFamily="monospace"
              fontSize="30"
              fontWeight="400"
            >

              {/* Textos animados */}
              {/* Simulam código passando na tela */} 
              <text x="60" y="0">
                MySQL → SELECT *
                <animate attributeName="y" from="0" to="2000" dur="3s" repeatCount="indefinite"/>
              </text>

              <text x="220" y="0">
                React → useState()
                <animate attributeName="y" from="0" to="2000" dur="3s" repeatCount="indefinite"/>
              </text>

              <text x="100" y="0">
                JavaScript → console.log()
                <animate attributeName="y" from="0" to="2000" dur="4s" repeatCount="indefinite"/>
              </text>

              <text x="450" y="0">
                HTML → &lt;section/&gt;
                <animate attributeName="y" from="0" to="2000" dur="5s" repeatCount="indefinite"/>
              </text>

              <text x="380" y="0">
                CSS → display: flex;
                <animate attributeName="y" from="0" to="2000" dur="6s" repeatCount="indefinite"/>
              </text>

              <text x="60" y="0">
                PHP → echo "Hello";
                <animate attributeName="y" from="0" to="2000" dur="7s" repeatCount="indefinite"/>
              </text>

              <text x="60" y="0">
                React → useEffect()
                <animate attributeName="y" from="-0" to="2000" dur="8s" repeatCount="indefinite"/>
              </text>

              <text x="380" y="0">
                GitHub → git commit
                <animate attributeName="y" from="0" to="2000" dur="9s" repeatCount="indefinite"/>
              </text>

              <text x="450" y="0">
                Vercel → deploy
                <animate attributeName="y" from="0" to="2000" dur="10s" repeatCount="indefinite"/>
              </text>

               <text x="100" y="0">
                React → useState()
                <animate attributeName="y" from="0" to="2000" dur="11s" repeatCount="indefinite"/>
              </text>

               <text x="220" y="0">
                CSS → display: flex;
                <animate attributeName="y" from="0" to="2000" dur="12s" repeatCount="indefinite"/>
              </text>

              <text x="60" y="0">
                Vercel → deploy
                <animate attributeName="y" from="0" to="2000" dur="13s" repeatCount="indefinite"/>
              </text>
             </g>
            </svg>

             {/* Foto */}
            <img src={minhaFoto} alt="Rosto de Elaine Tavares, mulher morena com olhos e cabelos castanhos."/>
            
            {/* CTA WhatsApp */}
            <div className={styles.whatsapp_cta_container}>
              <a 
                href="https://wa.link/307ehj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsapp_cta}
              >
                <FaWhatsappSquare className={styles.cta_icon} />
                <span>{t("hero.cta_whatsapp") || "Vamos conversar?"}</span>
              </a>
            </div>

          </div>
          
      </section>
  )
}
