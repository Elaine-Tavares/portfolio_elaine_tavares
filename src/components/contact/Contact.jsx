import { useState } from "react";
import api from "../../../services/api";
import { Trans, useTranslation } from "react-i18next";

import styles from "./Contact.module.css"

export default function Contact() {
  const { t } = useTranslation(); //t() → Tradução para textos simples (string pura)

  //Estados dos inputs
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[message, setMessage] = useState("")

  //Estados das mensagens ao usuário
  const[msgSuccess, setMsgSuccess] = useState('');
  const[msgError, setMsgError] = useState('');

  //Função para enviar o formulário
  async function handleSubmit(e) {
    e.preventDefault();//Evita reload da página
    // console.log(`Nome: ${name}, Email: ${email}, Mensage: ${message}`);  
    try {
       //Requisição POST para API
       const response = await api.post('/form.php', {
          name,
          email,
          message
        }, /*  
        {
        headers: {
         "Content-Type": "application/json"
       }}*/
       );
        
        //Se sucesso no envio
        if (response.data.success) { 

          //exibe a mensagem de sucesso
          setMsgSuccess(t("form.success"))

          //limpa os inputs
          setName("")
          setEmail("")
          setMessage("")

          // apaga a mensagem de sucesso após 3s
          setTimeout(() => {
          setMsgSuccess("") 
          }, 3000);
          return;
        
          //se inputs vazios
        } else if (response.data.empty_input) {

           //exibe a mensagem de erro
          setMsgError(t("form.empty_input"))

          // apaga a mensagem de erro após 3s
          setTimeout(() => {
          setMsgError("") 
        }, 3000);
          return;

        //se e-mail inválido
      } else if (response.data.invalid_email){

         //exibe a mensagem de erro
          setMsgError(t("form.invalid_email"))

          // apaga a mensagem de erro após 3s
          setTimeout(() => {
          setMsgError("") 
        }, 3000);
          return;
      }
     
      //erro de conexão com a API
    } catch (error) {
      
      // console.log("ERRO DE CONEXÃO", error.response?.data);
      {/* Erro traduzido */}
      setMsgError(t("form.axios_error"));

      // apaga a mensagem de erro após 3s
      setTimeout(() => {
        setMsgError("") 
      }, 3000);
      return;
    }
  }

  return (
    <section id="contact" className={styles.session_contact}>
      
      {/* Título traduzido */}
      <h2>{t("form.title")}</h2>

      {/* Subtítulo traduzido */}
      <h3>{t("form.text")}</h3>
      <form onSubmit={handleSubmit}>

        {/* Mensagens ao usuário */}
        <div className={styles.msgs_to_user}>
          {msgSuccess && <p className={`${styles.success} animate__animated animate__rubberBand`}>{msgSuccess}</p>}
              
          {msgError && <p className={`${styles.error} animate__animated animate__rubberBand`}>{msgError}</p>}
        </div>

        {/* Campo nome */}
        <input
          type="text"
          name="nome"
          placeholder={t("form.name")}
          value={name}
          onChange={(e)=> setName(e.target.value)}   
        />

        {/* Campo email */}
        <input
          type="text"
          name="email"
          placeholder={t("form.email")}
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />

        {/* Campo mensagem */}
        <textarea
          name="mensagem"
          placeholder={t("form.message")}
          rows="5"
          value={message}
          onChange={(e)=> setMessage(e.target.value)} 
        />

        {/* Botão enviar */}
        <button 
          type="submit" 
          className={styles.btn_form}>
            
          {/* Texto do botão traduzido */}
          {t("form.send")} 
        </button>
      </form>
    </section>
  );
}