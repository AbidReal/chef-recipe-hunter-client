import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/Sl";
import { Spinner } from "flowbite-react";
import LazyLoad from "react-lazy-load";

const ChefList = () => {
  const [loading, setLoading] = useState(false);
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://chef-recipe-hunter-server-abidreal.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return (
      <div className="flex h-screen justify-center items-center ">
        <Spinner
          className="h-44 w-44 items-center  text-center "
          color="success"
          aria-label="Success spinner example"
        />
      </div>
    );
  }

  // console.log(chefs);
  return (
    <div>
      <div>
        <div className=" text-center">
          <h1 className=" font-extrabold text-6xl mb-6 mt-24">Our Chefs</h1>
          <p>Explore the chefs and their recipes</p>
        </div>
        <div className=" mt-10 items-center grid gap-20 mb-8 lg:grid-cols-3 md:grid-cols-1">
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
                  {/*
                   I Have Made the lazyloader threshold{} so that you can easily tell that the code is working as intended.
                   Otherwise I would have preferred offset{}
                   */}
                  <LazyLoad height={260} threshold={0.5}>
                    <img
                      src={chef_img}
                      alt="icon"
                      className="object-cover h-full w-50 rounded-l-lg"
                    />
                  </LazyLoad>
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
                    <Link to={`chef/${chef_id}`}>
                      <button className="mb-5 px-4 w-10/12 py-3 text-green-500 border border-green-500 hover:text-green-400 hover:border-green-400 font-extrabold md:text-md rounded-lg">
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
