import { useContext, useEffect, useState } from "react";
import { context } from "../../../pages/guias/guias";

export function Item({ item }: any) {
  const [selectItemPosition, setSelectedItemPosition] = useState({
    x: 600,
    y: 600,
  });
  const {
    inventory,
    setInventory,
    itemPosition,
    setItemPosition,
    itemDrag,
    setItemDrag,
  } = useContext(context);
  useEffect(() => {
    JSON.stringify(itemDrag) === JSON.stringify(item) &&
      setSelectedItemPosition({ x: itemPosition.x, y: itemPosition.y });
  }, [itemPosition]);

  return (
    <div
      onClick={(e) => {
        console.log(itemDrag);

        setItemDrag &&
          setItemDrag(
            JSON.stringify(itemDrag) !== JSON.stringify(item) ? item : null
          );
        /* setItem && setItem(item); */
      }}
      style={{
        position: "absolute",
        left: selectItemPosition.x,
        top: selectItemPosition.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <img
        src={item && require(`../../../assets/items/${item?.nome}_.png`)}
        alt=""
      />
      <button
        onClick={() => {
          setInventory &&
            setInventory(
              inventory.filter((itemInventory: any) => {
                return itemInventory != item;
              })
            );
        }}
      >
        Remover
      </button>
    </div>
  );
}
