import { useState, useEffect } from 'react';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { FiSun, FiMoon } from 'react-icons/fi';
import './../../i18n' 

import styles from './Header.module.css';

export default function Header({theme, currentTheme}) {
  const { t } = useTranslation();

  // Estado do menu mobile (aberto/fechado)
  const [menuOpen, setMenuOpen] = useState(false);

  // Função que alterna o menu mobile
  function toggleMenu(){
    setMenuOpen(!menuOpen)
  }

  // Função que fecha o menu
  function closeMenu(){
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
          aria-label="Menu"
        >
          <span></span> 
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul className={`${styles.menu} ${menuOpen ? styles.show_menu : ""}`}>
          <li><a href="#main" onClick={closeMenu}>{t("navbar.home")}</a></li>
          <li><a href="#projects" onClick={closeMenu}>{t("navbar.projects")}</a></li>
          <li><a href="#skills" onClick={closeMenu}>{t("navbar.skills")}</a></li>
          <li><a href="#about" onClick={closeMenu}>{t("navbar.about")}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t("navbar.contact")}</a></li>

          <div className={styles.nav_buttons}>
            <div className={styles.languages}>
              <img onClick={() => { i18n.changeLanguage("pt"); closeMenu(); }} src="/flag_brazil.webp" alt="Bandeira do Brasil" aria-label="Português" loading="lazy" />
              <img onClick={() => { i18n.changeLanguage("en"); closeMenu(); }} src="/flag_usa.webp" alt="Bandeira dos USA" aria-label="English" loading="lazy" />       
            </div>

            <button className={styles.btn_theme}  
              onClick={() => {
                theme();
                closeMenu();
              }} 
              aria-label={currentTheme === "dark" ? "Ativar modo claro" : "Ativar modo escuro"}
            >
              {currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>  
          </div> 
        </ul>
        
        {menuOpen && (
          <div 
            className={styles.overlay} 
            onClick={closeMenu}>
          </div>
        )}
      </nav> 
  )
}
