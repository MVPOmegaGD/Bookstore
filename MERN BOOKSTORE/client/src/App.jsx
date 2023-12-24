import "./App.module.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TopBack from "./components/backToTop";
import AuthProvider from "./contacts/AuthProvider";
import { useState } from "react";

function App() {  
  // const [user, setUser] = useState(true);

  // const handleLogin = () => {
  //   setUser(true);
  // };

  // const handleLogout = () => {
  //   setUser(false);
  // };

  return (
    <AuthProvider>
      <div>
        <Navbar/>
        <Outlet />
        <TopBack />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
