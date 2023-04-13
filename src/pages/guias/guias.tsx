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

  itemPosition: any;
  setItemPosition:
    | React.Dispatch<React.SetStateAction<undefined | any>>
    | undefined;

  itemDrag: any;
  setItemDrag:
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
  itemPosition: {},
  setItemPosition: (c) => {
    return c;
  },

  itemDrag: {},
  setItemDrag: (d) => {
    return d;
  },
});

export function Guide() {
  function handlePosition(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (itemDrag) {
      setItemPosition && setItemPosition({ x: e.clientX, y: e.clientY });
      console.log("teste");
    }
  }
  const [itemDrag, setItemDrag] = useState(null);
  const [itemPosition, setItemPosition] = useState({ x: 600, y: 600 });
  const [item, setItem] = useState();
  const [inventory, setInventory] = useState(
    JSON.parse(localStorage.getItem("inventory") || "")
  );

  useEffect(() => {
    const localStorageInventory = localStorage.getItem("inventory");
    localStorageInventory && setInventory(JSON.parse(localStorageInventory));
    !localStorageInventory &&
      localStorage.setItem("inventory", JSON.stringify(inventory));
  }, []);

  return (
    <context.Provider
      value={{
        item,
        inventory,
        setItem,
        setInventory,
        itemPosition,
        setItemPosition,
        itemDrag,
        setItemDrag,
      }}
    >
      <>
        <div
          className={style.guideContainer}
          onMouseMove={(e) => {
            handlePosition(e);
          }}
        >
          <Link to="listItems">
            <button className={style.btnMenu}>Lista de items</button>
          </Link>
          <Link to="aging">
            <button className={style.btnMenu}>Aging</button>
          </Link>
          <ListItems />
          <Inventory />
        </div>
      </>
    </context.Provider>
  );
}
