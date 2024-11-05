import GalaxySProduct from "./pages/GalaxySProduct";
import Home from "./pages/Home";
import PaymentDetail from "./pages/PaymentDetail";
import ZFlipProduct from "./pages/ZFlipProduct";
import ZFoldProduct from "./pages/ZFoldProduct";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="GalaxySProduct"
          element={<GalaxySProduct></GalaxySProduct>}
        ></Route>
        <Route
          path="ZFlipProduct"
          element={<ZFlipProduct></ZFlipProduct>}
        ></Route>
        <Route
          path="ZFoldProduct"
          element={<ZFoldProduct></ZFoldProduct>}
        ></Route>
        <Route
          path="PaymentDetail"
          element={<PaymentDetail></PaymentDetail>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
