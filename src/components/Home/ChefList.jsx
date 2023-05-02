import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/Sl";

const ChefList = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  console.log(chefs);
  return (
    <div>
      <div>
        <div className=" text-center">
          <h1 className=" font-extrabold text-6xl mb-6">Our Chefs</h1>
          <p>Explore the chefs and their recipes</p>
        </div>
        <div className=" mt-10 items-center grid gap-6 mb-8 lg:grid-cols-3 md:grid-cols-1">
          {chefs.map(
            ({
              chef_id,
              chef_img,
              chef_name,
              num_recipes,
              likes,
              years_of_experience,
            }) => (
              <div
                key={chef_id}
                className=" border border-green-200 text-center rounded-lg grid grid-cols-2"
              >
                <div className="  overflow-hidden ">
                  <img
                    src={chef_img}
                    alt="icon"
                    className="object-cover h-full w-50 rounded-l-lg"
                  />
                </div>
                <div className="flex flex-col font-medium">
                  <p className="my-1 font-bold text-3xl">{chef_name}</p>
                  <div className="mt-auto flex flex-col gap-2">
                    <p>Experience: {years_of_experience} Years</p>
                    <p>Number of recipes: {num_recipes}</p>
                    <p className="flex gap-1 items-center text-center mx-auto">
                      <SlLike /> {likes}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <Link to={`job-details/`}>
                      <button className="mb-5 px-4 w-10/12 py-3 text-green-500 border border-green-500 hover:text-green-400 hover:border-green-400 font-extrabold md:text-lg rounded-lg">
                        View Recipes
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefList;
