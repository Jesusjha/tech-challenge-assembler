import styled from "styled-components";

export const Nav = styled.article`
  grid-area: nav;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center
`;

export const Dashboard = styled.section`
  grid-area: dashboard;
  height: 100vh;
  /* border: 1px solid red; */
`;

export const GridMain = styled.main`
  display: grid;
  grid:
    'nav' 3.2rem
    'dashboard' auto
`;