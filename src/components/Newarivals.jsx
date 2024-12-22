import React from "react";
import model1 from "../assets/Model1.png";
import model2 from "../assets/Model2.png";
import model3 from "../assets/Model3.png";
import arrow from "../assets/Arrow.png";
import NewarivalCard from "./NewarrivalCard"
const newArrivalData = [
  {
    image: model1,
    title: "Hoodies & Sweetshirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-blue-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-blue-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model2,
    title: "Coats & Parkas",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-green-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model3,
    title: "Tees & T-shirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-red-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-red-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model2,
    title: "Tees & T-shirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-red-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-blue-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model3,
    title: "Tees & T-shirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-red-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-red-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model1,
    title: "Hoodies & Sweetshirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-blue-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-blue-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model2,
    title: "Tees & T-shirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-red-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-yellow-500",
      arrowStyle: "rotate-45",
    },
  },
  {
    image: model2,
    title: "Tees & T-shirt",
    subtitle: "Explore Now!",
    arrow,
    styles: {
      containerStyle: "bg-yellow-100 p-2",
      imageStyle: "rounded-lg w-[324px] h-[504px]",
      textStyle: "text-green-500",
      arrowStyle: "rotate-45",
    },
  },

];
const Newarivals = ({ cards = newArrivalData }) => {
  return (
    <div className="p-3 w-full h-full">
      <div className="flex flex-col ">
        <div className="flex w-full items-start">
          <h1 className="text-2xl font-bold mb-5 flex gap-2">NEW <p className="shadow-2xl text-yellow-500 text-shadow-arrivals">ARRIVALS</p>
          </h1>
        </div>
        <div className="flex gap-[90px] overflow-x-auto hide-scrollbar">
          {cards.map((card, index) => (
            <NewarivalCard
              key={index}
              image={card.image}
              title={card.title}
              subtitle={card.subtitle}
              arrow={card.arrow}
              containerStyle={card.styles?.containerStyle}
              imageStyle = {card.styles?.imageStyle}
              textStyle = {card.styles?.textStyle}
              arrowStyle = {card.styles?.arrowStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Newarivals;
