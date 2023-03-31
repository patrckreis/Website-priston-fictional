import style from "./header.module.scss";
import logo from "../header/assets/menu.png";
import { LoginScreen } from "../main/loginScreen/loginScreen";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <header className={style.header}>
        <nav className={style.headerContainer}>
          <div className={style.headerMainContainerRight}>
            <img src={logo} alt="" />

            <Link to="inicio">
              <button className={style.btnMenu}>INÍCIO</button>
            </Link>
            <Link to="forum">
              <button className={style.btnMenu}>FORUM</button>
            </Link>
            <Link to="conta">
              <button className={style.btnMenu}>CONTA</button>
            </Link>
            <Link to="clans">
              <button className={style.btnMenu}>CLANS</button>
            </Link>
            <Link to="guias">
              <button className={style.btnMenu}>GUIAS</button>
            </Link>
            <Link to="loja">
              <button className={style.btnMenu}>LOJA</button>
            </Link>
          </div>
          <div className={style.headerMainContainerLeft}>
            <button className={style.btnMenu}>INICIAR SESSÃO</button>
            <button className={style.btnMenuPlay}>Jogue agora!</button>
          </div>
        </nav>
      </header>
    </>
  );
}
