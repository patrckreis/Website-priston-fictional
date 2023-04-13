import style from "./LoginAccount.module.scss";

export function LoginAccount() {
  return (
    <>
      <div className={style.loginContainer}>
        <h1>Login</h1>
        <input
          type="email"
          placeholder="E-mail"
          autoComplete="off"
          className={style.inputEmail}
          required
        />
        <input
          type="senha"
          placeholder="Senha"
          autoComplete="off"
          className={style.inputPassword}
          required
        />
        <button className={style.submitBtn}>Log in</button>
        <a href="#">Não possui uma conta?</a>
      </div>
    </>
  );
}
