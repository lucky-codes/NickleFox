import React from "react";
import Fav1 from "../assets/Fav1.png";
import Fav2 from "../assets/Fav2.png";
import NewarrivalCard from "./NewarrivalCard";
import arrow from "../assets/Arrow.png";
const cardData = [
  {
    image: Fav1,
    title: "Trending on instagram",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "w- p-2",
      imageStyle: "rounded-lg w-[834px] h-[575px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: Fav2,
    title: "Trending on instagram",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "w- p-2",
      imageStyle: "rounded-lg w-[834px] h-[575px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: Fav1,
    title: "Trending on instagram",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "w- p-2",
      imageStyle: "rounded-lg w-[834px] h-[575px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: Fav2,
    title: "Trending on instagram",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "w- p-2",
      imageStyle: "rounded-lg w-[834px] h-[575px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: Fav1,
    title: "Trending on instagram",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "w- p-2",
      imageStyle: "rounded-lg w-[834px] h-[575px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: Fav2,
    title: "Trending on instagram",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "w- p-2",
      imageStyle: "rounded-lg w-[834px] h-[575px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
];
const Favourite = ({ cards = cardData }) => {
  return (
    <div className="p-3 w-full h-full">
      <h1 className="text-2xl font-bold mb-5 flex gap-2">
        Young's
        <p className="shadow-2xl text-yellow-500 text-shadow-arrivals">
          Favourite
        </p>
      </h1>
      <div className="flex gap-[90px] overflow-x-auto hide-scrollbar">
        {cards.map((card, index) => (
          <NewarrivalCard
            key={index}
            image={card.image}
            title={card.title}
            subtitle={card.subtitle}
            arrow={card.arrow}
            textStyle={card.styles.textStyle}
            imageStyle={card.styles?.imageStyle}
            containerStyle={card.styles?.containerStyle}
            arrowStyle={card.styles?.arrowStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default Favourite;
