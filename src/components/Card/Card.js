import './Card.scss';
import styled from 'styled-components';



export default function Card({title, cover}) {
    
    const StyledCard = styled.div`
        background-image: url(${cover});
        background-size: cover;
        max-width: 100%;
        font-size: 8px;
        height: 100%;
        border-radius: 20px;


    `

    return(
        <StyledCard>
            <h3>{title}</h3>
        </StyledCard>
    )
}