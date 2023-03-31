import { useState } from "react";
import style from "./main.module.scss";
import { Header } from "../header/header";
import { LoginScreen } from "./loginScreen/loginScreen";

export function Main() {
  const acc = [
    {
      name: "INÍCIO",
      content: "dasdasd",
    },
    {
      name: "FORUM",
      content: "dasdasd2dddddddddddddddd",
    },
    {
      name: "CONTA",
      content: <LoginScreen />,
    },
    {
      name: "CLANS",
      content: <LoginScreen />,
    },
    {
      name: "GUIAS",
      content: <LoginScreen />,
    },
    {
      name: "LOJA",
      content: <LoginScreen />,
    },
  ];
  const [content, setContent] = useState<string | JSX.Element>(acc[0].content);
  const [selectedItem, setSelectedItem] = useState<string>(acc[0].name);
  return (
    <div>
      <div>
        <nav className={style.headerNavBar}>
          {acc.map((item) => {
            return (
              <button
                className={style.btnMenu}
                key={item.name}
                onClick={() => {
                  setSelectedItem(item.name);
                  setContent(item.content);
                }}
              >
                {item.name}
              </button>
            );
          })}
        </nav>
      </div>
      {content}
    </div>
  );
}
