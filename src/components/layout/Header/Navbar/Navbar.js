import { Link, Outlet } from "react-router-dom";
import './Navbar.scss'

export default function Navbar() {
    


    return(
            <nav className="k-main-nav">
                <ul>
                    <li><Link to='../../home'>ACCUEIL</Link></li>
                    <li><Link to=''>A&nbsp;PROPOS</Link></li>
                </ul>
                <Outlet/>
            </nav>
        
    )
}