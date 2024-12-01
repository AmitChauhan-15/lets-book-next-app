"use client";
import React from "react";
import Input from "./Input";
import Link from "next/link";
import { loginAction, signUpAction } from "../_lib/actions";
import { useFormStatus } from "react-dom";
import Button from "./Button";

function UserCredForm({ type = "signup", className = "" }) {
  const isSignUp = type === "signup";

  return (
    <form action={isSignUp ? signUpAction : loginAction} className={`min-w-96 mt-10 px-10 py-6 rounded-lg shadow-lg flex flex-col gap-6 ${className}`}>
      <h1 className="font-bold text-xl">{isSignUp ? "Sign Up" : "Login"}</h1>
      {isSignUp && <Input name="name" type="text" label="Full Name" required />}
      <Input name="email" type="email" label="Email" required />
      <Input name="password" type="password" label="Password" required />
      <FormStatusButton type={type} />
      <span className="text-xs text-gray-400">
        {isSignUp ? "Already have account? " : "New Here? "}
        <Link href={isSignUp ? "/login" : "/signup"} className="text-xs font-medium text-gray-900">
          {isSignUp ? "Login Here" : "SignUp Here"}
        </Link>
      </span>
    </form>
  );
}

function FormStatusButton({ type }) {
  const { pending } = useFormStatus();
  const isSignUp = type === "signup";

  return (
    <Button type="submit" disabled={pending}>
      {isSignUp ? (pending ? "Signing Up...." : "Sign Up") : pending ? "Login...." : "Login"}
    </Button>
  );
}

export default UserCredForm;
