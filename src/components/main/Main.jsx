import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import minhaFoto from './../../assets/images/elaine.webp'
import { useTranslation } from "react-i18next";

import styles from './Main.module.css'

export default function Main() {
  const { t } = useTranslation();//t() → Tradução para textos simples (string pura)
  
  return (
      <section id='main' className={styles.main_session}>
          <div className={styles.main_session_text}>
            <div className={styles.text}>
              <div className={styles.container_div_h3}>

                {/*Saudação traduzida*/}
                <h3>{t("hero.greeting")}</h3>           
                <h3>Elaine Tavares.</h3>
              </div>
              <div className={styles.container_div_h1}>

                {/*Título traduzido*/}
                <h1>{t("hero.title1")}</h1>
                <h1>{t("hero.title2")}</h1>
              </div> 
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
              <a href="/curriculo_elaine_tavares.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>{t("buttons.cv")}</a>

              {/* Baixar currículo */}
              <a href="/curriculo_elaine_tavares.pdf" download className={styles.button}>{t("buttons.cv2")}</a>
            </div>
          </div>

          {/* Cntainer com Imagem + animação */}
          <div className={styles.main_session_img}>

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
              <text x="60" y="-200">
                MySQL → SELECT *
                <animate attributeName="y" from="-300" to="650" dur="4s" repeatCount="indefinite"/>
              </text>

              <text x="60" y="-200">
                React → useState()
                <animate attributeName="y" from="-200" to="650" dur="6s" repeatCount="indefinite"/>
              </text>

              <text x="220" y="-350">
                JavaScript → console.log()
                <animate attributeName="y" from="-350" to="650" dur="6s" repeatCount="indefinite"/>
              </text>

              <text x="450" y="-250">
                HTML → &lt;section/&gt;
                <animate attributeName="y" from="-250" to="650" dur="3s" repeatCount="indefinite"/>
              </text>

              <text x="100" y="-500">
                CSS → display: flex;
                <animate attributeName="y" from="-500" to="650" dur="5.5s" repeatCount="indefinite"/>
              </text>

              <text x="380" y="-450">
                PHP → echo "Hello";
                <animate attributeName="y" from="-450" to="650" dur="6.5s" repeatCount="indefinite"/>
              </text>

              <text x="450" y="-300">
                React → useEffect()
                <animate attributeName="y" from="-300" to="650" dur="8s" repeatCount="indefinite"/>
              </text>

              <text x="300" y="-600">
                GitHub → git commit
                <animate attributeName="y" from="-600" to="650" dur="4s" repeatCount="indefinite"/>
              </text>

              <text x="520" y="-700">
                Vercel → deploy
                <animate attributeName="y" from="-700" to="650" dur="7.5s" repeatCount="indefinite"/>
              </text>

               <text x="60" y="-200">
                React → useState()
                <animate attributeName="y" from="-200" to="650" dur="6s" repeatCount="indefinite"/>
              </text>

               <text x="100" y="-500">
                CSS → display: flex;
                <animate attributeName="y" from="-500" to="650" dur="5.5s" repeatCount="indefinite"/>
              </text>

              <text x="100" y="-500">
                Vercel → deploy
                <animate attributeName="y" from="-500" to="650" dur="4s" repeatCount="indefinite"/>
              </text>
             </g>
            </svg>

             {/* Foto */}
            <img src={minhaFoto} alt="Rosto de Elaine Tavares, mulher morena com olhos e cabelos castanhos."/>     
          </div>
      </section>
  )
}
