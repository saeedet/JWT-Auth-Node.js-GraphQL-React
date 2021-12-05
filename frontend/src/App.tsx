import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import { useHelloQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { data, loading } = useHelloQuery();

  return (
    <div className="App">
      <Header />
      {loading || !data ? "Loading..." : data.hello}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
