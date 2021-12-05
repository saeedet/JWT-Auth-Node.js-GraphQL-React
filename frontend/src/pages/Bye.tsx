import React from "react";
import { useByeQuery } from "../generated/graphql";

const Bye = () => {
  const { data, loading, error } = useByeQuery();

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.log(error);
    return <div>Error happened!</div>;
  }
  if (!data) {
    return <div>No data!</div>;
  }

  return <div>{data.bye}</div>;
};

export default Bye;
