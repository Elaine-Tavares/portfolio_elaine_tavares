import { useState, useEffect } from 'react';
import i18n from "i18next";
import { Trans, useTranslation } from "react-i18next";
import './../../i18n' 

import styles from './Header.module.css';

export default function Header({theme}) {
  /*Lógica no menu mobile:
  - function toggleMenu alterna o estado do menu;
  - function closeMenu sempre seta o estado para menuOpen = false;
  - de acordo com a alteração do estado o estilo é controlado dando o comportamento de menu fechado(rigth: -100%) ou aberto(rigth: 0%).
  */
  const { t } = useTranslation();//t() → Tradução para textos simples (string pura)

//   function LanguageSwitcher() {
//     const { i18n } = useTranslation();
// }

  // Estado do menu mobile (aberto/fechado)
  const [menuOpen, setMenuOpen] = useState(false);

  // Função que alterna o menu mobile
  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  // Função que fecha o menu
  function closeMenu(e){
    setMenuOpen(false)
  }

  // trava scroll quando o menu estiver aberto
  useEffect(() => {
    if(menuOpen){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);
   
  return (
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logo_container_capivara}>
            <span>Elaine</span>
            <img src='/logo.png' alt="Capivara na frente de um notebook" />
          </div>
          <span className={styles.tavares}>TavaresWeb</span>
        </div>

        {/* Botão hamburger (mobile) */}
        <button 
          className={`${styles.hamburger} 
          ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          {/*spans para animação do hamburger*/}
          <span></span> 
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`${styles.menu} ${menuOpen ? styles.show_menu : ""}`}>

          {/* Links do menu */}    
          <a href="#main" onClick={closeMenu}><Trans i18nKey="navbar.home"/></a>  
          <a href="#projects" onClick={closeMenu}><Trans i18nKey="navbar.projects"/></a>  
          <a href="#skills" onClick={closeMenu}><Trans i18nKey="navbar.skills"/></a> 
          <a href="#about" onClick={closeMenu}><Trans i18nKey="navbar.about"/></a> 
          <a href="#contact" onClick={closeMenu}><Trans i18nKey="navbar.contact"/></a>   

          {/* Botões extras */}
          <div className={styles.nav_buttons}>

            {/* Troca de idioma */}
            <div className={styles.languages} onClick={closeMenu}>
              <img onClick={() => i18n.changeLanguage("pt")} src="/flag_brazil.webp" alt="Bandeira do Brasil" />
              <img onClick={() => i18n.changeLanguage("en")} src="/flag_usa.webp" alt="Bandeira dos USA" />       
            </div>

            {/* Botão de tema */}
            <button className={styles.btn_theme} onClick={theme}>{t("navbar.theme")}</button>  
          </div> 
        </ul>
        
        {/*overlay só aparece quando o menu estiver aberto*/}
        {menuOpen && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}>
          </div>
        )}
      </nav> 
  )
}
