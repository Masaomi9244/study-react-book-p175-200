import { useContext } from "react";
import { Card } from "./component/Card";
import { AdminFlagContext } from "./component/providers/AdminFlagProvider";

export const App = () => {
  // 管理者フラグ
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 切り替えボタン押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card isAdmin={isAdmin} />
    </div>
  );
};
