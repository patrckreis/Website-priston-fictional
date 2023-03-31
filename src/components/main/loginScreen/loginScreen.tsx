import style from "./loginScreen.module.scss";
import { useState } from "react";

export function LoginScreen() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm ? (
        <form className={style.form} action="">
          <h1>Acesso</h1>
          <label htmlFor="">Usuário</label>
          <input placeholder="Digite seu login ou e-mail" type="text" />
          <label htmlFor="">Senha</label>
          <input placeholder="Digite a sua senha" type="text" />
          <span>Lembrar de mim</span>
          <span>Esqueci minha senha</span>
          <button>Entrar</button>
        </form>
      ) : (
        <button className={style.btnLogin} onClick={() => setShowForm(true)}>
          {" "}
          INICIAR SESSÃO
        </button>
      )}
    </>
  );
}
