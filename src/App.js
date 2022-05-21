import "./App.css";
import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
import config from "./config";
import Card from "./Components/Card";
import { useEffect, useState } from "react";
import checkVisibility from "./utils/checkVisibility";

function App() {
  const [headerbg, setheaderbg] = useState(false);
  const [showinputInHeader, setshowinputInHeader] = useState(false);
  useEffect(() => {
    let secondPage = document.getElementById("secondPage");
    checkVisibility(secondPage, setheaderbg);
    let inputComponent = document.getElementById("inputComponent");
    if(inputComponent){
      checkVisibility(inputComponent, setshowinputInHeader);
    }
  }, []);

  return (
    <div className="  font-sans ">
      <div className=" bg-[url('../public/assets/bg.jpg')] bg-left bg-no-repeat bg-cover h-screen">
        <Header headerbg={headerbg} showinputInHeader={showinputInHeader} />
        <MainPage />
      </div>
      <div className="px-2 md:px-8 lg:px-10 w-full flex flex-row mt-16" id="secondPage">
        {config.imageList.map((imageData, key) => {
          return (
            <div className="w-1/3" key={key}>
              <Card src={imageData.src} heading={imageData.heading} linkText={imageData.linkText} />
            </div>
          );
        })}
      </div>
      <div  id="inputComponent">sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div>sdfsdfsd</div>
      <div >sdfsdfsd</div>
    </div>
  );
}

export default App;
