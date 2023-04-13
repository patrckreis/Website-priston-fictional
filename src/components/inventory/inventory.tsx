import { useContext, useEffect, useState } from "react";
import { context } from "../../pages/guias/guias";
import { Item } from "./item/item";

export function Inventory() {
  const { item, setItem, inventory, setInventory } = useContext(context);
  useEffect(() => {
    const localStorageInventory = localStorage.getItem("inventory");
    console.log(localStorageInventory);

    if (
      localStorageInventory &&
      JSON.parse(localStorageInventory) != inventory
    ) {
      console.log("teste", localStorageInventory);
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  }, [inventory]);

  return (
    <div>
      {inventory?.map((item: any, index: number) => {
        return <Item item={item} key={index} />;
      })}
    </div>
  );
}
