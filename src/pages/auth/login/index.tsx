import Button from "components/button";
import { FC, useState } from "react";
import AuthLayout from "..";

const Login: FC<{}> = () => {
  const [loginData, setLoginData] = useState<any>({});

  const handleChange = (e: any) => {
    setLoginData({
      ...loginData,
      [e?.target?.name]: e?.target?.value,
    });
  };

  return (
    <>
      <AuthLayout>
        <>
          <h2 className="text-3xl font-bold text-center">Welcome back</h2>
          <form className="flex items-center justify-center">
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
                <Button type="primary" text="Log in" />
              </div>
            </div>
          </form>
        </>
      </AuthLayout>
    </>
  );
};

export default Login;
