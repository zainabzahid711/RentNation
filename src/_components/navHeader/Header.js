import React from "react";
import logoImage from "../../_assets/svg/logo.svg";
import Button from "../button/Button";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div class="row">
        <img src={logoImage} alt="company-logo" />
        <Link to="/login">
          <Button title={"Login"} />
        </Link>
      </div>
    </>
  );
}

export default Header;
