import logo from "./logo.svg";
import MainLayout from "./Components/MainLayout/MainLayout";
import StateProvider from "./Components/StateProvider";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import reducer, { initialState } from "./utils/reducer";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="products" element={<Products />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment" element={<Payment />} />

          </Routes>
        </MainLayout>
      </BrowserRouter>
    </StateProvider>
  );
}

export default App;
