import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import Navbar from "./components/navbar/Navbar";
import Vegetables from "./Pages/VegetablesPage";
import HeroScan from "./components/hero/HeroScan";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vegetables" element={<Vegetables initial={null}/>} />
        <Route path="/scanpage" element={<HeroScan />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
