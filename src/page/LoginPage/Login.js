import React from "react";
import CustomInput from "../../_components/customInput/CustomInput";
import Footer from "../../_components/footer/Footer";
import Header from "../../_components/navHeader/Header";

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
      <Header />
      <CustomInput mainText={"Login"} btnText={"Signin"} fields={fields} />
      <Footer />
    </>
  );
}

export default Login;
