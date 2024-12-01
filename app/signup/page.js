import React from "react";
import UserCredForm from "../_components/UserCredForm";

function SignIn() {
  return (
    <section className="w-full flex justify-center ">
      <UserCredForm type="signup" />
    </section>
  );
}

export default SignIn;
