import axios from "axios";

const modo = "producao";
let api = null;

if (modo === "producao") {
  api = axios.create({baseURL: "https://elainetavaresweb.com/"});
 
} else if (modo === "local") {
  api = axios.create({ baseURL: "https://localhost/portfolioelainetavares2026"});
}

export default api;