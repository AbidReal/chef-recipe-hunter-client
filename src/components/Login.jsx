import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/Bs";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [error2, setError2] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError2(error.message);
      });
    setError2("");
  };
  return (
    <div className=" my-32 mx-auto w-5/6 lg:w-1/3 ">
      <form onSubmit={handleLogin} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="name@email.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Your password" />
          </div>
          <TextInput
            placeholder="password"
            id="password1"
            type="password"
            name="password"
            required={true}
            helperText={
              <React.Fragment>
                Don't have an account?
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  {" "}
                  Register
                </Link>
              </React.Fragment>
            }
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            className="text-green-400 focus:ring-green-400"
            id="remember"
          />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button className="bg-green-500  hover:bg-green-400" type="submit">
          Login
        </Button>
      </form>
      <p className="text-red-500">{error2}</p>
      <div className="my-10 text-center items-center align-middle">
        Or use one of these options{" "}
      </div>
      <div className="flex gap-10 text-center items-center justify-center text-4xl">
        <FcGoogle />
        <BsGithub />
      </div>
    </div>
  );
};

export default Login;
