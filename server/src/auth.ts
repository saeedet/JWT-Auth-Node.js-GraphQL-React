import { sign } from "jsonwebtoken";
import { User } from "./entity/User";

export const createAccessToken = (user: User) => {
  return sign({ userId: user.id }, "saltysecret", {
    expiresIn: "15m",
  });
};

export const createRefreshToken = (user: User) => {
  return sign({ userId: user.id }, "someothersecret", {
    expiresIn: "7d",
  });
};
