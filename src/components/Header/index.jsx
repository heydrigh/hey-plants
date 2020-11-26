import React from "react";
import logo from "../../assets/plants.svg";

import { HeaderContainer } from "./styles";

function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt='Logo' />
    </HeaderContainer>
  );
}

export default Header;
