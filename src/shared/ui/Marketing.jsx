import React from "react";
import Convincely from "../../assets/convincely.svg";
import Utrip from "../../assets/utrip.svg";
import Wieldy from "../../assets/wieldy.svg";
import BeautyGarage from "../../assets/BeautyGarage.svg";
import Leverage from "../../assets/leverage.svg";
import ISO from "../../assets/ISO.svg";
import ASICP from "../../assets/image25.svg";

const Marketing = () => {
  return (
    <div className="hidden lg:block relative w-full lg:w-[60%] bg-[radial-gradient(circle,rgba(232,240,255,1)_0%,rgba(255,255,255,1)_80%)] gap-10">
      <div className="relative mx-auto flex h-full flex-col justify-between gap-10">
        <div className="flex flex-col gap-16">
          <h2 className="mt-10 px-6 sm:px-10 lg:px-10 text-balance text-center text-[30px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[40px]">
            Hire in India. Fast, Compliant, <br />
            Fully Managed.
          </h2>

          <div className="flex flex-col items-center justify-center gap-6">
            <p className="mt-3 text-sm text-center font-bold leading-6 text-gray-600">
              Trusted by 200+ Global Teams
            </p>
            <div className="flex flex-col items-center">
              <div className="w-full mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3">
                <button className="w-full h-full gap-2 flex items-center justify-center bg-white rounded-2xl py-2 px-4">
                  <img src={Convincely} alt="convincely" />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Convincely
                  </span>
                </button>
                <button className="w-full h-full flex items-center justify-center gap-2 bg-white rounded-2xl py-2 px-4">
                  <img src={Utrip} alt="utrip" />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Youtrip
                  </span>
                </button>
                <button className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white ">
                  <img src={Wieldy} alt="wieldy" />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Wieldy.ai
                  </span>
                </button>
              </div>
              <div className="w-full mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white">
                  <img src={BeautyGarage} alt="beauty-garage" />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Beauty Garage
                  </span>
                </button>
                <button className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white ">
                  <img src={Leverage} alt="leverage" />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg text-nowrap">
                    Leverage Companies
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="text-[16px] text-neutral-500 font-medium text-center">
            &quot;Wisemonk helped us tap into the vibrant and top-notch
            <br />
            Indian talent market.&quot;
          </div>
          <div className="mt-4 flex items-center justify-center">
            <div className="leading-tight">
              <div className="text-sm font-bold text-gray-900">
                Krishna Ramachandran
              </div>
              <div className="text-xs text-neutral-600 text-center font-medium">
                Co-founder at Onform
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center  px-6 sm:px-10 lg:px-10">
          <div className="flex ">
            <img src={ASICP} alt="soc2" />
            <img src={ISO} alt="iso" />
          </div>
          <div className="text-neutral-500 text-lg font-bold">
            SOC 2 and ISO certified.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
