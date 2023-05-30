import { useContext, useEffect, useState } from "react";
import { context } from "../../pages/guias/guias";
import { Item } from "./item/item";

export function Inventory() {
  const {
    selectedItem,
    setSelectedItem,
    inventory,
    setInventory,
    setItemDrag,
    itemDrag,
  } = useContext(context);
  useEffect(() => {
    const localStorageInventory = localStorage.getItem("inventory");

    if (
      localStorageInventory &&
      JSON.parse(localStorageInventory) != inventory
    ) {
      localStorage.setItem("inventory", JSON.stringify(inventory));
    }
  }, [inventory]);

  return (
    <div>
      {inventory?.map((item: any, index: number) => {
        return <Item item={item} key={item.id} />;
      })}
      {inventory.length && (
        <button
          style={{
            position: "absolute",
            zIndex: 2,
            top: "560px",
            left: "200px",
            padding: "45px",
          }}
          onClick={() => {
            setItemDrag && setItemDrag({});
            setInventory &&
              setInventory(
                inventory.filter((itemInventory: any) => {
                  return itemInventory != itemDrag;
                })
              );
          }}
        >
          Deletar item
        </button>
      )}
    </div>
  );
}
