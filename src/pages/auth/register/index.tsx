import { FC, useState, useCallback, useEffect } from "react";
import AuthLayout from "..";
import Button from "components/button";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { useMutation } from "react-query";
import { registerUser } from "api/mutations/users";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { auth, provider } from "firebase.config";
import { signInWithPopup } from "firebase/auth";

const Register: FC<{}> = () => {
  const [registerData, setRegisterData] = useState<any>({});
  const [value, setValue] = useState<any>();
  const [data, setData] = useState<any>();
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: (body: any) => registerUser(body),
    onSuccess: () => {
      toast?.success("Account created successfully!");
      navigate("/login");
    },
    onError: (e: any) => {
      console.log(e);
      toast?.error("Could not log user in: ");
    },
  });

  const handleSubmission = useCallback(
    async (e: any) => {
      e?.preventDefault();

      if (registerData.firstName === undefined) {
        return toast?.error("Email can't be empty");
      }

      if (registerData.lastName === undefined) {
        return toast?.error("Email can't be empty");
      }

      if (registerData.joinAs === undefined) {
        return toast?.error("select join as");
      }

      if (registerData.email === undefined) {
        return toast?.error("Email can't be empty");
      }

      if (registerData.password === undefined) {
        return toast?.error("Password can't be empty");
      }

      if (registerData.confirmPassword === undefined) {
        return toast?.error("Confirm password can't be empty");
      }

      if (
        registerData.email.split("").filter((x: any) => x === "@").length !==
          -1 &&
        registerData.email.indexOf(".") === -1
      ) {
        return toast?.error("Email is invalid");
      }

      if (registerData.password !== registerData.confirmPassword) {
        return toast?.error("password and confirm password are not the same");
      }

      mutateAsync({
        ...registerData,
      });
    },
    [registerData, mutateAsync]
  );

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data: any) => {
      setValue(data?.user?.email);
      setData(data?.user?.uid);
      localStorage.setItem("googleAuthUserEmail", data?.user?.email);
      localStorage.setItem("googleAuthUserID", data?.user?.uid);
      navigate("/login");
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("googleAuthUserEmail"));
    setData(localStorage.getItem("googleAuthUserID"));
  }, []);

  return (
    <>
      <AuthLayout>
        <>
          <h2 className="text-3xl font-bold text-center -mt-9">
            Register as a Writer/Reader
          </h2>
          <form
            onSubmit={handleSubmission}
            className="flex items-center justify-center"
          >
            <div>
              <div className="md:flex md:gap-3 my-4">
                <div className="mb-3 md:mb-0 w-[20.7rem] md:w-72">
                  <label
                    className="block text-gray-500 mb-2"
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

                <div className="w-[20.7rem] md:w-72">
                  <label
                    className="block text-gray-500 mb-2"
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
              <div className="w-[20.7rem] md:w-[36.7rem]">
                <label className="block text-gray-500 mb-2" htmlFor="joinAs">
                  You are joining as?
                </label>
                <select
                  name="joinAs"
                  value={registerData["joinAs"] || ""}
                  onChange={handleChange}
                  id="joinAs"
                  className="w-full rounded-md border-gray-300 "
                >
                  <option value="">Select...</option>
                  <option value="writer">Writer</option>
                  <option value="reader">Reader</option>
                </select>
              </div>

              <div className="w-[20.7rem] md:w-[36.7rem] my-4">
                <label className="block text-gray-500 mb-2" htmlFor="email">
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
              <div className="w-[20.7rem] md:w-[36.7rem] my-4">
                <label className="block text-gray-500 mb-2" htmlFor="password">
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
              <div className="w-[20.7rem] md:w-[36.7rem] my-4">
                <label
                  className="block text-gray-500 mb-2"
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
              <div className="w-[20.7rem] md:w-[36.7rem] mt-6 mb-4">
                <Button
                  type="primary"
                  onClick={handleSubmission}
                  text={isLoading ? "Creating..." : "Create account"}
                />
              </div>
              <div className="w-[20.7rem] md:w-[36.7rem] my-4">
                <div
                  className="w-full border border-gray-300 text-gray-600 rounded-md text-base font-normal px-8 py-2.5 hover:text-gray-700 transition-all duration-300 flex justify-center items-center gap-3 hover:border-gray-400 hover:cursor-pointer"
                  onClick={handleClick}
                >
                  <FcGoogle size={25} />
                  <span className="text-base">Sign up with google</span>
                </div>
              </div>
              <div className="w-[20.7rem] md:w-[36.7rem] my-4">
                <div className="w-full border border-gray-300 text-gray-600 rounded-md text-base font-normal px-8 py-2.5 hover:text-gray-700 transition-all duration-300 flex justify-center items-center gap-3 hover:border-gray-400 hover:cursor-pointer">
                  <BsLinkedin size={23} fill="#0077B7" className="" />
                  <span className="text-base">Sign up with Linkedin</span>
                </div>
              </div>
            </div>
          </form>
        </>
      </AuthLayout>
    </>
  );
};

export default Register;
