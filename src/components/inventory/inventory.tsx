import { useContext, useEffect, useState } from "react";
import { context } from "../../pages/guias/guias";

export function Inventory() {
  const { item, setItem, inventory, setInventory } = useContext(context);
  useEffect(() => {
    const localStorageInventory = localStorage.getItem("inventory");
    console.log(localStorageInventory);

    if (
      localStorageInventory &&
      JSON.parse(localStorageInventory).length < inventory.length
    ) {
      console.log("teste", localStorageInventory);
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  }, [inventory]);

  return (
    <div>
      {inventory?.map((item: any, index: number) => {
        return (
          <img
            onClick={() => {
              setItem && setItem(item);
            }}
            key={index}
            src={item && require(`../../assets/items/${item?.nome}_.png`)}
            alt=""
          />
        );
      })}
    </div>
  );
}
