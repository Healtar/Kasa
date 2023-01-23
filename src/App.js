import logo from './logo.svg';
import './style/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './layout/Header/Header';
import Home from './pages/Home/Home'
import Footer from './layout/Footer/Footer';
import FicheLogement from './pages/FicheLogement/FicheLogement';


function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/logement/:id' element={<FicheLogement/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
