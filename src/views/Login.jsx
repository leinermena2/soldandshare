import React from "react";
import FormLogin from "../components/Forms/FormLogin";
import NavBarRegister from "../components/Navbars/NavBarRegister";
import Footer from "../components/Footer/Footer";


function Login() {
  return (
    <>
      <NavBarRegister />
        <div>
        <FormLogin />
      </div>
      <Footer />
    </>
  );
}

export default Login;
