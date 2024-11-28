import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import MyDay from "./pages/MyDay.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyDay />} />
        <Route path="/myDay" element={<MyDay />} />
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
