import logo from "./logo.svg";
import "./style/global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
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
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
