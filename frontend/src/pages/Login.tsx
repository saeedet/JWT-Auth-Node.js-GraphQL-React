import React, { FormEvent, useRef } from "react";
import { useNavigate } from "react-router";
import { setAccessToken } from "../accessToken";
import { useLoginMutation } from "../generated/graphql";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const registerHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!emailRef.current || !passwordRef.current) return;
    const response = await login({
      variables: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    });
    console.log(response);
    if (response && response.data) {
      setAccessToken(response.data.login.accessToken);
    }
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={registerHandler}>
        <input type="text" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
