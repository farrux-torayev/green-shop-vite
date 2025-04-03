import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./pages/home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import LoginForm from "./components/Login";
import MyProducts from "./Dashboard/myproducts";
import Card from "./Dashboard/cardmain/card";

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route path="/login" element={<LoginForm setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/dashboard/myproducts" element={<MyProducts />} />
        <Route path="/dashboard/cardmain/card/:id" element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
