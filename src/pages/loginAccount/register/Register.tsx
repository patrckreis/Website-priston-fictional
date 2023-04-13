import style from "./Register.module.scss";

export function Register() {
  return (
    <>
      <div className={style.registerContainer}>
        <h1>Página de registro</h1>
        <input
          type="text"
          placeholder="Nome"
          autoComplete="off"
          className={style.inputName}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          autoComplete="off"
          className={style.inputPassword}
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          autoComplete="off"
          className={style.inputEmail}
          required
        />
        <button className={style.submitBtn}>Registrar</button>
        <a href="#">Já possui uma conta? Entre aqui</a>
      </div>
    </>
  );
}
