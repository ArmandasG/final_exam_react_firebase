import "./styles/reset.css";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import AddShopPage from "./pages/AddShopPage";
import SingleShopPage from "./pages/SingleShopPage";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="">
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/shops" element={<ShopsPage />} />
          <Route path="/shops/new" element={<AddShopPage />} />
          <Route path="/shops/shopsUid" element={<SingleShopPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
