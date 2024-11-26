import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import MyDay from "./pages/MyDay.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyDay />} />
        <Route path="/myDay" element={<MyDay />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
