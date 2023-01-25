import {useEffect, useState} from "react";
import styled from 'styled-components';
import './Dropdown.scss';

export default function Dropdown({title, description}) {
    
    const [isOpen, setIsOpen] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
    const [styledContent, setStyledContent] = useState()


    const content = document.getElementById('content');
    const StyledContent = styled.content`
                            maxHeight: ${contentHeight};
                            padding: 0px;
                        `;

    const handleOpen = () => {
        setIsOpen(!isOpen)

    }
     useEffect(() => {
        if(isOpen)
        {
            const content = document.getElementById('content');
            const size = content.scrollHeight + 100;
            setContentHeight(size);
            StyledContent = styled.content`
                                maxHeight: ${contentHeight};
                                padding: 50px;
                            `;
}
        else
        {
            const content = document.getElementById('content');
            content.className = "offset offset__close";
            setContentHeight(0);
            StyledContent = styled.content`
                                maxHeight: ${contentHeight};
                                padding: 0px;
                            `;
        }
    
 },[isOpen])
    return(

       <div onClick={() => handleOpen()} className="dropdown-container">
        <h3>{title} {isOpen ? 'Open' : 'Close'}</h3>
        <StyledContent id="content" className="offset offset__open" style={{ maxHeight: `calc(${contentHeight}px)`,}}>{description}</StyledContent>
        {/* {isOpen === true ? <div className="offset offset__open">{description}</div> : <div className="offset offset__close">{description}</div>} */}
        </div> 
   
   
    
    
        
    
    )
    
}