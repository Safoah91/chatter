import { post, put } from "../..";

export const createBlog = async (body: any) => {
  return await post("blogs/blog/create", { ...body });
};
export const updateBlog = async (id: any, body: any) => {
  return await put(`blogs/blog/update/?id=${id}`, { ...body });
};
