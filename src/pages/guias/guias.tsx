import { Header } from "../../components/header/header";
import { ListItems } from "../../components/listItems/listItems";
import style from "../guias/guias.module.scss";
import { Link } from "react-router-dom";

export function Guide() {
  return (
    <>
      <div className={style.guideContainer}>
        <Link to="listItems">
          <button className={style.btnMenu}>Lista de items</button>
        </Link>
        <Link to="aging">
          <button className={style.btnMenu}>Aging</button>
        </Link>
      </div>
    </>
  );
}
