import React from "react";
import InputComponent from "../Components/InputComponent";

function Header(props) {
  const { headerbg, showinputInHeader } = props;
  console.log("showinputInHeader ", showinputInHeader);
  let headerClassList =
    "sticky top-0 py-2 md:py-4 lg:py-6 header flex items-center justify-between px-3 md:px-4 lg:px-10 z-50 " +
    (headerbg === false ? " bg-transparent " : " bg-white ");

  return (
    <>
      <div className={headerClassList}>
        <div className="header-left h-8 w-1/2 md:h-12 md:w-3/6 flex flex-row justify-between items-center">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 20 20" className="h-6 min-w-fit pr-8">
            <path d="M19.167 3.333H.833v2.5h18.334v-2.5zm0 5.834H.833v2.5h18.334v-2.5zM.833 15h18.334v2.5H.833V15z"></path>
          </svg>
          <img src="/assets/companyName.svg" alt=" uber eats" className="h-6 min-w-fit pr-24" />
          <div className="w-full ">{showinputInHeader ? <InputComponent bgColor={'bg-[#eeeeee]'} borderColor="bg-[#eeeeee]"/> : ""}</div>
        </div>

        <div className="header-right w-1/2 md:w-2/5 lg:w-max flex justify-end ">
          {/* login button */}
          <button className="shadow-lg hidden  hover:opacity-70 font-bold md:flex flex-row items-center mr-2 md:mr-4 lg:mr-6 text-md md:text-md lg:text-md break-none p-1 py-0 h-8 w-auto md:h-8 md:w-auto lg:h-12 lg:w-auto rounded-full bg-white text-black px-4">
            <svg aria-hidden="true" focusable="false" viewBox="0 0 26 26" className="h-5 pr-2">
              <path
                fill-rule="evenodd"
                d="M18.958 7.042a5.958 5.958 0 11-11.916 0 5.958 5.958 0 0111.916 0zM3.25 21.667c0-3.575 2.925-6.5 6.5-6.5h6.5c3.575 0 6.5 2.925 6.5 6.5v3.25H3.25v-3.25z"
              ></path>
            </svg>
            <label>Log in</label>
          </button>
          {/* sign up button */}
          <button className="hover:opacity-70 font-[500] text-md md:text-lg lg:text-lg break-none p-1 py-0 h-8 w-auto md:h-8 md:w-auto lg:h-12 lg:w-auto rounded-full bg-black text-white px-4">
            Sign up
          </button>
          <button></button>
        </div>
      </div>
    </>
  );
}

export default Header;
