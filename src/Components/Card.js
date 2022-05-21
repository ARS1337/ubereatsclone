import React from "react";

function Card(props) {
  return (
    <div className="w-11/12 flex flex-col items-start m-2 ">
      <img src={props.src} alt={'alt text'} />
      <label className="font-bold text-2xl">{props.heading}</label>
      <a href='' className="underline font-bold" >{props.linkText}</a>
    </div>
  );
}

export default Card;
