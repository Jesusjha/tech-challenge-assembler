import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FlexArticle, GridMain, Logo, MenuBtn, Nav } from "../ui";
import logoNav from "../assets/images/logo.png";
import { Searchbar, Username } from "./index";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <GridMain>
        <Nav>
          <Logo src={logoNav} onClick={() => navigate("gifs")} />
          <FlexArticle>
            <Searchbar />
            <article>
              <Username />
            </article>
          </FlexArticle>
        </Nav>
        <FlexArticle topmenu>
          <MenuBtn onClick={() => navigate("gifs")}>GIFS</MenuBtn>
          <MenuBtn onClick={() => navigate("memes")}>MEMES</MenuBtn>
        </FlexArticle>
      </GridMain>
      <Outlet />
    </>
  );
};

export default Navbar;
