import { post } from "../..";

export const categories = async (body: any) => {
  return await post("/categories", { ...body });
};
