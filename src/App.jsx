import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Spinner from "./components/spinner/Spinner"
import Footer from "./components/footer/Footer"
import ScrollToTop from "./components/scrollToTop/ScrollToTop"
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


function App() {
   // Controla o loading inicial
  const [loading, setLoading] = useState(true);

  // Hook de tradução
  const { t, i18n } = useTranslation();

  // Tema salvo no navegador (dark como padrão)
  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
});

  // Aplica tema e salva no localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Atualiza título da página conforme idioma
  useEffect(() => {
    document.title = t("meta.title");
  }, [i18n.language]);

  // Mostra spinner por 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // tempo do spinner

    // Limpa o timer ao desmontar
    return () => clearTimeout(timer);
  }, []);
  
  // Enquanto carrega mostra spinner
  if (loading) return <Spinner />;

  return (
    <>
      {/* Header recebe função para alternar tema */}
      <Header theme={() => setTheme(theme === "dark" ? "light" : "dark")}/>

      <main className="container">
        <Main/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
      </main>

      <Footer/>
      {/* Botão aparece quando chega no footer */}
      <ScrollToTop />
    </>
   
  
  )
}

export default App
