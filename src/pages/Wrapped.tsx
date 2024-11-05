import { BrowserRouter } from "react-router-dom";
import App from "../App";

function Wrapped() {
  return (
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  );
}

export default Wrapped;
