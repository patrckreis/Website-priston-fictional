import { useContext, useEffect, useState } from "react";
import style from "../age/age.module.scss";
import { context } from "../../pages/guias/guias";
import { Shelton } from "./shelton/shelton";

interface Item {
  nome: string;
  age: number;
  id: number;
}

export function Age() {
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
  const COLORS = [
    "",
    "",
    "",
    "",
    "brightness(0) saturate(100%) invert(91%) sepia(89%) saturate(4571%) hue-rotate(291deg) brightness(99%) contrast(84%)",
    "brightness(0) saturate(100%) invert(99%) sepia(9%) saturate(5941%) hue-rotate(318deg) brightness(105%) contrast(90%)",
    "brightness(0) saturate(100%) invert(60%) sepia(48%) saturate(447%) hue-rotate(57deg) brightness(97%) contrast(88%)",
    "brightness(0) saturate(100%) invert(64%) sepia(17%) saturate(1402%) hue-rotate(184deg) brightness(92%) contrast(87%)",
    "brightness(0) saturate(100%) invert(35%) sepia(68%) saturate(862%) hue-rotate(268deg) brightness(95%) contrast(82%)",
    "brightness(0) saturate(100%) invert(97%) sepia(100%) saturate(5895%) hue-rotate(315deg) brightness(95%) contrast(81%)",
    "brightness(0) saturate(100%) invert(29%) sepia(86%) saturate(3799%) hue-rotate(348deg) brightness(104%) contrast(92%)",
    "brightness(0) saturate(100%) invert(90%) sepia(19%) saturate(755%) hue-rotate(93deg) brightness(97%) contrast(91%)",
    "brightness(0) saturate(100%) invert(83%) sepia(17%) saturate(1905%) hue-rotate(41deg) brightness(92%) contrast(79%)",
    "brightness(0) saturate(100%) invert(80%) sepia(40%) saturate(1138%) hue-rotate(279deg) brightness(94%) contrast(90%)",
    "brightness(0) saturate(100%) invert(47%) sepia(18%) saturate(2218%) hue-rotate(300deg) brightness(96%) contrast(91%)",
    "brightness(0) saturate(100%) invert(93%) sepia(94%) saturate(252%) hue-rotate(86deg) brightness(92%) contrast(91%)",
    "brightness(0) saturate(100%) invert(71%) sepia(82%) saturate(671%) hue-rotate(328deg) brightness(101%) contrast(91%)",
    "brightness(0) saturate(100%) invert(91%) sepia(5%) saturate(5316%) hue-rotate(308deg) brightness(96%) contrast(86%)",
    "brightness(0) saturate(100%) invert(44%) sepia(91%) saturate(1510%) hue-rotate(240deg) brightness(88%) contrast(97%)",
    "brightness(0) saturate(100%) invert(88%) sepia(100%) saturate(4971%) hue-rotate(14deg) brightness(115%) contrast(115%)",
    "brightness(0) saturate(100%) invert(98%) sepia(33%) saturate(4%) hue-rotate(67deg) brightness(110%) contrast(100%)",
  ];

  const COMBINATIONS = [
    ["Fadeo", "Fadeo", "Sparki", "Sparki", "Raident"],
    ["Fadeo", "Fadeo", "Sparki", "Sparki", "Raident", "Raident"],
    ["Fadeo", "Fadeo", "Sparki", "Sparki", "Raident", "Raident", "Transparo"],
    [
      "Fadeo",
      "Fadeo",
      "Sparki",
      "Sparki",
      "Raident",
      "Raident",
      "Transparo",
      "Transparo",
    ],
    [
      "Fadeo",
      "Fadeo",
      "Sparki",
      "Sparki",
      "Raident",
      "Raident",
      "Transparo",
      "Transparo",
      "Murki",
    ],
    [
      "Fadeo",
      "Fadeo",
      "Sparki",
      "Sparki",
      "Raident",
      "Raident",
      "Transparo",
      "Transparo",
      "Murki",
      "Murki",
    ],
    [
      "Fadeo",
      "Fadeo",
      "Sparki",
      "Sparki",
      "Raident",
      "Raident",
      "Transparo",
      "Transparo",
      "Murki",
      "Murki",
      "Devine",
    ],
  ];

  function aging(selectedItem: Item) {
    ("");
    setSucess(false);
    setFailed(false);
    setMax(false);
    setBack(false);

    if (sheltonsOnAge.length !== COMBINATIONS[selectedItem.age].length) {
      return;
    }

    setInventory &&
      setInventory((previous: any) => {
        return previous.filter((item: any) => {
          return !sheltonsOnAge.includes(item);
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

          console.log(idsArray.indexOf(itemToChange?.id));
          console.log(inventory);

          return inventory.toSpliced(idsArray.indexOf(itemToChange?.id), 1, {
            ...selectedItem,
            age: selectedItem.age ? selectedItem.age + 1 : 1,
          });
        });
    }
    if (selectedItem.age == 20) {
      setMax(true);

      return;
    }
    if (selectedItem.age > 10) {
      if (prob > 50) {
        setSelectedItem &&
          setSelectedItem({
            ...selectedItem,
            age: selectedItem?.age ? selectedItem.age + 1 : 1,
          });
        updateInventory();
        setSucess(true);

        return;
      }
    }
    if (selectedItem.age > 5) {
      if (prob > 10) {
        setSelectedItem &&
          setSelectedItem({
            ...selectedItem,
            age: selectedItem?.age ? selectedItem.age + 1 : 1,
          });
        updateInventory();
        setSucess(true);
        console.log(selectedItem);
        return;
      }
    }

    if (selectedItem.age <= 5) {
      if (prob > 0) {
        setSelectedItem &&
          setSelectedItem({
            ...selectedItem,
            age: selectedItem?.age ? selectedItem.age + 1 : 1,
          });
        updateInventory();
        setSucess(true);

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
  useEffect(() => {}, [itemDrag]);

  return (
    <>
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
        {selectedItem && (
          <button onClick={() => aging(selectedItem)}>Aging</button>
        )}

        <span>
          {failed && "O Aging falhou!"}
          {sucess && "O Aging subiu!"}
          {max && "Limite de Aging atingido."}
          {back && "Você retrocedeu o Aging"}
        </span>
      </div>
      <div>
        {selectedItem &&
          COMBINATIONS[selectedItem?.age || 0].map((shelton) => {
            return <Shelton shelton={shelton} />;
          })}
      </div>
      <div className={style.itemContainer}>
        <div
          onClick={() => {
            if (setSelectedItem && setItemDrag) {
              if (!itemDrag || itemDrag == null) {
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
            width: "200px",
            height: "200px",
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
    </>
  );
}
