import { useContext, useEffect, useState } from "react";
import { listItems } from "../items/items";
import { Age } from "../age/age";
import style from "../listItems/listItems.module.scss";
import { context } from "../../pages/guias/guias";
import inventoryIcon from "../header/assets/chest.png";

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
      {listItems.map((groupItem2) => {
        return (
          <div>
            <div
              style={{
                color: groupItem === groupItem2 ? "white" : "#1f75ff",
                backgroundColor: groupItem === groupItem2 ? "#1f75ff" : "",
              }}
              onClick={() => setGroupItem(groupItem2)}
              className={style.groupItem}
            >
              <span
                onClick={() => setGroupItem(groupItem2)}
                className={style.groupItemTitle}
              >
                {groupItem2.nome}
              </span>
            </div>
          </div>
        );
      })}
      <div>
        <div className={style.listItemsContainer}>
          <div className={style.groupItemListContainer}>
            {groupItem?.items?.map((listItem: any) => {
              return (
                <span
                  style={{
                    color: listItem === item ? "white" : "#1f75ff",
                    backgroundColor: listItem === item ? "#1f75ff" : "",
                  }}
                  className={style.groupItemList}
                  onClick={() => {
                    console.log("teste");
                    listItem !== item && setItem && setItem(listItem);
                  }}
                >
                  {listItem?.nome}
                  <button
                    className={style.inventoryBtnIcon}
                    onClick={() => {
                      setInventory && setInventory([...inventory, item]);
                    }}
                  >
                    <img
                      className={style.inventoryIcon}
                      src={inventoryIcon}
                      alt=""
                    />
                  </button>
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
