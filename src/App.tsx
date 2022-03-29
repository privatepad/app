import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Create from "./components/pages/Create";
import Home from "./components/pages/Home";
import Admin from "./components/pages/Admin";
import Pools from "./components/pages/Pools";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/pools" element={<Pools />} />
        <Route path="/create" element={<Create />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
