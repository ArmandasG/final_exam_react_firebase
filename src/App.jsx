import "./styles/reset.css";
import "./styles/App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopsPage from "./pages/ShopsPage";
import AddShopPage from "./pages/AddShopPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import NotFound from "./pages/NotFound";
import { useAuthCtx } from "./store/AuthProvider";
import Feedback from "./components/feedback/Feedback";

function App() {
  const { isLoggedIn } = useAuthCtx()
  return (
    <div className="">
      <div className="container">
        <Header />
        <Feedback />
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to={'/shops'} /> : <LoginPage />} />
          <Route path="/login" element={isLoggedIn ?  <Navigate to={'/shops'} /> : <LoginPage />} />
          <Route path="/register" element={isLoggedIn ? <Navigate to={'/shops'} /> : <RegisterPage />} />
          <Route path="/shops" element={isLoggedIn ? <ShopsPage /> : <Navigate to={'/login'} />} />
          <Route path="/shops/new" element={isLoggedIn ? <AddShopPage /> : <Navigate to={'/login'} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
