import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { Guide } from "./guias/guias";
import { Header } from "../components/header/header";
import { Background } from "../components/background/background";
import { Main } from "../components/main/main";
import { Loja } from "./Loja/loja";
import { Homecontent } from "./home/homeContent";
import { Age } from "../components/age/age";
import { Enchant } from "../components/enchant/enchant";
import { ListItems } from "../components/listItems/listItems";
import { useState } from "react";

export function Home() {
  const [item, setItem] = useState();
  return (
    <BrowserRouter>
      <Header />
      <ListItems item={item} setItem={setItem} />
      <Routes>
        <Route path="/inicio" element={<Homecontent />} />
        {/* <Route path="/guias" element={<Guide />} /> */}
        <Route path="/loja" element={<Loja />} />
      </Routes>
      <Background />
    </BrowserRouter>
  );
}
