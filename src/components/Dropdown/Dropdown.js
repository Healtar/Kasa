import './Dropdown.scss';

export default function Dropdown({title, description}) {
    

    return(
       <div className="dropdown-container">
        <h3>{title}</h3>
        <div className="offset">{description}</div>
    </div> 
    )
    
}