import { context } from "../../../pages/guias/guias";
import { useContext, useEffect, useState } from "react";
import style from "./shelton.module.scss";

export function Shelton({ shelton, timeout, sheltonBroken, index }: any) {
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

  useEffect(() => {
    if (activeShelton?.nome) {
      return;
    }
    const sheltonFound = sheltonsOnAge.find((sheltonOnAge: any) => {
      return (
        sheltonOnAge.nome === shelton && sheltonOnAge.position === index % 2
      );
    });

    if (!sheltonFound) {
      return;
    }

    if (sheltonFound) {
      setActiveShelton(sheltonFound);
    }
  }, [sheltonsOnAge]);

  if (broke) {
    return <div className={style.shelton}></div>;
  }
  return (
    <div className={style.shelton}>
      <img
        style={{ filter: `grayscale(${activeShelton?.nome ? 0 : 1})` }}
        src={require(`../../../assets/items/${shelton}_.png`)}
        alt=""
      />
      <div
        onClick={() => {
          if (JSON.stringify(itemDrag) === "{}" && activeShelton?.nome) {
            setSheltonsOnAge?.((previous: any) => {
              return previous.filter((shelton: any) => {
                return shelton.id !== activeShelton.id;
              });
            });
            console.log("Entrou no if");
            setItemDrag?.(activeShelton);
            setActiveShelton({});
            return;
          }

          if (itemDrag.nome === shelton) {
            setSheltonsOnAge &&
              setSheltonsOnAge((previous: any) => {
                return [...previous, { ...itemDrag, position: index % 2 }];
              });
            setActiveShelton(itemDrag);
            setItemDrag && setItemDrag({});
            return;
          }

          if (activeShelton?.nome && itemDrag.nome) {
            return;
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
