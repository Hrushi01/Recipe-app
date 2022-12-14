import React from "react";
import { useEffect, useState } from "react";
import "./Popular.css";
// import '@splidejs/react-splide/css/core';
import "@splidejs/react-splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Veggis() {
  const [Veggis, setVeggis] = useState([]);

  useEffect(() => {
    getResponse();
    // getVeggis();
  }, []);

  const getResponse = async () => {
    const check = localStorage.getItem("Veggis");
    if (check) {
      setVeggis(JSON.parse(check));
    } else {
      const Response = await axios.get(
        "https://api.spoonacular.com/recipes/random?apiKey=0b9fb42baf9a443d8ff016efc8ae93d0&number=9&tags=vegan"
      );
      localStorage.setItem("Veggis", JSON.stringify(Response.data.recipes));

      setVeggis(Response.data.recipes);
      console.log(Response);
      console.log(Response.data.recipes);
      // console.log(process.env.REACT_API);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="tit">Picks for the day</div>

        <Splide
          options={{
            perPage: 2.5,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {Veggis.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <div className="card ">
                  {/* <div className="Gradient"> */}
                  <Link to={"/recipe/" + recipe.id}>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt="Img" />
                  </Link>

                  {/* </div> */}
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
