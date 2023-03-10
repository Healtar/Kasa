
import "./style/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/Notfound/Notfound";
import Header from "./layout/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./layout/Footer/Footer";
import FicheLogement from "./pages/FicheLogement/FicheLogement";
import About from "./pages/About/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about/" element={<About />} />
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Notfound status={404} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
