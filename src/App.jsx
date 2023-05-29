import { useState, memo, useCallback } from "react";
import { Child1 } from "./component/Child1";
import { Child4 } from "./component/Child4";

export const App = memo(() => {
  console.log("Appレンダリング");

  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum((prev) => prev + 1);
  };

  const onClickReset = useCallback(() => {
    setNum(0);
  }, []);

  return (
    <>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
      <Child1 onClickReset={onClickReset} />
      <Child4 />
    </>
  );
});
