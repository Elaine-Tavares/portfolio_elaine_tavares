import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Spinner from "./components/spinner/Spinner"
import Footer from "./components/footer/Footer"
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


function App() {
  const [loading, setLoading] = useState(true);

  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState(() => {
  return localStorage.getItem("theme") || "dark";
});

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.title = t("meta.title");
  }, [i18n.language]);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // tempo do spinner

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) return <Spinner />;

  return (
    <>
      <Header theme={() => setTheme(theme === "dark" ? "light" : "dark")}/>
      <main className="container">
        <Main/>
        <Projects/>
        <Skills/>
        <About/>
        <Contact/>
      </main>
      <Footer/>
    </>
   
  
  )
}

export default App
