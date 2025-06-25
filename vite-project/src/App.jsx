import { Routes, Route } from "react-router-dom"; // ✅ Importa os componentes do React Router
import Loja from "../src/pages/loja";
import Produto from "../src/pages/produto";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Loja />} />
      <Route path="/produto/:id" element={<Produto />} />
    </Routes>
  );
}

export default App;