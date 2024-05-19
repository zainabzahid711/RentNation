import React from "react";
import NavBar from "../../_components/navbar/NavBar";
import CustomInput from "../../_components/customInput/CustomInput";
import Footer from "../../_components/footer/Footer";

function Login() {
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
      <NavBar />
      <CustomInput mainText={"Login"} btnText={"Signin"} fields={fields} />
      <Footer />
    </>
  );
}

export default Login;
