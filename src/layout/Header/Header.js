import './Header.scss'
import logo from '../../assets/logo.svg'
import Navbar from './Navbar/Navbar'


function Header() {
    

    return(
        <header className="k-header container">
            <img src={logo} alt="logo kasa" className='k-logo'/>
            <Navbar/>
        </header>
    )
}

export default Header