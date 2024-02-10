import React from "react";
import Accordion from "./Accordion";

const FAQSection = () => {
  return (
    <section className="self-stretch flex flex-row lg:flex-col  items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-left text-5xl text-colors-text-c-text-grey-primary font-label-regular-bold">
      <div className="flex-1 flex flex-col lg:flex-col-reverse items-center justify-start gap-[32px] max-w-full mq825:gap-[32px]">
        <div className="w-[1240px] flex flex-row lg:flex-col items-start justify-start py-0 px-5 box-border gap-[24px] max-w-full shrink-0 lg:flex-wrap">
          <div className="w-[486px] flex flex-col items-start justify-start gap-[32px] min-w-[486px] max-w-[486px] lg:w-full mq825:gap-[32px] mq825:max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-16 box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  Frequently asked questions
                </h2>
              </div>
              <div className="w-[446px] flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-16 box-border max-w-full text-base text-colors-text-c-text-grey-secondary1">
                <div className="flex-1 relative leading-[24px] inline-block max-w-full">
                  Here are some of our most asked questions.
                </div>
              </div>
            </div>
            <div
              className="responsive-card order-2 lg:order-1 p-10 lg:w-[400px] w-auto h-[200px] rounded-radii-r-16 bg-colors-background-c-background-grey-default flex flex-row items-center justify-between box-border gap-[0px] flex-nowrap text-lg"
              style={{
                minWidth: "400px",
                maxWidth: "446px",
                minHeight: "200px",
              }}
            >
              <div
                className="flex flex-col items-start justify-start gap-[20px]"
                style={{
                  flex: "1 1 auto",
                  maxWidth: "calc(100% - 157.1px - 20px)",
                }}
              > 
                <div className="self-stretch relative leading-[26px] font-semibold">
                  <p className="m-0">Still need help?</p>
                  <p className="m-0">We’re here for you.</p>
                </div>
                <button className="cursor-pointer [border:none] p-3.5 bg-black rounded-radii-r-12 overflow-hidden flex flex-row items-center justify-center gap-[8px]">
                  <div className="relative text-base leading-[22px] font-semibold font-label-regular-bold text-grey-dark-c-d-grey-10 text-left">
                    Chat with us
                  </div>
                </button>
              </div>
              <img
                className="h-auto w-auto max-w-[157.1px] max-h-[100px] relative"
                loading="eager"
                alt=""
                src="/about-illustrations.svg"
                style={{ flex: "0 1 auto" }}
              />
            </div>
          </div>
          <Accordion className="order-1 lg:order-2" />
        </div>
        <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1" />
      </div>
    </section>
  );
};

export default FAQSection;
