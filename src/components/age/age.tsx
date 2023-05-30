import { useContext, useEffect, useState } from "react";
import style from "../age/age.module.scss";
import { context } from "../../pages/guias/guias";
import { Shelton } from "./shelton/shelton";
import { COLORS, COMBINATIONS } from "./constants";

interface Item {
  nome: string;
  age: number;
  id: number;
}

export function Age() {
  const [triggerSheltonBroken, setTriggerSheltonBroken] = useState(false);
  const [dragItemOnAge, setDragItemOnAge] = useState(false);
  const {
    selectedItem,
    setSelectedItem,
    itemDrag,
    setItemDrag,
    setInventory,
    sheltonsOnAge,
    setSheltonsOnAge,
  } = useContext(context);
  const [sucess, setSucess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [max, setMax] = useState(false);
  const [back, setBack] = useState(false);
  const [isAging, setIsAging] = useState(false);

  function aging(selectedItem: Item) {
    setTriggerSheltonBroken(false);
    setSucess(false);
    setFailed(false);
    setMax(false);
    setBack(false);

    if (sheltonsOnAge.length !== COMBINATIONS[selectedItem.age].length) {
      return;
    }

    function handleAge() {
      setTimeout(() => {
        setIsAging(false);
        setSelectedItem?.({
          ...selectedItem,
          age: selectedItem?.age ? selectedItem.age + 1 : 1,
        });
        setTriggerSheltonBroken(false);
      }, (COMBINATIONS[selectedItem.age].length + 1) * 200);

      updateInventory();
      setSucess(true);
    }
    setIsAging(true);
    setInventory &&
      setInventory((previous: any) => {
        return previous.filter((item: any) => {
          console.log(item.id);
          return !sheltonsOnAge.find((sheltonOnAge: any) => {
            console.log(sheltonOnAge.id);
            return sheltonOnAge.id === item.id;
          });
        });
      });
    setSheltonsOnAge && setSheltonsOnAge([]);

    const prob = Math.round(Math.random() * 100);
    function updateInventory() {
      setInventory &&
        setInventory((inventory: any) => {
          const idsArray = inventory.map((item: any) => {
            return item.id;
          });
          const itemToChange = inventory.find((item: any) => {
            return item?.id === selectedItem?.id;
          });

          console.log(inventory, "inventory");

          return inventory.toSpliced(idsArray.indexOf(itemToChange?.id), 1, {
            ...selectedItem,
            age: selectedItem.age ? selectedItem.age + 1 : 1,
          });
        });
    }
    if (selectedItem.age === 20) {
      setMax(true);

      return;
    }
    if (selectedItem.age > 10) {
      setTriggerSheltonBroken(true);
      if (prob > 50) {
        handleAge();
        return;
      }
    }
    if (selectedItem.age > 5) {
      setTriggerSheltonBroken(true);
      if (prob > 10) {
        handleAge();
        return;
      }
    }

    if (selectedItem.age <= 5) {
      setTriggerSheltonBroken(true);
      if (prob > 0) {
        handleAge();
        return;
      }
    }
    if (!selectedItem.age) {
      setSelectedItem && setSelectedItem({ ...selectedItem, age: 1 });
      setSucess(true);
      updateInventory();
      return;
    }

    setFailed(true);
  }
  useEffect(() => {}, [selectedItem]);

  function removeAge(selectedItem: Item) {
    setBack(false);
    setSucess(false);
    setFailed(false);
    setMax(false);
    const probReturn = Math.round(Math.random() * 100);
    if (selectedItem.age > 1) {
      if (probReturn > 10) {
        setSelectedItem &&
          setSelectedItem({
            ...selectedItem,
            age: selectedItem?.age ? selectedItem.age - 1 : 1,
          });
        setBack(true);
      }
      if (probReturn > 50) {
        setSelectedItem &&
          setSelectedItem({
            ...selectedItem,
            age: selectedItem?.age ? selectedItem.age - 2 : 1,
          });
        setBack(true);
      }
    }
  }
  useEffect(() => {
    console.log(itemDrag, "itemDrag");
  }, [itemDrag]);

  return (
    <div>
      <div className={style.aging}>
        <img
          style={{ position: "absolute", left: "0", top: "0" }}
          src={require(`../../assets/hud/aging.png`)}
          alt=""
        />

        <div className={style.itemContainer}>
          <div
            onClick={() => {
              if (itemDrag.age > 19) {
                return;
              }
              if (setSelectedItem && setItemDrag) {
                if (sheltonsOnAge.length > 0) {
                  return;
                }
                if (!itemDrag || JSON.stringify(itemDrag) === "{}") {
                  setDragItemOnAge(true);
                  setItemDrag(selectedItem);
                  setSelectedItem({});
                  return;
                }
                if (itemDrag && selectedItem) {
                  const storeItemDrag = itemDrag;
                  const storeSelectedItem = selectedItem;
                  setSelectedItem(storeItemDrag);
                  setItemDrag(storeSelectedItem);

                  return;
                }
                if (itemDrag) {
                  setDragItemOnAge(!dragItemOnAge);
                  setSelectedItem(itemDrag);
                  setItemDrag({});
                  return;
                }
              }
            }}
            style={{
              width: "90px",
              height: "120px",
              position: "absolute",
              zIndex: 2,
            }}
          ></div>
          {selectedItem && dragItemOnAge && (
            <>
              <img
                className={style.itemImg}
                style={{
                  filter: COLORS[selectedItem?.age],
                }}
                src={
                  selectedItem?.nome &&
                  require(`../../assets/items/${selectedItem?.nome}_.png`)
                }
                alt=""
              />
              <img
                style={{}}
                src={
                  selectedItem?.nome &&
                  require(`../../assets/items/${selectedItem?.nome}_.png`)
                }
                alt=""
              />
            </>
          )}
        </div>
        {selectedItem && (
          <button
            disabled={isAging}
            className={style.agingBtn}
            onClick={() => aging(selectedItem)}
          ></button>
        )}
        <div className={style.sheltonsContainer}>
          {selectedItem?.nome &&
            COMBINATIONS[selectedItem?.age || 0].map((shelton, index) => {
              return (
                <Shelton
                  index={index}
                  sheltonBroken={triggerSheltonBroken}
                  timeout={200 * (index + 1)}
                  shelton={shelton}
                />
              );
            })}
        </div>
      </div>
      <div className={style.specItems}>
        {/* <h1>Clique em um selectedItem para ver seus Status</h1> */}
        <span>{selectedItem?.nome}</span>

        {selectedItem?.poderDeAtaque && (
          <span>Poder de Ataque: {selectedItem?.poderDeAtaque}</span>
        )}

        {selectedItem?.velDaArma && (
          <span>Velocidade da arma: {selectedItem?.velDaArma}</span>
        )}

        {selectedItem?.Alcance && <span>Alcance: {selectedItem?.Alcance}</span>}

        {selectedItem?.Crítico && <span>Crítico: {selectedItem?.Crítico}</span>}

        {selectedItem?.taxaDeAtaque && (
          <span>Taxa de ataque: {selectedItem?.taxaDeAtaque}</span>
        )}

        {selectedItem?.Bônus && <span>Bônus: {selectedItem?.Bônus} </span>}

        {selectedItem?.hpAdicional && (
          <span> HP adicional: {selectedItem?.hpAdicional}</span>
        )}

        {selectedItem?.nivelNecessario && (
          <span>Nível necessário: {selectedItem?.nivelNecessario}</span>
        )}

        {selectedItem?.forcaNecessaria && (
          <span>Força necessária: {selectedItem?.forcaNecessaria}</span>
        )}

        {selectedItem?.talendoNecessario && (
          <span>Talento necessária: {selectedItem?.talendoNecessario}</span>
        )}

        {selectedItem?.agilidadeNecessaria && (
          <span>Agilidade necessária: {selectedItem?.agilidadeNecessaria}</span>
        )}

        {selectedItem?.pDeAtqAdicional && (
          <span>
            Poder de ataque adicional: {selectedItem?.pDeAtqAdicional}
          </span>
        )}

        {selectedItem?.TaxaDeAtqAd && (
          <span>Taxa de ataque adicional: {selectedItem?.TaxaDeAtqAd}</span>
        )}

        {selectedItem?.criticoAdicional && (
          <span>Crítico adicional: {selectedItem?.criticoAdicional}</span>
        )}

        {selectedItem?.specAtqSpd && (
          <span>Spec velocidade de ataque: {selectedItem?.specAtqSpd} </span>
        )}

        {selectedItem?.specRng && (
          <span>Spec velocidade de ataque: {selectedItem?.specRng} </span>
        )}

        {selectedItem?.age && <span>Aging: +{selectedItem?.age}</span>}

        {selectedItem && (
          <button onClick={() => removeAge(selectedItem)}>
            Retroceder aging
          </button>
        )}

        <span>
          {failed && "O Aging falhou!"}
          {sucess && "O Aging subiu!"}
          {max && "Limite de Aging atingido."}
          {back && "Você retrocedeu o Aging"}
        </span>
      </div>
    </div>
  );
}
