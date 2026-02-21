import portfolio from './../../assets/images/projeto_portfolio.webp'
import cadastro_login_usuarios from './../../assets/images/projeto_cadastro_login_usuarios.webp'
import { Trans, useTranslation } from "react-i18next";

import styles from './Projects.module.css'

export default function Projects() {
  const { t } = useTranslation();

  const listaProjetos = [
    { 
      imagem: `${cadastro_login_usuarios}`,  
      em_desenvolvimento: "projects.project1.in_development",
      nameKey: "projects.project1.name",
      descKey: "projects.project1.description",
      tecnologias: "projects.project1.technologies",
      deploy: '',
      github: '',
      },
    {
      imagem: `${portfolio}`,
      nameKey: "projects.project2.name",
      descKey: "projects.project2.description",
      tecnologias: "projects.project2.technologies",
      deploy: 'https://elainetavaresweb.com/',
      github: '',
      }   
  ];

  return (
    <section id='projects' className={styles.projects_session}>
        <h2><h4><Trans i18nKey="projects.title"/></h4></h2>
        <div className={styles.projects_container}>
          {listaProjetos.map((projeto, index) =>(
           <div className={styles.project} key={index}>
             {projeto.em_desenvolvimento  && <div className={styles.em_desenvolvimento}>{t(projeto.em_desenvolvimento)}</div>}     
             <h4>{t(projeto.nameKey)}</h4>
             <img src={projeto.imagem} alt="Imagem do projeto" />
             <p className={styles.descricao}><Trans
                           i18nKey={t(projeto.descKey)}
                           components={{
                             1: <strong className={styles.highlight}  />,
                           }}
                         /></p>
             <p className={styles.tecnologias}><Trans
                           i18nKey={t(projeto.tecnologias)}
                           components={{
                             1: <strong className={styles.highlight}  />,
                           }}
                         /></p> 
            <div className={styles.buttons}>
              <a href={projeto.deploy} target='_blank' rel="noopener noreferrer">Deploy</a>
              <a href={projeto.github} target='_blank' rel="noopener noreferrer">GitHub</a>
            </div>    
          </div>
          ))
            
          }
           
 
        </div>
    </section>
  )
}
