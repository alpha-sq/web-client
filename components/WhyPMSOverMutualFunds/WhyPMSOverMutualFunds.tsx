"use client";

import React from "react";
import { ComparisonCard } from "./ComparisonCard";
import ConnectWithExpert from "@/components/elements/button/ConnectWithExpert";

const WhyPMSOverMutualFunds: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col px-20 pt-28 pb-14 w-full border border-solid bg-neutral-950 border-zinc-800 border-opacity-10 max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <h1 className="self-center text-6xl font-medium tracking-tighter text-center text-white max-md:max-w-full max-md:text-4xl">
          <span className="font-extralight">Why</span> PMS{" "}
          <span className="font-extralight">over</span> Mutual Funds
        </h1>

        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <ComparisonCard
                pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
                mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
              />
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <ComparisonCard
                pmsDescription="Your investments are tailored to your risk appetite and financial goals."
                mutualFundDescription="One-size-fits-all approach with limited customization."
              />
            </div>
          </div>
        </div>

        <div className="mt-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-6/12 max-md:ml-0 max-md:w-full">
              <ComparisonCard
                pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
                mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
              />
            </div>
            <div className="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <ComparisonCard
                pmsDescription="Actively managed, aiming for market-beating returns. (Historical CAGR: 15-25%*)"
                mutualFundDescription="Returns diluted due to diversification. (Historical CAGR: 10-15%*)"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start self-center mt-12 text-xl font-semibold tracking-tighter text-center text-white max-md:mt-10">
          <ConnectWithExpert />
        </div>
      </div>
    </section>
  );
};

export default WhyPMSOverMutualFunds;
