const Payment = () => {
  return (
    <section className="w-[1240px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
      <form className="m-0 w-[792px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-spacing-sp-16 box-border max-w-full">
          <h2 className="m-0 flex-1 relative text-5xl tracking-[0.01em] leading-[32px] font-semibold font-label-regular-bold text-colors-text-c-text-grey-primary text-left inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
            Select your mode of payment
          </h2>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
          <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-spacing-sp-16 box-border max-w-full z-[1]">
            <div className="flex-1 relative text-base leading-[24px] font-label-regular-bold text-colors-text-c-text-grey-secondary1 text-left inline-block max-w-full">
              Payments with Tickete are secure and encrypted.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
          <div className="flex-1 rounded-radii-r-16 bg-brand-ghost-white box-border flex flex-col items-center justify-start pt-spacing-sp-28 px-spacing-sp-24 pb-0 gap-[32px] max-w-full border-[1px] border-solid border-colors-text-c-text-grey-primary mq450:gap-[32px]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-[23px] gap-[20px]">
              <div className="flex flex-row items-center justify-start gap-[12px]">
                <div className="relative text-base leading-[22px] font-semibold font-label-regular-bold text-colors-text-c-text-grey-primary text-left">{`Credit & debit card`}</div>
              </div>
              <img
                className="h-6 w-6 relative rounded-radii-r-circle overflow-hidden shrink-0 min-h-[24px]"
                loading="eager"
                alt=""
                src="/radio.svg"
              />
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 px-[23px] gap-[12px_8px]">
              <div className="h-5 w-[35px] relative rounded-radii-r-4 bg-brand-ghost-white box-border overflow-hidden shrink-0 border-[0.6px] border-solid border-colors-border-c-border-grey-divider-default1">
                <img
                  className="absolute h-[44%] w-[75.14%] top-[28%] right-[12.29%] bottom-[28%] left-[12.57%] max-w-full overflow-hidden max-h-full"
                  loading="eager"
                  alt=""
                  src="/visa.svg"
                />
              </div>
              <img
                className="self-stretch w-[35px] relative rounded-radii-r-4 max-h-full overflow-hidden shrink-0 min-h-[20px]"
                loading="eager"
                alt=""
                src="/mastercard.svg"
              />
              <img
                className="self-stretch w-[35px] relative rounded-radii-r-4 max-h-full overflow-hidden shrink-0 min-h-[20px]"
                loading="eager"
                alt=""
                src="/dinersclub.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 px-[23px] box-border gap-[28px] max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                      <input
                        className="relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                        placeholder="Name on card"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                  <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] border-[1px] border-solid border-colors-border-c-border-grey-default mq450:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px] min-w-[108px] min-h-[24px]">
                      <input
                        className="relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                        placeholder="Card number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                      <input
                        className="relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                        placeholder="Expiry date (MM/YY)"
                      />
                    </div>
                    <div className="hidden flex-row items-center justify-center p-0.5">
                      <img
                        className="h-5 w-5 relative"
                        alt=""
                        src="/diamond.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[234px] max-w-full">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[4px] max-w-full">
                      <input
                        className="relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                        placeholder="CVV/CVC"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-spacing-sp-16 px-spacing-sp-16 pb-spacing-sp-32 gap-[32px] text-left text-lg text-colors-text-c-text-grey-primary font-label-regular-bold border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1 mq450:gap-[32px]">
                <div className="flex justify-between w-full items-center">
                  <div>
                    <p className="text-gray-800 font-semibold">
                      Total payable: $300
                    </p>
                    <p className="text-sm text-gray-600">
                      You will be charged in AED
                    </p>
                  </div>
                  <div className="text-green-600 text-sm px-2 bg-green-300 rounded-lg">
                    <span>You saved $40</span>
                  </div>
                </div>
                <div className="text-xs text-gray-600 my-2">
                  By clicking "confirm & pay", you agree to{" "}
                  <a href="/" className="text-blue-600 hover:underline">
                    Tickete's general terms and conditions{" "}
                  </a>
                  and
                  <a href="/" className="text-blue-600 hover:underline">
                    {" "}
                    cancellation policy.
                  </a>
                </div>
                <button className="cursor-pointer font-bold text-white text-lgi   [border:none] py-spacing-sp-16 px-spacing-sp-20 bg-black  rounded-radii-r-16 overflow-hidden flex flex-row items-center justify-center gap-[12px]">
                  <img
                    className="h-[22px] w-[22px] relative"
                    alt=""
                    src="/lock-1.svg"
                  />
                  Confirm & pay
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-5 box-border max-w-full">
          <div className="flex-1 rounded-radii-r-16 bg-colors-background-c-background-grey-default box-border flex flex-col items-start justify-start py-spacing-sp-24 pr-spacing-sp-24 pl-spacing-sp-24 max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default-subtle">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="w-[154px] flex flex-row items-end justify-start gap-[15px]">
                <div className="h-6 flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-[35px] relative rounded-md overflow-hidden shrink-0"
                    alt=""
                    src="/applepay.svg"
                  />
                </div>
                <input
                  className="w-[calc(100%_-_59px)] [border:none] [outline:none] font-semibold font-label-regular-bold text-base bg-[transparent] h-[22px] flex-1 relative leading-[22px] text-colors-text-c-text-grey-disabled text-left inline-block min-w-[62px]"
                  placeholder="Coming soon"
                  type="text"
                />
              </div>
              <div className="h-6 w-6 rounded-radii-r-circle bg-colors-fill-c-fill-grey-disabled box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-c-border-grey-default-subtle" />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-8 box-border max-w-full">
          <div className="flex-1 rounded-radii-r-16 bg-colors-background-c-background-grey-default box-border flex flex-col items-start justify-start py-spacing-sp-24 pr-spacing-sp-24 pl-spacing-sp-24 max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default-subtle">
            <div className="self-stretch flex flex-row items-center justify-between gap-[20px]">
              <div className="w-[154px] flex flex-row items-end justify-start gap-[15px]">
                <div className="h-6 flex flex-row items-center justify-start">
                  <img
                    className="h-5 w-[35px] relative rounded-md overflow-hidden shrink-0"
                    alt=""
                    src="/googlepay.svg"
                  />
                </div>
                <input
                  className="w-[calc(100%_-_59px)] [border:none] [outline:none] font-semibold font-label-regular-bold text-base bg-[transparent] h-[22px] flex-1 relative leading-[22px] text-colors-text-c-text-grey-disabled text-left inline-block min-w-[62px]"
                  placeholder="Coming soon"
                  type="text"
                />
              </div>
              <div className="h-6 w-6 rounded-radii-r-circle bg-colors-fill-c-fill-grey-disabled box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-c-border-grey-default-subtle" />
            </div>
          </div>
        </div>
        <div className="w-full h-0 flex flex-col items-start justify-start max-w-[1200px] mq1450:max-w-full">
          <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1" />
        </div>
      </form>
    </section>
  );
};

export default Payment;
