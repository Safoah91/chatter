import { post, put } from "../..";

export const createBlog = async (body: any) => {
  return await post("blogs/create", { ...body });
};
export const updateBlog = async (body: any) => {
  return await put("blog/update", { ...body });
};
