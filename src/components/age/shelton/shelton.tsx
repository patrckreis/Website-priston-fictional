import { context } from "../../../pages/guias/guias";
import { useContext, useEffect, useState } from "react";
import style from "./shelton.module.scss";

export function Shelton({ shelton, timeout, sheltonBroken }: any) {
  const {
    itemDrag,
    setItemDrag,
    sheltonsOnAge,
    setSheltonsOnAge,
    selectedItem,
  } = useContext(context);
  const [activeShelton, setActiveShelton] = useState<any>({});
  const [broke, setBroke] = useState(false);

  useEffect(() => {
    if (sheltonBroken) {
      setTimeout(() => {
        setBroke(true);
      }, timeout);
    } else setBroke(false);
  }, [sheltonBroken]);

  useEffect(() => {
    setActiveShelton({});
  }, [selectedItem]);
  if (broke) {
    return <div className={style.shelton}></div>;
  }
  return (
    <div className={style.shelton}>
      <img
        style={{ filter: `grayscale(${activeShelton.nome ? 0 : 1})` }}
        src={require(`../../../assets/items/${shelton}_.png`)}
        alt=""
      />
      <div
        onClick={() => {
          if (activeShelton.nome && itemDrag.nome) {
            return;
          }
          if (itemDrag.nome === shelton) {
            setSheltonsOnAge &&
              setSheltonsOnAge((previous: any) => {
                return [...previous, itemDrag];
              });
            setActiveShelton(itemDrag);
            setItemDrag && setItemDrag({});
            return;
          }
          if (
            JSON.stringify(itemDrag) === "{}" &&
            JSON.stringify(activeShelton) !== "{}"
          ) {
            setSheltonsOnAge &&
              setSheltonsOnAge((previous: any) => {
                return previous.filter((shelton: any) => {
                  return shelton !== activeShelton;
                });
              });
            setItemDrag && setItemDrag(activeShelton);
            setActiveShelton({});
          }
        }}
        style={{
          width: "27px",
          height: "27px",
          position: "absolute",
          zIndex: 2,
          top: 0,
        }}
      ></div>
    </div>
  );
}
