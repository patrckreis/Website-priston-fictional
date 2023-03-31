import style from "./background.module.scss";

export function Background() {
  return (
    <div className="App">
      <div className={style.pageWrapper}> </div>
      <div className={style.backgroundImg}></div>
    </div>
  );
}
