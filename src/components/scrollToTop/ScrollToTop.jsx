import { useEffect, useState } from "react";
import { BiSolidToTop } from "react-icons/bi";

export default function ScrollToTop() {

  // Controla se o botão deve aparecer ou não
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {

    // Seleciona o footer pelo id
    const footer = document.getElementById("footer");

    // Se não existir footer, interrompe
    if (!footer) return;

    // Observer detecta quando o footer entra na tela
    const observer = new IntersectionObserver(
      (entries) => {

        // Pega o primeiro elemento observado
        const entry = entries[0];

        // Mostra botão quando footer estiver visível
        setShowButton(entry.isIntersecting);
      },
      {
        // Define quanto do footer precisa aparecer
        threshold: 0.2
      }
    );

    // Começa a observar o footer
    observer.observe(footer);

    // Remove observer ao desmontar componente
    return () => observer.disconnect();

  }, []);

  // Função que faz scroll suave até o topo
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  // Não renderiza se o botão não deve aparecer
  if (!showButton) return null;

  return (
    <button onClick={scrollTop} className="scrollButton">
      <BiSolidToTop/>
    </button>
  );
}