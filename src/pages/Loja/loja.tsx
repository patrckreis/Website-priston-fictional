import { Header } from "../../components/header/header";
import { Main } from "../../components/main/main";
import style from "./loja.module.scss";

export function Loja() {
  return (
    <>
      <div className={style.mainLojaContainer}>
        <div className={style.lojaWrapper}>
          <h1 className={style.h1}>Você está na página Loja</h1>
          <div className={style.lojaContainer}></div>
        </div>
      </div>
    </>
  );
}
