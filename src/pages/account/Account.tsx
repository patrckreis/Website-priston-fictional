import { LoginAccount } from "../loginAccount/LoginAccount";
import { Register } from "../loginAccount/register/Register";
import style from "./account.module.scss";

export function Account() {
  return (
    <>
      <div>
        <button className={style.logOut}>Log out</button>
        <h1 className={style.greetings}>Bem vindo, Patrick.</h1>
      </div>
      <LoginAccount />
      <Register />
    </>
  );
}
