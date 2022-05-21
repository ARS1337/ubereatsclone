import React from 'react';

const RadioComponent = (props) => {
    return (
      <div className="w-min  py-1 rounded-full relative flex flex-row justify-center h-min   text-black font-sans">
        <div className="selector p-1 bg-transparent peer-checked:bg-white rounded-full opacity-100 w-1/2">
          <input
            type="radio"
            id="radio1"
            className="hidden radio  peer"
            onChange={() => {
              props.setdeliveryOption("delivery");
            }}
            checked={props.deliveryOption === "delivery" ? true : false}
          ></input>
          <label htmlFor="radio1" className="label rounded-full px-4 py-1.5 text-black font-ubermedium text-md">
            Delivery
          </label>
        </div>
        <div className="selector p-1 bg-transparent peer-checked:bg-white rounded-full opacity-100">
          <input
            type="radio"
            id="radio2"
            className="hidden radio  peer"
            onChange={() => {
              props.setdeliveryOption("pickup");
            }}
            checked={props.deliveryOption !== "delivery" ? true : false}
          ></input>
          <label htmlFor="radio2" className="label rounded-full px-4 py-1.5 text-black font-ubermedium text-md">
            Pickup
          </label>
        </div>
      </div>
    );
  };

export default RadioComponent;