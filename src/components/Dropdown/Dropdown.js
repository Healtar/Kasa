import {useState} from "react";
import './Dropdown.scss';

export default function Dropdown({title, description}) {
    
    const [isOpen, setIsOpen] = useState(false);


    const handleOpen = () =>{
        setIsOpen(!isOpen)
        console.log(isOpen);
    }

    return(
       <div onClick={() => handleOpen()} className="dropdown-container">
        <h3>{title}</h3>
        {isOpen === true ? <div className="offset offset__open">{description}</div> : <div className="offset offset__close">{description}</div>}
        </div> 
        
        
    
    )
    
}