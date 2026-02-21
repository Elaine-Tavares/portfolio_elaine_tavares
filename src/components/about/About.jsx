import avatar from './../../assets/images/avatar_vermelho.webp'
import { Trans, useTranslation } from "react-i18next";
import styles from './About.module.css'

export default function About() {
  const { t } = useTranslation();

  return (
     <section id='about' className={styles.about_session}>
      <h2>{t("about.title")}</h2>

      <div className={styles.about_session_container}>
        <img src={avatar} alt="Avatar Elaine" />

        <div className={styles.texto_apresentacao}>

          <p>
            <Trans
              i18nKey="about.paragraph1"
              components={{
                1: <strong className={styles.highlight}  />,
                2: <strong className={styles.highlight} />,
                3: <strong className={styles.highlight} />
              }}
            />
          </p><br />

          <p>
            <Trans
              i18nKey="about.paragraph2"
              components={{
                1: <strong className={styles.highlight} />,
                2: <strong className={styles.highlight} />,
                3: <strong className={styles.highlight} />,
                4: <strong className={styles.highlight} />
              }}
            />
          </p> <br />

          <p>
            <Trans
              i18nKey="about.paragraph3"
              components={{
                1: <strong className={styles.highlight} />,
                2: <strong className={styles.highlight} />,
                3: <strong className={styles.highlight} />
              }}
            />
          </p>

          <p>
            <Trans
              i18nKey="about.paragraph4" />
          </p>

        </div>
      </div>
    </section>
  )
}
