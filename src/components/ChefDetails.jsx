import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { BsHeart, BsHeartFill } from "react-icons/Bs";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = () => {
  const [favorites, setFavorites] = useState({});

  const handleClick = (recipeId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [recipeId]: !prevFavorites[recipeId],
    }));
    const message = favorites[recipeId]
      ? "Recipe removed from favorites"
      : "Recipe added to favorites";
    toast.success(message);
  };
  const { id } = useParams();
  const chefDetails = useLoaderData();
  // console.log(chefDetails);
  const {
    chef_img,
    chef_name,
    likes,
    num_recipes,
    recipes,
    short_bio,
    years_of_experience,
  } = chefDetails;
  // console.log(short_bio);
  return (
    <div>
      {/* Banner section */}
      <div className=" bg-nav ">
        <div className="grid grid-cols-1 text-center lg:text-left lg:grid-cols-3 custom-container">
          {/* chef info */}
          <div className="lg:col-span-2 flex flex-col gap-5 lg:w-4/5">
            <p className="mt-24 text-4xl font-extrabold">{chef_name}</p>
            <p>
              <span className="font-medium">Chef's Description:</span>
              <br />
              {short_bio}
            </p>
            <p>
              <span className="font-medium ">Likes:</span> {likes}
            </p>
            <p>
              {" "}
              <span className="font-medium ">Number of Recipes:</span>{" "}
              {num_recipes}
            </p>
            <p>
              <span className="font-medium">Years of Experience:</span>{" "}
              {years_of_experience}
            </p>
          </div>
          {/* chef img */}
          <div style={{ height: "500px" }} className=" overflow-hidden my-10 ">
            <img
              src={chef_img}
              alt="chef image"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
      {/* 

      Recipe Section 

      */}
      {/* {console.log(recipes)} */}
      <div className="flex flex-col gap-10  custom-container">
        <div className="text-center font-extrabold text-5xl mt-16">Recipes</div>

        {recipes.map(
          ({ recipe_id, recipe_name, rating, cooking_method, ingredients }) => (
            <div
              key={recipe_id}
              className="border border-green-300 bg-nav rounded-lg p-10"
            >
              <div className=" text-center font-extrabold text-3xl pb-10 relative">
                {recipe_name}
                <div
                  onClick={() => handleClick(recipe_id)}
                  className="text-green-400 hover:text-green-300"
                >
                  {favorites[recipe_id] ? (
                    <BsHeartFill className="absolute top-1 right-0 stroke-current" />
                  ) : (
                    <BsHeart className="absolute top-1 right-0 stroke-current" />
                  )}
                  <ToastContainer></ToastContainer>
                </div>
              </div>

              <div className="font-bold pb-2 ">Ingredients:</div>
              <ul className="list-disc pl-6">
                {ingredients.map((ingredient) => (
                  <li key={ingredients.indexOf(ingredient)}>{ingredient}</li>
                ))}
              </ul>
              <div className="font-bold pb-2 pt-4">Cooking Method:</div>
              <ol className="list-decimal pl-6">
                {cooking_method.map((method) => (
                  <li key={cooking_method.indexOf(method)}>{method}</li>
                ))}
              </ol>
              <div className="font-bold pt-6">Rating: {rating}</div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChefDetails;
