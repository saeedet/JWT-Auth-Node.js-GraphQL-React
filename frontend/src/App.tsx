import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./components/Header";
import Bye from "./pages/Bye";
import { KnownArgumentNamesOnDirectivesRule } from "graphql/validation/rules/KnownArgumentNamesRule";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/bye" element={<Bye />} />
      </Routes>
    </div>
  );
};

export default App;
