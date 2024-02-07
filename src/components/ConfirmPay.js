const ConfirmPay = () => {
  return (
    <section className="w-[1240px] flex flex-col items-start justify-start pt-0 px-5 pb-4 box-border gap-[32px] max-w-full text-left text-5xl text-colors-text-c-text-grey-primary font-label-regular-bold mq825:gap-[32px]">
      <div className="w-[792px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-16 box-border max-w-full">
          <h2 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
            Total Payable: $300
          </h2>
        </div>
        <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-sm border-[1px] border-solid border-colors-border-c-border-grey-default-subtle">
          <div className="h-32 w-1 relative bg-black hidden" />
          <div className="flex-1 flex flex-row flex-wrap items-start justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-20 box-border gap-[12px] max-w-full">
            <div className="flex flex-row items-center justify-center pt-spacing-sp-6 px-0 pb-0">
              <img className="h-4 w-4 relative" alt="" src="/info-3.svg" />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[473px] max-w-full mq825:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start pt-spacing-sp-4 px-0 pb-spacing-sp-2 gap-[4px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  You will be charged in AED
                </div>
                <div className="self-stretch relative leading-[20px] text-colors-text-c-text-grey-secondary1">
                  The price shown here is in US Dollar (USD) as per the current
                  conversion rate. You will be charged in United Arab Emirates
                  Dirham (AED).
                </div>
              </div>
              <div className="self-stretch hidden flex-row items-center justify-start gap-[8px] text-grey-dark-c-d-grey-10 mq450:flex-wrap mq450:justify-center">
                <div className="h-9 rounded-radii-r-8 bg-black overflow-hidden flex flex-row items-center justify-center py-spacing-sp-8 px-spacing-sp-12 box-border gap-[4px]">
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/diamond1.svg"
                  />
                  <div className="self-stretch relative leading-[20px] font-semibold flex items-center">
                    Action
                  </div>
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/diamond1.svg"
                  />
                </div>
                <div className="h-9 rounded-radii-r-8 box-border overflow-hidden flex flex-row items-center justify-center py-spacing-sp-8 px-spacing-sp-12 gap-[4px] text-grey-dark-c-d-grey-1 border-[1px] border-solid border-black">
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/diamond2.svg"
                  />
                  <div className="self-stretch relative leading-[20px] font-semibold flex items-center">
                    Action
                  </div>
                  <img
                    className="h-[18px] w-[18px] relative hidden"
                    alt=""
                    src="/diamond2.svg"
                  />
                </div>
              </div>
            </div>
            <div className="h-6 w-6 rounded-radii-r-circle hidden flex-row items-center justify-center p-1 box-border">
              <img className="h-4 w-4 relative" alt="" src="/info.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0 flex flex-col items-start justify-start max-w-[1200px] mq1450:max-w-full">
        <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1" />
      </div>
    </section>
  );
};

export default ConfirmPay;
