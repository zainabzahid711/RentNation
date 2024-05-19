import React from "react";
import logoImage from "../../_assets/svg/logo.svg";
import Button from "../button/Button";

function Header() {
  return (
    <>
      <div class="row">
        <img src={logoImage} alt="company-logo" />
        <Button title={"Login"} />
      </div>
    </>
  );
}

export default Header;
