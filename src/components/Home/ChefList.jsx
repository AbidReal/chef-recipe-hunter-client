import React, { useEffect, useState } from "react";

const ChefList = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
  return <div>List of 6 chef will be here. 3 on each row</div>;
};

export default ChefList;
