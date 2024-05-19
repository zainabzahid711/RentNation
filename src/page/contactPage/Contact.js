import React from "react";
import Footer from "../../_components/footer/Footer";
import NavBar from "../../_components/navbar/NavBar";
import CustomInput from "../../_components/customInput/CustomInput";

function Contact() {
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
    { label: "About", id: "about", type: "textarea", placeholder: "About" },
  ];
  return (
    <>
      <NavBar />
      <CustomInput
        mainText={"Contact Us"}
        btnText={"contact us"}
        fields={fields}
      />
      <Footer />
    </>
  );
}

export default Contact;
