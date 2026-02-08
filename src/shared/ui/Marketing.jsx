import React from "react";
import Button from "../../components/button/Button";
import Convincely from "../../assets/convincely.svg?react";
import Utrip from "../../assets/utrip.svg?react";
import Wieldy from "../../assets/wieldy.svg?react";
import BeautyGarage from "../../assets/beautygarage.svg?react";
import Leverage from "../../assets/leverage.svg?react";
import ISO from "../../assets/iso.svg?react";
import ASICP from "../../assets/image25.svg?react";
import { MotionDiv } from "./Motion";

const Marketing = () => {
  return (
    <MotionDiv className="hidden lg:block relative w-full lg:w-[60%] bg-[radial-gradient(circle,rgba(232,240,255,1)_0%,rgba(255,255,255,1)_80%)] gap-10">
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
                <Button
                  variant="secondary"
                  className="w-full h-full gap-2 flex items-center justify-center bg-white rounded-2xl py-2 px-4 border-0"
                >
                  <Convincely className="h-8 w-auto" aria-hidden />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Convincely
                  </span>
                </Button>
                <Button
                  variant="secondary"
                  className="w-full h-full flex items-center justify-center gap-2 bg-white rounded-2xl py-2 px-4 border-0"
                >
                  <Utrip className="h-8 w-auto" aria-hidden />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Youtrip
                  </span>
                </Button>
                <Button
                  variant="secondary"
                  className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white border-0"
                >
                  <Wieldy className="h-8 w-auto" aria-hidden />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Wieldy.ai
                  </span>
                </Button>
              </div>
              <div className="w-full mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <Button
                  variant="secondary"
                  className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white border-0"
                >
                  <BeautyGarage className="h-8 w-auto" aria-hidden />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg">
                    Beauty Garage
                  </span>
                </Button>
                <Button
                  variant="secondary"
                  className="w-full h-full flex items-center justify-center gap-2 rounded-2xl py-2 px-4 bg-white border-0"
                >
                  <Leverage className="h-8 w-auto" aria-hidden />
                  <span className="text-sm font-bold text-gray-800 sm:text-lg text-nowrap">
                    Leverage Companies
                  </span>
                </Button>
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
            <ASICP className="h-8 w-auto" aria-hidden />
            <ISO className="h-8 w-auto" aria-hidden />
          </div>
          <div className="text-neutral-500 text-lg font-bold">
            SOC 2 and ISO certified.
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default Marketing;
