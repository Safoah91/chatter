import { useRef, useState, useCallback } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { createBlog } from "api/mutations/blogs";
import Button from "components/button";
import { get } from "api";
import { useCookies } from "react-cookie";

const CreateBlog = () => {
  const editorRef = useRef<any>(null);
  const [blogData, setBlogData] = useState<any>({});
  const [isPublished, setIsPublished] = useState(false);
  const [isDrafted, setIsDrafted] = useState(false);
  const navigate = useNavigate();
  const [{ user }] = useCookies(["user"]);

  const handleChange = (e: any) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const { data, isFetching } = useQuery(["listCategories"], () =>
    get("/categories")
  );

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (body: any) => createBlog(body),
    onSuccess: () => {
      toast?.success("blog created successfully!");
      navigate("/main/blogs");
    },
    onError: (e: any) => {
      console.log(e);
      toast?.error("Unable to create blog post");
    },
  });

  const handleSubmission = useCallback(
    async (e: any) => {
      e?.preventDefault();

      if (blogData.title === undefined) {
        return toast?.error("title can't be empty");
      }

      if (blogData.category === undefined) {
        return toast?.error("Category can't be empty");
      }

      let blogBody = editorRef.current.getContent();

      if (editorRef.current === "") {
        console.log(blogBody);
        return toast?.error("Be sure to enter blog content");
      }

      if (!editorRef.current) {
        console.log(blogBody);
        return toast?.error("Be sure to enter blog content");
      }

      
      if(isPublished) {
         mutateAsync({
        ...blogData,
        body: blogBody,
        userID: user.user.id,
        isPublished: true,
        publishedAt:  Date.now(),
        isDrafted: false
      });
      }
      
      if(isDrafted) {
         mutateAsync({
        ...blogData,
        body: blogBody,
        userID: user.user.id,
        isPublished: false,
        isDrafted: true,
        draftedAt:  Date.now()
      });
      }
     
    },
    [blogData, mutateAsync, user, isPublished,isDrafted]
  );

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmission}
          className="flex items-start justify-center gap-6"
        >
          <div className="w-1/4">
            <div className="w-full my-4">
              <label className="block text-gray-500 mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                name="title"
                value={blogData["title"] || ""}
                onChange={handleChange}
                placeholder="eg. The rapid development life cycle"
                className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
              />
            </div>
            <div className="w-full my-4">
              <label className="block text-gray-500 mb-2" htmlFor="readTime">
                Read Time
              </label>
              <input
                type="text"
                name="readTime"
                value={blogData["readTime"] || ""}
                onChange={handleChange}
                placeholder="eg. 10 mins"
                className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-500 mb-2" htmlFor="joinAs">
                Categories
              </label>
              <select
                name="category"
                value={blogData["category"] || ""}
                onChange={handleChange}
                id="category"
                className="w-full rounded-md border-gray-300 "
              >
                <option value="">Select category...</option>
                {isFetching ? (
                  <option value="">Loading...</option>
                ) : (
                  data?.category?.map((categoryItem: any) => (
                    <option key={categoryItem?._id} value={categoryItem?._id}>
                      {categoryItem?.title}
                    </option>
                  ))
                )}
              </select>
            </div>
            <div className="w-full my-4">
              <label className="block text-gray-500 mb-2" htmlFor="except">
                Except <small className="text-gray-400 text-xs">max characters 300</small>
              </label>
              <textarea
                name="except"
                id="except"
                cols={30}
                rows={7}
                maxLength={300}
                onChange={handleChange}
                placeholder="eg. Blog summary"
                className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
              ></textarea>
            </div>
          </div>
          <div className="w-3/4">
            <Editor
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue=""
              init={{
                height: 500,
                menubar: false,
                plugins: [
                  "a11ychecker",
                  "advlist",
                  "advcode",
                  "advtable",
                  "autolink",
                  "checklist",
                  "export",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "powerpaste",
                  "fullscreen",
                  "formatpainter",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | casechange blocks | bold italic backcolor | " +
                  "alignleft aligncenter alignright alignjustify | " +
                  "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              }}
            />
            <div className="flex justify-end">
              <div className="w-[40rem] mt-6 mb-4 flex gap-4">
                <Button
                  type="secondary"
                  onClick={() => {
                    setIsDrafted(true);
                  }}
                  text={isLoading ? "Saving to draft..." : "Save to draft"}
                />

                <Button
                  type="primary"
                  onClick={() => {
                    setIsPublished(true);
                  }}
                  text={isLoading ? "Publishing..." : "Publish post"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
