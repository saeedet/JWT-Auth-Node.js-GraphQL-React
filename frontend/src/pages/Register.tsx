import React, { FormEvent, useRef } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [register] = useRegisterMutation();
  const navigate = useNavigate();

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    const response = await register({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
    console.log(response);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={registerHandler}>
        <input type="text" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
