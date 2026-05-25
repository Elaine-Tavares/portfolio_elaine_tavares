import { Trans, useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import takingNotes from "../../assets/images/taking_notes.json";

import styles from './About.module.css'

export default function About() {
  const { t } = useTranslation(); //t() → Tradução para textos simples (string pura)

  return (
     <section id='about' className={styles.about_session}>
      
      {/* Título traduzido */}
      <h2>{t("about.title")}</h2>
      <div className={styles.about_animation}>
          <Lottie animationData={takingNotes} loop={true} style={{ width: 200, height: 200, }}/>
        </div>
         
      <div className={styles.about_session_container}>
        <div className={styles.texto_apresentacao}>
          <p>
            {/*<Trans /> → Tradução para textos com HTML ou componentes React e palavras em negrito */}
            <Trans 
              i18nKey="about.paragraph1"
              components={{  
                1: <strong className={styles.highlight}  />,
                2: <strong className={styles.highlight} />,
                3: <strong className={styles.highlight} />
              }}
            />
          </p>
          <br />
          <p>
            {/*<Trans /> → Tradução para textos com HTML ou componentes React e palavras em negrito */}
            <Trans
              i18nKey="about.paragraph2"
              components={{
                1: <strong className={styles.highlight} />,
                2: <strong className={styles.highlight} />,
                3: <strong className={styles.highlight} />,
                4: <strong className={styles.highlight} />
              }}
            />
          </p>
          <br />
          <p>
            {/*<Trans /> → Tradução para textos com HTML ou componentes React e palavras em negrito */}
            <Trans
              i18nKey="about.paragraph3"
              components={{
                1: <strong className={styles.highlight} />,
                2: <strong className={styles.highlight} />,
                3: <strong className={styles.highlight} />
              }}
            />
          </p>
          <br />
          <p>
             {/* Parágrafo traduzido */}
           <Trans
              i18nKey="about.paragraph4"
              components={{
                1: <strong className={styles.highlight} />,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  )
}
