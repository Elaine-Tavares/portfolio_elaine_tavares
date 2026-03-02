import portfolio from './../../assets/images/projeto_portfolio.webp'
import cadastro_login_usuarios from './../../assets/images/projeto_cadastro_login_usuarios.webp'
import multistepform from './../../assets/images/projeto_multistepform.webp'

import { Trans, useTranslation } from "react-i18next";

import styles from './Projects.module.css'

export default function Projects() {
  const { t } = useTranslation();//t() → Tradução para textos simples (string pura)

  // Lista de projetos
  // Facilita adicionar novos projetos no futuro
  const listaProjetos = [
    { 
      imagem: `${cadastro_login_usuarios}`,  
      in_development: "projects.project1.in_development",
      nameKey: "projects.project1.name",
      descKey: "projects.project1.description",
      tecnologias: "projects.project1.technologies",
      deploy: '',
      github: '',
      },

      {
      imagem: `${multistepform}`,
      nameKey: "projects.project3.name",
      descKey: "projects.project3.description",
      tecnologias: "projects.project3.technologies",
      deploy: 'https://formulariomultistep-omega.vercel.app/',
      github: 'https://github.com/Elaine-Tavares/formulario_multistep.git',
      },

    {
      imagem: `${portfolio}`,
      nameKey: "projects.project2.name",
      descKey: "projects.project2.description",
      tecnologias: "projects.project2.technologies",
      deploy: 'https://elainetavaresweb.com/',
      github: 'https://github.com/Elaine-Tavares/portfolio_elaine_tavares.git',
      }   
  ];

  return (
    <section id='projects' className={styles.projects_session}>

        {/*Título traduzido*/}
        <h2><h4>{t("projects.title")}</h4></h2>

        {/* Container dos projetos */}
        <div className={styles.projects_container}>
          {listaProjetos.map((projeto, index) =>(

           //Card do projeto 
           <div className={styles.project} key={index}>
             {projeto.in_development && <div className={styles.em_desenvolvimento}>{t(projeto.in_development)}</div>} 

             {/*Nome do projeto traduzido */}    
             <h4>{t(projeto.nameKey)}</h4>

             <img src={projeto.imagem} alt="Imagem do projeto" />

             {/*<Trans /> → Tradução para textos com HTML ou componentes React e palavra em negrito */}
             <p className={styles.descricao}><Trans 
                           i18nKey={t(projeto.descKey)}
                           components={{
                             1: <strong className={styles.highlight}  />,
                           }}
                         /></p>

              {/*<Trans /> → Tradução para textos com HTML ou componentes React e palavras em negrito */}
             <p className={styles.tecnologias}><Trans
                           i18nKey={t(projeto.tecnologias)}
                           components={{
                             1: <strong className={styles.highlight}  />,
                           }}
                         /></p> 
                         
            {/*Botões do projeto */}            
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
