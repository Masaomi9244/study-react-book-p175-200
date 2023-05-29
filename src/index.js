import ReactDOM from "react-dom";
import { App } from "./App";
import { AdminFlagProvider } from "./component/providers/AdminFlagProvider";

ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById("root")
);
