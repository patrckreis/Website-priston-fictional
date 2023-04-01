import { useEffect, useState } from "react";
import style from "../age/age.module.scss";

interface Item {
  nome: string;
  age: number;
}

export function Age({ item, setItem }: any) {
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

  function aging(item: Item) {
    ("");
    setSucess(false);
    setFailed(false);
    setMax(false);

    const prob = Math.round(Math.random() * 100);
    if (item.age == 20) {
      setMax(true);

      return;
    }
    if (item.age > 10) {
      if (prob > 50) {
        setItem({ ...item, age: item?.age ? item.age + 1 : 1 });
        setSucess(true);

        return;
      }
    }
    if (item.age > 5) {
      if (prob > 10) {
        setItem({ ...item, age: item?.age ? item.age + 1 : 1 });
        setSucess(true);

        return;
      }
    }
    if (item.age <= 5) {
      if (prob > 0) {
        setItem({ ...item, age: item?.age ? item.age + 1 : 1 });
        setSucess(true);

        return;
      }
    }
    if (!item.age) {
      setItem({ ...item, age: 1 });
      setSucess(true);
      return;
    }
    setFailed(true);
  }
  useEffect(() => {
    console.log(item);
  }, [item]);

  function removeAge(item: Item) {
    setBack(false);
    if (item.age > 1) {
      setItem({ ...item, age: item?.age ? item.age - 1 : 1 });
      setBack(true);
    }
  }

  return (
    <>
      <div className={style.specItems}>
        <h1>Clique em um item para ver seus Status</h1>
        <span>{item?.nome}</span>

        {item?.poderDeAtaque && (
          <span>Poder de Ataque: {item?.poderDeAtaque}</span>
        )}

        {item?.velDaArma && <span>Velocidade da arma: {item?.velDaArma}</span>}

        {item?.Alcance && <span>Alcance: {item?.Alcance}</span>}

        {item?.Crítico && <span>Crítico: {item?.Crítico}</span>}

        {item?.taxaDeAtaque && (
          <span>Taxa de ataque: {item?.taxaDeAtaque}</span>
        )}

        {item?.Bônus && <span>Bônus: {item?.Bônus} </span>}

        {item?.hpAdicional && <span> HP adicional: {item?.hpAdicional}</span>}

        {item?.nivelNecessario && (
          <span>Nível necessário: {item?.nivelNecessario}</span>
        )}

        {item?.forcaNecessaria && (
          <span>Força necessária: {item?.forcaNecessaria}</span>
        )}

        {item?.talendoNecessario && (
          <span>Talento necessária: {item?.talendoNecessario}</span>
        )}

        {item?.agilidadeNecessaria && (
          <span>Agilidade necessária: {item?.agilidadeNecessaria}</span>
        )}

        {item?.pDeAtqAdicional && (
          <span>Poder de ataque adicional: {item?.pDeAtqAdicional}</span>
        )}

        {item?.TaxaDeAtqAd && (
          <span>Taxa de ataque adicional: {item?.TaxaDeAtqAd}</span>
        )}

        {item?.criticoAdicional && (
          <span>Crítico adicional: {item?.criticoAdicional}</span>
        )}

        {item?.specAtqSpd && (
          <span>Spec velocidade de ataque: {item?.specAtqSpd} </span>
        )}

        {item?.specRng && (
          <span>Spec velocidade de ataque: {item?.specRng} </span>
        )}

        {item?.age && <span>Aging: +{item?.age}</span>}

        <button onClick={() => removeAge(item)}>Retroceder aging</button>
        <button onClick={() => aging(item)}>Aging</button>

        <span>
          {failed && "O Aging falhou!"}
          {sucess && "O Aging subiu!"}
          {max && "Limite de Aging atingido."}
          {back && "Você retrocedeu o Aging"}
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
