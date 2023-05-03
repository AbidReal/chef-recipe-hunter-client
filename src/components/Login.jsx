import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" my-32 mx-auto w-5/6 lg:w-1/3 ">
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
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
    </div>
  );
};

export default Login;
