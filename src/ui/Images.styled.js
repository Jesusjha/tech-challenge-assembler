import styled from "styled-components";

export const Logo = styled.img`
  height: ${({home}) => home ? '6rem' : "1.3rem"};
  margin: 0 0 0 1rem;
`;

export const Image = styled.img`
  width: 18rem;
  height: 12rem;
  object-fit: cover;
  border-radius: .6rem;
`;

