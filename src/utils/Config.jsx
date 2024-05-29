import { GetAuth } from "./Auth";

export const config = () => {
  const myToken = GetAuth("token");
  return {
    headers: { Authorization: `Bearer ${myToken}` },
  };
};

export const baseUrl = "http://localhost:8080"