import { useContext, useEffect, useState } from "react";
import { context } from "../../../pages/guias/guias";

export function Item({ item }: any) {
  const [selectItemPosition, setSelectedItemPosition] = useState({
    x: 600,
    y: 600,
  });
  const {
    selectedItem,
    setSelectedItem,
    inventory,
    setInventory,
    itemPosition,
    itemDrag,
    setItemDrag,
    sheltonsOnAge,
  } = useContext(context);
  useEffect(() => {
    JSON.stringify(itemDrag) === JSON.stringify(item) &&
      setSelectedItemPosition({ x: itemPosition.x, y: itemPosition.y });
  }, [itemPosition]);
  if (item?.id === selectedItem?.id) {
    return <></>;
  }
  if (sheltonsOnAge.includes(item)) {
    return <></>;
  }
  return (
    <div
      style={{
        position: "absolute",
        left: selectItemPosition.x,
        top: selectItemPosition.y,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        onClick={(e) => {
          console.log(itemDrag);
          setItemDrag &&
            setItemDrag(
              JSON.stringify(itemDrag) !== JSON.stringify(item) ? item : null
            );
          /* setSelectedItem && setSelectedItem(item); */
        }}
        src={item && require(`../../../assets/items/${item?.nome}_.png`)}
        alt=""
      />
      {/* <button
        onClick={() => {
          setItemDrag && setItemDrag({});
          setInventory &&
            setInventory(
              inventory.filter((itemInventory: any) => {
                return itemInventory != item;
              })
            );
        }}
      >
        x
      </button> */}
    </div>
  );
}
