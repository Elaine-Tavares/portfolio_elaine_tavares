import axios from "axios";

// Define o ambiente atual da aplicação
// "producao" = servidor online
// "local" = servidor local (desenvolvimento)
const modo = "producao";

let api = null;

// Configuração da API para produção
if (modo === "producao") {
  api = axios.create({baseURL: "https://elainetavaresweb.com/"});// URL do backend online

// Configuração da API para ambiente local
} else if (modo === "local") {
  api = axios.create({ baseURL: "https://localhost/portfolioelainetavares2026"});// URL do backend local
}

// Exporta a instância configurada do axios
export default api;