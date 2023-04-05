import { Header } from "../../components/header/header";
import { ListItems } from "../../components/listItems/listItems";
import style from "../guias/guias.module.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
import { Inventory } from "../../components/inventory/inventory";

interface iContext {
  item: any;
  inventory: any;
  setItem: React.Dispatch<React.SetStateAction<undefined | any>> | undefined;
  setInventory:
    | React.Dispatch<React.SetStateAction<undefined | any>>
    | undefined;
}

export const context = React.createContext<iContext>({
  item: {},
  inventory: [],
  setItem: (a) => {
    return a;
  },
  setInventory: (b) => {
    return b;
  },
});

export function Guide() {
  const [item, setItem] = useState();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const localStorageInventory = localStorage.getItem("inventory");
    localStorageInventory && setInventory(JSON.parse(localStorageInventory));
    console.log(localStorageInventory);
    !localStorageInventory &&
      localStorage.setItem("inventory", JSON.stringify(inventory));
  }, []);

  return (
    <context.Provider value={{ item, inventory, setItem, setInventory }}>
      <>
        <div className={style.guideContainer}>
          <Inventory />
          <Link to="listItems">
            <button className={style.btnMenu}>Lista de items</button>
          </Link>
          <Link to="aging">
            <button className={style.btnMenu}>Aging</button>
          </Link>
          <ListItems />
        </div>
      </>
    </context.Provider>
  );
}
