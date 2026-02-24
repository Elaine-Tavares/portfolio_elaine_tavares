import { useState } from "react";
import api from "../../../services/api";
import { Trans, useTranslation } from "react-i18next";

import styles from "./Contact.module.css"

export default function Contact() {
  const { t } = useTranslation(); //t() → Tradução para textos simples (string pura)
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[message, setMessage] = useState("")
  const[msgSuccess, setMsgSuccess] = useState('');
  const[msgError, setMsgError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(`Nome: ${name}, Email: ${email}, Mensage: ${message}`);  
    try {
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
        
        if (response.data.success) { 
          //exibe a mensagem de sucesso
          setMsgSuccess(t("form.success"))

          //limpa os campos
          setName("")
          setEmail("")
          setMessage("")

          // apaga a mensagem de sucesso após 3s
          setTimeout(() => {
          setMsgSuccess("") 
          }, 3000);
          return;
        
        } else if (response.data.empty_input) {
           //exibe a mensagem de erro
          setMsgError(t("form.empty_input"))

          // apaga a mensagem de erro após 3s
          setTimeout(() => {
          setMsgError("") 
        }, 3000);
          return;

      } else if (response.data.invalid_email){
         //exibe a mensagem de erro
          setMsgError(t("form.invalid_email"))

          // apaga a mensagem de erro após 3s
          setTimeout(() => {
          setMsgError("") 
        }, 3000);
          return;
      }
     
    } catch (error) {
      // console.log("ERRO DE CONEXÃO", error.response?.data);
       {/*<Trans /> → Tradução para textos com HTML ou componentes React */}
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
      <h2>{t("form.title")}</h2>
      <h3>{t("form.text")}</h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.msgs_to_user}>
          {msgSuccess && <p className={`${styles.success} animate__animated animate__rubberBand`}>{msgSuccess}</p>}
              
          {msgError && <p className={`${styles.error} animate__animated animate__rubberBand`}>{msgError}</p>}
        </div>
        <input
          type="text"
          name="nome"
          placeholder={t("form.name")}
          value={name}
          onChange={(e)=> setName(e.target.value)}   
        />

        <input
          type="text"
          name="email"
          placeholder={t("form.email")}
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
        />

        <textarea
          name="mensagem"
          placeholder={t("form.message")}
          rows="5"
          value={message}
          onChange={(e)=> setMessage(e.target.value)} 
        />
        <button type="submit" className={styles.btn_form}><Trans i18nKey="form.send"/></button>
      </form>
    </section>
  );
}