import { context } from "../../../pages/guias/guias";
import { useContext, useEffect, useState } from "react";

export function Shelton({ shelton }: any) {
  const {
    itemDrag,
    setItemDrag,
    sheltonsOnAge,
    setSheltonsOnAge,
    selectedItem,
  } = useContext(context);
  const [activeShelton, setActiveShelton] = useState<any>({});

  useEffect(() => {
    setActiveShelton({});
  }, [selectedItem]);

  return (
    <div style={{ position: "relative" }}>
      {activeShelton.nome ? (
        ""
      ) : (
        <img
          style={{
            top: 0,
            position: "absolute",
            opacity: 0.9,
            filter:
              "brightness(0) saturate(100%) invert(53%) sepia(2%) saturate(6%) hue-rotate(346deg) brightness(94%) contrast(77%)",
          }}
          src={require(`../../../assets/items/${shelton}_.png`)}
          alt=""
        />
      )}
      <img src={require(`../../../assets/items/${shelton}_.png`)} alt="" />
      <div
        onClick={() => {
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
          width: "22px",
          height: "22px",
          position: "absolute",
          zIndex: 2,
          top: 0,
        }}
      ></div>
    </div>
  );
}
