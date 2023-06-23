import Button from "components/button";
import { FC, useCallback, useState } from "react";
import AuthLayout from "..";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { loginUser } from "api/mutations/users";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Login: FC<{}> = () => {
  const [loginData, setLoginData] = useState<any>({});
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e?.target?.name]: e?.target?.value,
    });
  };

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (body: any) => loginUser(body),
    onSuccess: (response) => {
      toast?.success("Welcome again!");
      Cookies.set("accessToken", response.token);
      navigate("/main");
    },
    onError: (e: any) => {
      console.log(e);
      toast?.error("Email and password wrong");
    },
  });

  const handleSubmission = useCallback(
    async (e: any) => {
      e?.preventDefault();

      if (loginData.email === undefined) {
        return toast?.error("Email can't be empty");
      }

      if (loginData.password === undefined) {
        return toast?.error("Password can't be empty");
      }

      if (
        loginData.email.split("").filter((x: any) => x === "@").length !== -1 &&
        loginData.email.indexOf(".") === -1
      ) {
        return toast?.error("Email is invalid");
      }

      mutateAsync({
        ...loginData,
      });
    },
    [loginData, mutateAsync]
  );

  return (
    <>
      <AuthLayout>
        <>
          <h2 className="text-3xl font-bold text-center">Welcome back</h2>
          <form
            onSubmit={handleSubmission}
            className="flex items-center justify-center"
          >
            <div>
              <div className="w-[36.7rem] my-6">
                <label className="block text-gray-500 mb-3" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={loginData["email"] || ""}
                  onChange={handleChange}
                  placeholder="eg. you@example.com"
                  className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                />
              </div>
              <div className="w-[36.7rem] my-6">
                <label className="block text-gray-500 mb-3" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={loginData["password"] || ""}
                  onChange={handleChange}
                  placeholder="****************"
                  className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                />
              </div>
              <div className="w-[36.7rem] my-6">
                <Button
                  type="primary"
                  text={isLoading ? "logging in..." : "Log in"}
                  onClick={handleSubmission}
                />
              </div>
            </div>
          </form>
        </>
      </AuthLayout>
    </>
  );
};

export default Login;
