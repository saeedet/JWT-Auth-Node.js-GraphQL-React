import React, { useEffect, useState } from "react";
import axios from "axios";
import App from "./App";
import { setAccessToken } from "./accessToken";

const AuthMiddleware: React.FC = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:4000/refresh_token", {
        withCredentials: true,
      })
      .then((data) => {
        setAccessToken(data.data.accessToken);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <App />;
};

export default AuthMiddleware;
