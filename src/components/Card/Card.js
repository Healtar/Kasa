import "./Card.scss";
import styled from "styled-components";

export default function Card({ title, cover }) {
  const StyledCard = styled.div`
    background-image: url(${cover});
    background-size: cover;
    width: 100%;
    font-size: 8px;
    height: 100%;
    border-radius: 10px;
  `;

  return (
    <StyledCard className="card">
      <h3 className="card-caption">{title}</h3>
    </StyledCard>
  );
}
