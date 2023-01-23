// import React from "react";
import logements from '../../../data/logements.json';
import Tag from '../../Tag/Tag'
import { useParams } from "react-router-dom";
import Dropdown from '../../Dropdown/Dropdown';



export default function FicheLogement({title}) {
    const params = useParams();
    const id = params.id
    console.log(logements);
    const logement = logements.find((logement) => logement.id === id);
    console.log(logement);
    return(
        <main className="k-fiche-logement container">
            {/* <img src={}/> */}
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
            <ul>
                {logement.tags.map((tag) => {
                   return <li key={tag}><Tag text={tag}/></li>
                })}
            </ul>
            <Dropdown title="Description" description={logement.description}/>
        </main>
    )
}