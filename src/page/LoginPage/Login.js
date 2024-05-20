import React from "react";
import CustomInput from "../../_components/customInput/CustomInput";
import Footer from "../../_components/footer/Footer";
import Header from "../../_components/navHeader/Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function navigateToHome() {
    navigate("/");
  }

  const fields = [
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
        mainText={"Login"}
        onClick={navigateToHome}
        btnText={"Signin"}
        fields={fields}
      />
      <Footer />
    </>
  );
}

export default Login;
