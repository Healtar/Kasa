import { Link, Outlet } from "react-router-dom";
import logements from '../../data/logements.json';
import './Home.scss'
import Card from '../../components/Card/Card';


export default function Home() {
    

    return(
        <main className='k-home'>
            <div className='container'>
               <ul className='logements-list'>
                {logements.map((logement) => {
                  return <li key={logement.id} className='card'><Link to={`../logement/${logement.id}`}><Card title={logement.title} cover={logement.cover}/></Link></li>
                })}
                </ul> 
                <Outlet/>
            </div>
            
        </main>
    )
}