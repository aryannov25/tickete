import React from "react";
import Accordion from "./Accordion";

const FAQSection = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-left text-5xl text-colors-text-c-text-grey-primary font-label-regular-bold">
      <div className="flex-1 flex flex-col items-center justify-start gap-[32px] max-w-full mq825:gap-[32px]">
        <div className="w-[1240px] flex flex-row items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full shrink-0 lg:flex-wrap">
          <div className="w-[486px] flex flex-col items-start justify-start gap-[32px] min-w-[486px] max-w-[486px] lg:w-full mq825:gap-[32px] mq825:max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-16 box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  Frequently asked questions
                </h2>
              </div>
              <div className="w-[446px] flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-16 box-border max-w-full text-base text-colors-text-c-text-grey-secondary1">
                <div className="flex-1 relative leading-[24px] inline-block max-w-full">{`Here are some of our most asked questions. `}</div>
              </div>
            </div>
            <div className="w-[446px] rounded-radii-r-16 bg-colors-background-c-background-grey-default flex flex-row items-start justify-between p-6 box-border gap-[0px] [row-gap:20px] max-w-full text-lg mq825:flex-wrap">
              <div className="w-60 flex flex-col items-start justify-start gap-[20px] min-w-[240px] mq825:flex-1">
                <div className="self-stretch relative leading-[26px] font-semibold">
                  <p className="m-0">{`Still need help? `}</p>
                  <p className="m-0">We’re here for you.</p>
                </div>
                <button className="cursor-pointer [border:none] p-3.5 bg-black rounded-radii-r-12 overflow-hidden flex flex-row items-center justify-center gap-[8px]">
                  <img
                    className="h-5 w-5 relative hidden"
                    alt=""
                    src="/diamond9.svg"
                  />
                  <div className="relative text-base leading-[22px] font-semibold font-label-regular-bold text-grey-dark-c-d-grey-10 text-left">
                    Chat with us
                  </div>
                  <img
                    className="h-5 w-5 relative hidden"
                    alt=""
                    src="/diamond9.svg"
                  />
                </button>
              </div>
              <img
                className="h-[100px] w-[157.1px] relative mq825:flex-1"
                loading="eager"
                alt=""
                src="/about-illustrations.svg"
              />
            </div>
          </div>
          <Accordion />
        </div>
        <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1" />
        
      </div>
    </section>
  );
};

export default FAQSection;
