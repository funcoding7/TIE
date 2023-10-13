import styled from "styled-components";

export const Image = styled.img`

  width: 100%;
  height: auto;
  max-width: 100%;
  padding: 5px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumb 0.5s;
  margin-right: 20px; /* Add margin-right directly without the && selector */
  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
