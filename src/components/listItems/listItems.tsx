import { useContext, useEffect, useState } from "react";
import { listItems } from "../items/items";
import { Age } from "../age/age";
import style from "../listItems/listItems.module.scss";
import { context } from "../../pages/guias/guias";
import inventoryIcon from "../header/assets/chest.png";

export function ListItems({}: any) {
  const [open, setOpen] = useState("");
  const [groupItem, setGroupItem] = useState<any>();
  const { selectedItem, setSelectedItem, inventory, setInventory } =
    useContext(context);

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
                    color: listItem === selectedItem ? "white" : "#1f75ff",
                    backgroundColor: listItem === selectedItem ? "#1f75ff" : "",
                  }}
                  className={style.groupItemList}
                >
                  {listItem?.nome}
                  <button
                    className={style.inventoryBtnIcon}
                    onClick={() => {
                      const id = inventory[inventory.length - 1]?.id + 1 || 1;
                      console.log(id);
                      setInventory &&
                        setInventory([...inventory, { ...listItem, id: id }]);
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
          <Age />
        </div>
      </div>
    </div>
  );
}
