import {useEffect, useState} from "react";
import styled from 'styled-components';
import './Dropdown.scss';

export default function Dropdown({title, description}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);




    const handleOpen = () => {
        setIsOpen(!isOpen)

    }
     useEffect(() => {
        if(isOpen)
        {
            const content = document.getElementById('content');
            const size = content.scrollHeight + 100;
            content.className = "offset offset__open";
            setContentHeight(size);

}
        else
        {
            const content = document.getElementById('content');
            content.className = "offset offset__close";
            setContentHeight(0);

        }
    
 },[isOpen])
    return(

       <div onClick={() => handleOpen()} className="dropdown-container">
        <h3>{title} {isOpen ? 'Open' : 'Close'}</h3>
        <p id="content" className="offset offset__open" style={{ maxHeight: `${contentHeight}px`,}}>{description}</p>
        {/* {isOpen === true ? <div className="offset offset__open">{description}</div> : <div className="offset offset__close">{description}</div>} */}
        </div> 
   
   
    
    
        
    
    )
    
}