import { useContext, useEffect, useState } from "react";
import { listItems } from "../items/items";
import { Age } from "../age/age";
import style from "../listItems/listItems.module.scss";
import { context } from "../../pages/guias/guias";

export function ListItems({}: any) {
  const [open, setOpen] = useState("");
  const [groupItem, setGroupItem] = useState<any>();
  const { item, setItem, inventory, setInventory } = useContext(context);
  console.log(inventory);

  useEffect(() => {
    console.log(groupItem);
  }, [groupItem]);
  return (
    <div className={style.groupItemContainer}>
      {listItems.map((groupItem) => {
        return (
          <div className={style.groupItem}>
            <span
              onClick={() => setGroupItem(groupItem)}
              className={style.groupItemTitle}
            >
              {groupItem.nome}
            </span>
          </div>
        );
      })}
      <div>
        <div className={style.teste}>
          <div className={style.groupItemListContainer}>
            <button
              onClick={() => {
                setInventory && setInventory([...inventory, item]);
              }}
            >
              Clique aqui
            </button>
            {groupItem?.items?.map((listItem: any) => {
              return (
                <span
                  className={style.groupItemList}
                  onClick={() => {
                    console.log("teste");
                    listItem !== item && setItem && setItem(listItem);
                  }}
                >
                  {listItem?.nome}
                </span>
              );
            })}
          </div>
          <Age item={item} setItem={setItem} />
        </div>
      </div>
    </div>
  );
}
