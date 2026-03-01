import { TbBrandReact } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { useTranslation } from "react-i18next";

import styles from './Skills.module.css'

export default function Skills() {
  const { t } = useTranslation();//t() → Tradução para textos simples (string pura)

  return (
    <section id='skills' className={styles.skills_session}>

         {/* Título traduzido*/}
        <h2>{t("skills.title")}</h2>

        {/* Container das skills */}
        <div className={styles.skills_container}>
            <div className={styles.front}>
                <h3>Front-End</h3>
                <span><TbBrandReact className={styles.react}/> React</span>
                <span><IoLogoJavascript className={styles.js}/>JavaScript</span>
                <span><FaCss3Alt className={styles.css}/>CSS</span>
                <span><FaHtml5 className={styles.html}/>HTML</span>     
            </div>

            <div className={styles.back}>
                <h3>Back-End</h3>
                <span><SiPhp className={styles.php}/>PHP</span>
                <span><SiMysql className={styles.mysql}/>MySQL</span>      
            </div>

            <div className={styles.ferramentas}>
               <h3>{t("skills.tools")}</h3>
                <span><FaGithub className={styles.github}/>GitHub</span>
                <span><IoLogoVercel className={styles.vercel}/>Vercel</span>
            </div>            
        </div>       
    </section>
  )
}
