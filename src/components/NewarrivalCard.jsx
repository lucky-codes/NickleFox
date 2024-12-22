import React from "react";

const NewarrivalCard = ({
  image,
  title,
  subtitle,
  arrow,
  containerStyle = "",
  imageStyle = "",
  textStyle = "",
  arrowStyle = "",
}) => {
  return (
    <div className={`flex-shrink-0`}>
      <img src={image} className={` ${imageStyle}`} />
      <div className="flex justify-between py-2 items-center">
        <div className={`${textStyle}`}>
          <p>{title}</p>
          <h4 className="text-sm text-[#7F7F7F]">{subtitle}</h4>
        </div>
        <img className={`w-[20px] h-[20px]`} src={arrow} />
      </div>
    </div>
  );
};

export default NewarrivalCard;
