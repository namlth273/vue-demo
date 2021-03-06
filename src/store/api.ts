import axios from "axios";
import { UserSubmit, User, UserResponse } from "./models";

export const conduitApi = axios.create({
  baseURL: "https://conduit.productionready.io/api",
});

export function setJWT(jwt: string) {
  conduitApi.defaults.headers.common["Authorization"] = `Token ${jwt}`;
}

export function clearJWT(jwt: string) {
  delete conduitApi.defaults.headers.common["Authorization"];
}

export async function loginUser(user: UserSubmit): Promise<User> {
  const response = await conduitApi.post("/users/login", {
    user,
  });
  return (response.data as UserResponse).user;
}
