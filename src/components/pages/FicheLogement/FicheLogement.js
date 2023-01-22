// import React from "react";
import { useParams } from "react-router-dom";



export default function FicheLogement() {
    const params = useParams();
    const id = params.id
    return(
        <h1>{id}</h1>
    )
}