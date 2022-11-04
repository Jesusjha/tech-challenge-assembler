import styled from "styled-components";

export const FlexArticle = styled.article`
  display: flex;
  justify-content: ${({topmenu}) => topmenu ? 'center' : 'space-between'};
  width: ${({topmenu}) => topmenu ? '100%' : '17rem'};
  margin: ${({ topmenu }) => topmenu ? '3rem 0 2rem 0' : '0 0 1rem 0'};
`;

export const FlexHome = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const FlexImg = styled.article`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;