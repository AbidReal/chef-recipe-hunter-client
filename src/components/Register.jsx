import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const [error1, setError1] = useState("");
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => {
        console.log(error);
      });
    setError("");
    setError1("");
    if (password.length < 6) {
      setError("Password must be 6 characters long");
    } else if (email.length < 1 || password.length < 1) {
      setError1("You cannot submit empty email and password field");
    }
  };
  return (
    <div className="mx-auto my-32 w-5/6 lg:w-1/3">
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div>
          <div className="mb-2">
            <div className="mb-2 block">
              <Label htmlFor="base" value="Name" />
            </div>
            <TextInput id="base" type="text" name="name" sizing="md" />
          </div>
          <div className="mb-2 block">
            <Label htmlFor="email2" value="Your email" />
          </div>
          <TextInput
            id="email2"
            type="email"
            name="email"
            placeholder="name@email.com"
            required={true}
            shadow={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password2" value="Your password" />
          </div>
          <TextInput
            id="password2"
            type="password"
            name="password"
            required={true}
            shadow={true}
            helperText={
              <React.Fragment>
                {" "}
                <span className="text-red-500">{error}</span>
              </React.Fragment>
            }
          />
        </div>
        <div>
          <div>
            <div className="my-2 block">
              <Label htmlFor="base" value="Photo URL" />
            </div>
            <TextInput
              id="base1"
              type="text"
              name="photo"
              sizing="md"
              helperText={
                <React.Fragment>
                  Already have an account?
                  <Link
                    to="/login"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    {" "}
                    Login
                  </Link>
                </React.Fragment>
              }
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            className="text-green-400 focus:ring-green-400"
            id="agree"
            required={true}
          />
          <Label htmlFor="agree">
            I agree with the
            <Link
              to="/forms"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              {" "}
              terms and conditions
            </Link>
          </Label>
        </div>
        <Button className="bg-green-500  hover:bg-green-400" type="submit">
          Register new account
        </Button>
        <p className="text-red-500">{error1}</p>
      </form>
    </div>
  );
};
export default Register;
