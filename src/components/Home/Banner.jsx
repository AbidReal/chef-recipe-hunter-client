import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div>
      {" "}
      <div className="bg-gradient-to-r from-neutral-800 to-neutral-800">
        {" "}
        <div className=" bg-[url('https://images.unsplash.com/photo-1611518040286-9af8ba97ab46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] w-full bg-cover bg-center ">
          <div className="custom-container lg:pb-0 sm:pb-0">
            <div className=" items-center">
              <div className="text-center ">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <h1 className="mt-4 lg:mt-32 lg:pt-10 mb-6 font-extrabold text-5xl lg:text-6xl leading-tight text-white">
                    We Have The Best <br />{" "}
                    <span className="text-green-500">Japanese</span> Chefs
                  </h1>
                  <p className="text-white text-xl mb-10">
                    Find your favorite dish with us. <br /> After trying our
                    meals, you'll never look back
                  </p>
                  <button className="mt-5 mb-20 lg:mb-24 px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg ">
                    Make Order
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
