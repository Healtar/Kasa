import "./Banner.scss";
import styled from "styled-components";

export default function Banner({ img, caption }) {
  const StyledBanner = styled.div`
    box-shadow: inset 2000px 0 0 0 rgba(0, 0, 0, 0.4);
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `;

  return (
    <StyledBanner className="k-banner">
      {caption ? <span className="k-banner-caption">{caption}</span> : null}
    </StyledBanner>
  );
}
