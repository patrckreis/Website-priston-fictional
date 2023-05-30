import { useContext, useEffect, useState } from "react";
import { context } from "../../../pages/guias/guias";
import { COMBINATIONS } from "../../age/constants";

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
    setSheltonsOnAge,
  } = useContext(context);

  useEffect(() => {
    JSON.stringify(itemDrag) != "{}" &&
      itemDrag.id === item.id &&
      setSelectedItemPosition({ x: itemPosition.x, y: itemPosition.y });
  }, [itemPosition]);

  useEffect(() => {
    console.log(sheltonsOnAge, "sheltonsOnAge");
  }, [sheltonsOnAge]);

  if (item === null) {
    return <></>;
  }

  if (item?.id === selectedItem?.id) {
    return <></>;
  }
  if (
    sheltonsOnAge.some((shelton: any) => {
      return shelton.id === item.id;
    })
  ) {
    return <></>;
  }
  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();

        const filteredSheltons = sheltonsOnAge.filter((sheltonOnAge: any) => {
          return sheltonOnAge.nome === item.nome;
        });
        if (
          COMBINATIONS[selectedItem.age].includes(item.nome) &&
          filteredSheltons.length < 2
        ) {
          setSheltonsOnAge?.((sheltonsOnAge: any) => {
            COMBINATIONS.indexOf(item.nome);
            return [
              ...sheltonsOnAge,
              { ...item, position: filteredSheltons.length > 0 ? 1 : 0 },
            ];
          });
        }
      }}
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
          setItemDrag &&
            setItemDrag(
              JSON.stringify(itemDrag) !== JSON.stringify(item) ? item : {}
            );
          /* setSelectedItem && setSelectedItem(item); */
        }}
        src={item && require(`../../../assets/items/${item?.nome}_.png`)}
        alt=""
      />
    </div>
  );
}
