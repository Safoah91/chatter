import { FC, useState } from "react";
import AuthLayout from "..";
import Button from "components/button";

const Register: FC<{}> = () => {
  const [registerData, setRegisterData] = useState<any>({});

  const handleChange = (e: any) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <AuthLayout>
        <>
          <h2 className="text-3xl font-bold text-center">
            Register as a Writer/Reader
          </h2>
          <form className="flex items-center justify-center">
            <div>
              <div className="flex gap-3 my-6">
                <div className="w-72">
                  <label
                    className="block text-gray-500 mb-3"
                    htmlFor="firstName"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={registerData["firstName"] || ""}
                    onChange={handleChange}
                    placeholder="eg. John"
                    className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                  />
                </div>

                <div className="w-72">
                  <label
                    className="block text-gray-500 mb-3"
                    htmlFor="lastName"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={registerData["lastName"] || ""}
                    onChange={handleChange}
                    placeholder="eg. Doe"
                    className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                  />
                </div>
              </div>
              <div className="w-[36.7rem]">
                <label className="block text-gray-500 mb-3" htmlFor="join">
                  You are joining as?
                </label>
                <select
                  name="join"
                  value={registerData["join"] || ""}
                  onChange={handleChange}
                  id="join"
                  className="w-full rounded-md border-gray-300 "
                >
                  <option value="">Select...</option>
                  <option value="writer">Writer</option>
                  <option value="reader">Reader</option>
                </select>
              </div>

              <div className="w-[36.7rem] my-6">
                <label className="block text-gray-500 mb-3" htmlFor="email">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={registerData["email"] || ""}
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
                  value={registerData["password"] || ""}
                  onChange={handleChange}
                  placeholder="****************"
                  className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                />
              </div>
              <div className="w-[36.7rem] my-6">
                <label
                  className="block text-gray-500 mb-3"
                  htmlFor="confirmPassword"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={registerData["confirmPassword"] || ""}
                  onChange={handleChange}
                  placeholder="****************"
                  className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                />
              </div>
              <div className="w-[36.7rem] my-6">
                <Button type="primary" text="Create account" />
              </div>
            </div>
          </form>
        </>
      </AuthLayout>
    </>
  );
};

export default Register;
