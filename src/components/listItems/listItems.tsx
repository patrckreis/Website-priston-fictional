import { useEffect, useState } from "react";
import { listItems } from "../items/items";
import { Age } from "../age/age";
import style from "../listItems/listItems.module.scss";

export function ListItems({ item, setItem }: any) {
  const [open, setOpen] = useState("");
  const [groupItem, setGroupItem] = useState<any>();
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
      <div className={style.teste}>
        <div className={style.groupItemListContainer}>
          {groupItem?.items?.map((listItem: any) => {
            return (
              <span
                className={style.groupItemList}
                onClick={() => {
                  console.log("teste");
                  listItem !== item && setItem(listItem);
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
  );
}
