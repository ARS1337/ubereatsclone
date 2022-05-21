import React, { useEffect, useState } from "react";
import InputComponent from "../Components/InputComponent";
import RadioComponent from "../Components/RadioComponent";

function MainPage(props) {
  const [deliveryOption, setdeliveryOption] = useState("delivery");

  return (
    <div className="h-[60vh] flex items-end justify-start px-2 md:px-10 ">
      <div className=" h-[55%] ">
        <label className="text-xl md:text-2xl lg:text-5xl font-[900] ">Order food to your door</label>
        <div className="mt-12">
          <RadioComponent deliveryOption={deliveryOption} setdeliveryOption={setdeliveryOption} />
        </div>
        <div className="flex flex-row justify-between w-[130%] mb-6 mt-6">
          <div className="w-[80%]">
            <InputComponent bgColor="bg-white" borderColor='bg-white'/>
          </div>
          <button className="p-1 bg-black text-white font-[500] w-[18%] font-uberbold">Find Food</button>
        </div>
        <div className="font-ubermedium">
          <a href="" className="underline">
            {" "}
            Sign In
          </a>
          <label>&nbsp;for your recent addresses</label>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
