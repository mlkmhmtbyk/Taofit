import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import MyDay from "./pages/MyDay.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyDay />} />
        <Route path="/myDay" element={<MyDay />} />
      </Routes>
    </>
  );
}

export default App;
