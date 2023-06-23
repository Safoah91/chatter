import Button from "components/button";
import { FC } from "react";
import AuthLayout from "..";

const Confirmation: FC<{}> = () => {
  return (
    <>
      <AuthLayout>
        <>
          <h2 className="text-3xl font-bold text-center">
            Register as a Writer/Reader
          </h2>
          <p className="text-base text-center">
            We emailed you a code. Please input the code here for account
            verification
          </p>
          <form className="mx-auto flex items-center justify-center">
            <div>
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
                  placeholder="****************"
                  className="w-full rounded-md border-gray-300 placeholder:text-gray-300"
                />
              </div>
              <div className="w-[36.7rem] my-6">
                <Button type="primary" text="Confirm" />
              </div>
            </div>
          </form>
        </>
      </AuthLayout>
    </>
  );
};

export default Confirmation;
