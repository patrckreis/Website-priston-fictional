import { useEffect, useState } from "react";
import aden from "../enchant/assets/talismanAden.png"

interface Item {
    name: string;
    enchant: number;
}

export function Enchant () {
    const [sucess, setSucess] = useState(false)
    const [failed, setFailed] = useState(false)
    const [max, setMax] = useState(false)
    const [item, setItem] = useState({name: "Aden", enchant: 0});
    function enchanting (item: Item) {
        setSucess(false)
        setFailed(false)
        setMax(false)
        const prob = Math.round(Math.random() * 100);
        if (item.enchant === 10){
            console.log("Enchant máximo atingido.")
            setMax(true)
        }
        if (item.enchant === 0) {
            if (prob > 0) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+1")
                return
            }
        }
        if (item.enchant === 1) {
            if (prob > 20) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+2")
                return
            }
        }
        if (item.enchant === 2) {
            if (prob > 30) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+3")
                return
            }
        }
        if (item.enchant === 3) {
            if (prob > 40) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+4")
                return
            }
        }
        if (item.enchant === 4) {
            if (prob > 50) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+5")
                return
            }
        }
        if (item.enchant === 5) {
            if (prob > 60) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+6")
                return
            }
        }
        if (item.enchant === 6) {
            if (prob > 65) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+7")
                return
            }
        }
        if (item.enchant === 7) {
            if (prob > 70) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+8")
                return
            }
        }
        if (item.enchant === 8) {
            if (prob > 75) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+9")
                return
            }
        }
        if (item.enchant === 9) {
            if (prob > 80) {
                setItem({...item, enchant:item.enchant +1})
                setSucess(true)
                console.log(prob)
                console.log("+10")
                return
            }
        }
        else {
            setFailed(true)
            setItem({...item, enchant:item.enchant =0})
            console.log("O item quebrou!")
            console.log(prob)
        }
        

    }

    useEffect(() => {
        console.log(item);
      }, [item]);
    return(
        <>
        <div>
            <img src={aden} alt="" />
            <span>{item.name}</span>
            <span>{failed && "O item quebrou."}{sucess && "Sucesso no enchant!"}{max && "Enchant máximo atingido."}</span>
            <span>{item.enchant}</span>
            <button onClick={() => enchanting(item)}>ENCHANTAR</button>
        </div>
        </>
        
    )
}
