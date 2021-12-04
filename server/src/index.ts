import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./UserResolver";
import { createConnection } from "typeorm";
import { MyContext } from "./types/MyContext";
import "dotenv/config";

(async () => {
  const app = express();
  console.log(process.env.ACCESS_TOKEN_SECRET);
  console.log(process.env.REFRESH_TOKEN_SECRET);

  app.get("/", (_req, res) => res.send("Hello"));

  await createConnection();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }: MyContext) => ({ req, res }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({
    app,
    cors: {
      credentials: true,
      origin: "https://studio.apollographql.com",
    },
  });

  app.listen(4000, () => {
    console.log("express server started on port: 4000");
  });
})();
