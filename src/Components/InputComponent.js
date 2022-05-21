import React from "react";
import { HiLocationMarker } from "react-icons/hi";


function InputComponent(props) {
  return (
    <div className={" font-bold relative  peer-checked:bg-red-400 overflow-hidden w-full shadow-lg "+props.bgColor}>
      <input
        type="text"
        placeholder="Enter your address"
        className={"ml-8 p-4 w-full outline-none peer "+ props.bgColor}
      />
      <div className="absolute left-0 top-[35%] px-4"><HiLocationMarker/></div>
      <div className={props.borderColor+" border peer-focus:border-black peer-focus:border-t-0 peer-focus:border-l-0 peer-focus:border-r-0 peer-focus:border-2 "}></div>
    </div>
  );
}

export default InputComponent;
