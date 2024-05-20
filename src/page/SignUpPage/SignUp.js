import React from "react";
import Footer from "../../_components/footer/Footer";
import CustomInput from "../../_components/customInput/CustomInput";
import Header from "../../_components/navHeader/Header";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };
  const fields = [
    { label: "Name", id: "name", type: "text", placeholder: "Enter your name" },
    {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      id: "password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];
  return (
    <>
      <Header />
      <CustomInput
        mainText={"Sign Up"}
        onClick={navigateToHomePage}
        btnText={"Sign up"}
        fields={fields}
      />
      <Footer />
    </>
  );
}

export default SignUp;
