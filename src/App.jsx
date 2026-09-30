import { useState, useEffect, Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from "./components/header/Header";
import Main from "./components/main/Main";

const Projects = lazy(() => import("./components/projects/Projects"));
const Skills = lazy(() => import("./components/skills/Skills"));
const About = lazy(() => import("./components/about/About"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Footer = lazy(() => import("./components/footer/Footer"));
const ScrollToTop = lazy(() => import("./components/scrollToTop/ScrollToTop"));

function App() {
  const { t, i18n } = useTranslation();
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Melhora performance ao animar apenas uma vez
    });
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
// Atualiza título da página conforme idioma
useEffect(() => {
  document.title = t("meta.title");
}, [i18n.language]);

  return (
    <>
      <Header 
        currentTheme={theme} 
        theme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      <main className="container">
        <Main/>
        <Suspense fallback={<div style={{ height: '400px' }} />}>
          <Projects/>
          <Skills/>
          <About/>
          <Contact/>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer/>
        <ScrollToTop />
      </Suspense>
    </>
  )
}

export default App;
