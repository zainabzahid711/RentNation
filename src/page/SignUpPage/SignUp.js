import React from "react";
import Footer from "../../_components/footer/Footer";
import NavBar from "../../_components/navbar/NavBar";
import CustomInput from "../../_components/customInput/CustomInput";

function SignUp() {
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
      <NavBar />
      <CustomInput mainText={"Sign Up"} btnText={"Sign up"} fields={fields} />
      <Footer />
    </>
  );
}

export default SignUp;
