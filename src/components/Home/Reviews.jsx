import { Carousel } from "flowbite-react";
import React from "react";

const Reviews = () => {
  return (
    <div>
      <div className="text-6xl mt-24 mb-4 font-extrabold">Customer Review</div>
      <div className="mb-10">See what our customers think about us</div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <div className=" h-full items-center justify-center bg-gradient-to-b from-green-100 to-green-300 text-center flex flex-col ">
            <p className="font-extrabold  lg:text-2xl ">Tom Holland</p>
            <p className=" mb-4 lg:mb-10">Actor</p>
            <p className=" lg:text-lg w-5/6">
              I was impressed by the wide variety of recipes available, ranging
              from simple everyday meals to more elaborate dishes for special
              occasions.
            </p>
          </div>
          <div className="flex h-full items-center justify-center bg-gradient-to-b from-green-100 to-green-300 flex-col ">
            <p className="font-extrabold  lg:text-2xl ">Johnny Depp</p>
            <p className=" mb-4 lg:mb-10">Actor</p>
            <p className=" lg:text-lg w-5/6">
              The website is easy to navigate, with clear categories and search
              options that make it simple to find what you're looking for.
            </p>
          </div>
          <div className="flex h-full items-center justify-center bg-gradient-to-b from-green-100 to-green-300 flex-col ">
            <p className="font-extrabold  lg:text-2xl ">Bill Gates</p>
            <p className=" mb-4 lg:mb-10">CEO</p>
            <p className=" lg:text-lg w-5/6">
              In my leisure time I like to cook. And I often come here to see
              the recipes. I cook good but I must say, I am nowhere near as good
              as the chefs here.
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
