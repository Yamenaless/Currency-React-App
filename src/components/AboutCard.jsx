import React from "react";

const AboutCard = (props) => {
  return (
    <div className="flex flex-col border text-left rounded-2xl py-12 p-5 ">
      <div>
        <div className="bg-blue-700 inline-flex p-2 rounded-full">
          {" "}
          {props.icon}
        </div>

        <h3 className="text-2xl font-bold py-4">{props.heading}</h3>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default AboutCard;
