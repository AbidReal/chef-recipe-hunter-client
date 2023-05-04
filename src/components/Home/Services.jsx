import React from "react";
import { HiCake } from "react-icons/Hi";
import { motion } from "framer-motion";

import {
  FaGlassMartiniAlt,
  FaMortarPestle,
  FaShippingFast,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="mt-40 text-center ">
      <div className="  pt-32 bg-gradient-to-r from-green-100 from-10% via-sky-100 via-30% to-emerald-100 to-90%">
        <div className="font-extrabold text-7xl mb-4">Services</div>
        <div>We are very passionate and we provide quality services</div>
        <div className="custom-container mt-10 grid grid-cols-1 lg:grid-cols-4 gap-10 ">
          {" "}
          <div className="bg-white flex flex-col justify-between gap-4 items-center mb-60">
            <div className="flex flex-col justify-center items-center mx-auto gap-4 ">
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaGlassMartiniAlt className="h-20 w-20 mt-10 text-green-600 bg-slate-100 p-3 rounded-full" />
              </motion.div>

              <div className="text-2xl font-bold   ">Reservation</div>
              <div className="w-2/3 mb-6 text-slate-400">
                Book a table at our restaurant to enjoy a wonderful dining
                experience with your friends and family. We offer a hassle-free
                reservation process, whether you prefer to make a booking online
                or over the phone.
              </div>
            </div>

            <div className="mt-5 mb-10 px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg ">
              Make Order
            </div>
          </div>
          <div className="bg-white flex flex-col justify-between gap-4 items-center mb-60">
            <div className="flex flex-col justify-center items-center mx-auto gap-4 ">
              <motion.div whileHover={{ scale: 1.2 }}>
                <HiCake className="h-20 w-20 mt-10 text-green-600 bg-slate-100 p-3 rounded-full" />
              </motion.div>
              <div className="text-2xl font-bold   ">Birthday Party</div>
              <div className="w-2/3 mb-6 text-slate-400">
                Celebrate your special day with delicious food and great company
                at our restaurant. We offer special packages for birthday
                parties, including decorations, customized menus, and birthday
                cakes.
              </div>
            </div>

            <div className="mt-5 mb-10 px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg ">
              Make Order
            </div>
          </div>
          <div className="bg-white flex flex-col justify-between gap-4 items-center mb-60">
            <div className="flex flex-col justify-center items-center mx-auto gap-4 ">
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaShippingFast className="h-20 w-20 mt-10 text-green-600 bg-slate-100 p-3 rounded-full" />
              </motion.div>

              <div className="text-2xl font-bold   ">Online Delivery</div>
              <div className="w-2/3 mb-6 text-slate-400">
                Enjoy our delicious food from the comfort of your home with our
                online delivery service. We offer a wide range of dishes to
                choose from, and our delivery process is fast and efficient.
              </div>
            </div>

            <div className="mt-5 mb-10 px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg ">
              Make Order
            </div>
          </div>
          <div className="bg-white flex flex-col justify-between gap-4 items-center mb-60">
            <div className="flex flex-col justify-center items-center mx-auto gap-4 ">
              <motion.div whileHover={{ scale: 1.2 }}>
                <FaMortarPestle className="h-20 w-20 mt-10 text-green-600 bg-slate-100 p-3 rounded-full" />
              </motion.div>

              <div className="text-2xl font-bold   ">Online Guide</div>
              <div className="w-2/3 mb-6 text-slate-400">
                Learn how to cook your favorite dishes from our restaurant with
                our online guide. We offer step-by-step instructions and videos
                to help you recreate our signature dishes at home.
              </div>
            </div>

            <div className="mt-5 mb-10 px-4 md:px-7 py-4 btn-color text-white font-extrabold md:text-lg rounded-lg ">
              Make Order
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
