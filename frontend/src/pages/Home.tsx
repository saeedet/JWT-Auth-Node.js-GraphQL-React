import React from "react";
import { useUsersQuery } from "../generated/graphql";

const Home: React.FC = () => {
  // fetchPolicy network-obly tells that I don't want to use the cache
  // I want to fetch from database everytime
  const { data } = useUsersQuery({ fetchPolicy: "network-only" });

  return (
    <div>
      {data ? (
        <div>
          <div>users:</div>
          <ul>
            {data.users.map((user) => (
              <li key={user.id}>
                {user.email}, {user.id}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
