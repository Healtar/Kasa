import logo from './logo.svg';
import './style/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Home from './components/pages/Home/Home'
import Footer from './components/layout/Footer/Footer';
import FicheLogement from './components/pages/FicheLogement/FicheLogement';


function App() {
  return (
   <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/logement/:id' element={<FicheLogement/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
  );
}

export default App;
