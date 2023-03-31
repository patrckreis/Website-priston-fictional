import { useEffect, useState } from "react";
import style from "../age/age.module.scss";

interface Item {
  nome: string;
  age: number;
  ataque: number;
}

export function Age({ item, setItem }: any) {
  const [sucess, setSucess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [max, setMax] = useState(false);
  const COLORS = [
    "",
    "",
    "",
    "",
    "brightness(0) saturate(100%) invert(98%) sepia(96%) saturate(3199%) hue-rotate(12deg) brightness(114%) contrast(107%)",
    "brightness(0) saturate(100%) invert(54%) sepia(13%) saturate(2033%) hue-rotate(84deg) brightness(98%) contrast(92%)",
    "brightness(0) saturate(100%) invert(34%) sepia(92%) saturate(2764%) hue-rotate(354deg) brightness(100%) contrast(93%)",
  ];

  function aging(item: Item) {
    setSucess(false);
    setFailed(false);
    setMax(false);
    const prob = Math.round(Math.random() * 100);
    /*     if (item.age == 20) {
      setMax(true);
      console.log("Limite do Aging atingido.");
      return;
    }
    if (item.age > 10) {
      if (prob > 50) {
        setItem({
          ...item,
          age: item.age + 1,
          ataque: item.ataque ? item.ataque + 3 : 3,
        });
        setSucess(true);
        console.log("O Aging subiu!");
        return;
      }
    }
    if (item.age > 5) {
      if (prob > 10) {
        setItem({ ...item, age: item.age + 1, ataque: item.ataque + 3 });
        setSucess(true);
        console.log("O Aging subiu!");
        return;
      }
    }
    if (item.age <= 5) {
      if (prob > 0) {
        setItem({ ...item, age: item.age + 1, ataque: item.ataque + 3 });
        setSucess(true);
        console.log("O Aging subiu!");
        return;
      }
    } */

    setItem({ ...item, age: item?.age ? item.age + 1 : 1 });
    setFailed(true);
    console.log("O aging falhou");
  }
  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <>
      <button onClick={() => aging(item)}></button>
      <div className={style.specItems}>
        <span>{item?.nome}</span>

        {item?.poderDeAtaque && (
          <span>Poder de Ataque: {item?.poderDeAtaque}</span>
        )}

        {item?.nivelNecessario && (
          <span>Nível necessário: {item?.nivelNecessario}</span>
        )}

        {item?.velDaArma && <span>Velocidade da arma: {item?.velDaArma}</span>}

        {item?.Alcance && <span>Alcance: {item?.Alcance}</span>}
        {item?.Crítico && <span>Crítico: {item?.Crítico}</span>}

        {item?.taxaDeAtaque && (
          <span>Taxa de ataque: {item?.taxaDeAtaque}</span>
        )}

        {item?.agilidadeNecessaria && (
          <span>Agilidade necessaria: {item?.agilidadeNecessaria}</span>
        )}

        {item?.pDeAtqAdicional && (
          <span>Poder de ataque adicional: {item?.pDeAtqAdicional}</span>
        )}

        {item?.criticoAdicional && (
          <span>Crítico adicional: {item?.criticoAdicional}</span>
        )}

        <span>{item?.age}</span>

        <span>
          {failed && "O Aging falhou!"}
          {sucess && "O Aging subiu!"}
          {max && "Limite de Aging atingido."}
        </span>
      </div>
      <div className={style.ageContainer}>
        <img
          className={style.itemImg}
          style={{
            filter: COLORS[item?.age],
          }}
          src={item && require(`../../assets/items/${item?.nome}_.png`)}
          alt=""
        />
        <img
          style={{}}
          src={item && require(`../../assets/items/${item?.nome}_.png`)}
          alt=""
        />
      </div>
    </>
  );
}
