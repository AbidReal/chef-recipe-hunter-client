import React from "react";

const ErrorPage = () => {
  // const { error, status } = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className=" text-center align-middle font-extrabold text-8xl ">
        404 <br /> Error
      </div>
      {/* <div className=" mt-5 font-bold text-5xl">{error.message}</div> */}
    </div>
  );
};

export default ErrorPage;
