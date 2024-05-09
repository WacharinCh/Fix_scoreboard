import React, { useState, useEffect } from "react";
import background1 from "./pic/background1.png";
import background2 from "./pic/background2.png";
import logo from "./pic/logo.png";
import Frame from "./pic/Frame.png";
import profile from "./pic/profile.jpg";
import police from "./pic/police.png";
import medic from "./pic/medic.png";
import council from "./pic/council.png";
import shadow from "./pic/shadow.png";
import { FaIdCardAlt } from "react-icons/fa";
import './scoreboard.css'

function Background({ isVisible }) {
  return (
    <div className={`w-[800px] h-[250px] fixed top-[50px] transition-opacity duration-[500ms] ease-in-out ${isVisible ? "opacity-100" : "opacity-0 delay-100"} `} >
      <div className="relative w-full h-full flex justify-center">
        <div className={`flex gap-[18px] absolute bottom-[35px] right-[85px] z-30  transition ease-in-out duration-[1000ms]  ${isVisible ? "translate-y-0" : "-translate-y-[70px]"} `}>
          <div className="w-[100px] h-[50px] flex relative">
            <img src={Frame} className="w-[50px] h-[50px] z-50" />
            <div className="flex w-[50px] flex-col z-50">
              <div className=" text-white text-[13px] h-[20px] absolute top-[2.5px] right-[8px] font-bold">POLICE</div>
              <div className=" text-white h-[30px] w-[30px] text-[15px] absolute top-[22px] right-[15px] ">
                <div className="flex justify-center items-center font-bold">150</div>
              </div>
            </div>
            <div className="w-[82px] h-[25px] bg-black/70 bottom-[3.5px] right-0 rounded-md absolute"></div>
            <img src={police} className="w-[30px] absolute z-50 top-[13px] left-[10px] drop-shadow-lg" />
          </div>
          <div className="w-[100px] h-[50px] flex relative">
            <img src={Frame} className="w-[50px] h-[50px] z-50" />
            <div className="flex w-[50px] flex-col z-50">
              <div className=" text-white text-[13px] h-[20px] absolute top-[2.5px] right-[8.5px] font-bold">MEDIC</div>
              <div className=" text-white h-[30px] w-[30px] text-[15px] absolute top-[22px] right-[15px] ">
                <div className="flex justify-center items-center font-bold">120</div>
              </div>
            </div>
            <div className="w-[82px] h-[25px] bg-black/70 bottom-[3.5px] right-0 rounded-md absolute "></div>
            <img src={medic} className="w-[30px] absolute z-50 top-[13.2px] left-[10px] drop-shadow-lg" />
          </div>
          <div className="w-[100px] h-[50px] flex relative">
            <img src={Frame} className="w-[50px] h-[50px] z-50" />
            <div className="flex w-[50px] flex-col z-50">
              <div className=" text-white text-[12.5px] h-[20px] absolute top-[4px] right-[0px] font-bold ">COUNCIL</div>
              <div className=" text-white h-[30px] w-[30px] text-[15px] absolute top-[22px] right-[15px] ">
                <div className="flex justify-center items-center font-bold">100</div>
              </div>
            </div>
            <div className="w-[82px] h-[25px] bg-black/70 bottom-[3.5px] right-0 rounded-md absolute"></div>
            <img src={council} className="w-[28px] absolute z-50 top-[13px] left-[10.5px] drop-shadow-lg" />
          </div>
        </div>
        <img src={profile} className="w-[180px] z-50 object-cover  h-[180px] shadow-neon-w drop-shadow-lg border-[7px] border-white rounded-2xl absolute top-[37px] left-[150px]" />
        <img src={background1} className="absolute top-[20px] z-30 drop-shadow-2xl overflow-hidden" />
        <img src={shadow} className="absolute top-[20px] z-30 drop-shadow-2xl overflow-hidden opacity-30" />
        <img src={background2} className={`absolute top-[159px] left-[341px] z-20 transition ease-in-out duration-[1000ms]  ${isVisible ? "translate-y-0" : "-translate-y-[70px]"}`} />
        <img src={logo} className="absolute top-[-6px] left-[-1px] z-50 " />
        <div className="w-[330px] h-[40px] absolute top-[46px] right-[90px] z-30 flex justify-center rounded-[4px] items-center bg-black/70 shadow-md drop-shadow-lg ">
          <div className="text-[28px]  text-white font-extrabold truncate px-4 ">George Bayonet</div>
        </div>
        <div className="w-[180px] h-[50px] absolute top-[93px] right-[240px] z-30 flex flex-col gap-1 bg-black/70 rounded-[4px] shadow-md drop-shadow-lg justify-center">
          <div className="w-[180px]  flex items-center pl-[9px] gap-1 leading-[17px]">
            <div className="text-[15px] text-white font-bold w-[36px]">JOB :</div>
            <div className="text-[15px] text-darkpink truncate  w-[130px] overflow-hidden">Citizen [ประชาชน]</div>
          </div>
          <div className="w-[180px]  flex items-center pl-[9px] gap-1 leading-[17px]">
            <div className="text-[15px] text-white font-bold w-[65px]">PHONE :</div>
            <div className="text-[15px] text-darkpink truncate w-[115px]">123456</div>
          </div>
        </div>
        <div className="w-[145px] h-[50px] absolute top-[93px] right-[90px] z-30 flex gap-1 ">
          <div className="w-[70px] h-[50px] flex flex-col justify-center bg-black/70  items-center rounded-[4px]  drop-shadow-lg shadow-lg leading-[18px]">
            <div className="text-[15px] text-neon-g truncate font-extrabold ">ONLINE</div>
            <div className="text-[15px] text-white truncate font-extrabold ">984</div>
          </div>
          <div className="w-[70px] h-[50px] flex flex-col justify-center bg-black/70 items-center rounded-[4px] drop-shadow-lg shadow-lg leading-[18px]">
            <div className="text-[15px] flex gap-1 text-darkpink truncate font-extrabold justify-center pl-[2px]"><FaIdCardAlt />UID</div>
            <div className="text-[15px] text-white truncate font-extrabold ">12</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showBackground, setShowBackground] = useState(true);
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Delete') {
        console.log(event.key);
        setShowBackground(!showBackground);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [showBackground]);

  return (
    <div className="w-screen h-screen flex justify-center relative bg-transparent">
      <Background isVisible={showBackground} />
    </div>
  );
}
