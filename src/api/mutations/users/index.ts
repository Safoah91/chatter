import { post } from "../..";

export const registerUser = async (body: any) => {
  return await post("auth/register", { ...body });
};

export const loginUser = async (body: any) => {
  return await post("auth/login", { ...body });
};
