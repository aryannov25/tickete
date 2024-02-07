import { useState } from "react";

const Main = () => {
  const [isPaymentSummaryVisible, setIsPaymentSummaryVisible] = useState(false);

  // Function to toggle the payment summary visibility
  const togglePaymentSummary = () => {
    setIsPaymentSummaryVisible(!isPaymentSummaryVisible);
  };

  return (
    <section className="w-[1240px] flex flex-col items-start justify-start py-0 px-5 box-border gap-[32px] max-w-full text-left text-5xl text-colors-text-c-text-grey-primary font-label-regular-bold mq825:gap-[32px]">
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full lg:flex-wrap">
        <div className="flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[64px] mq825:gap-[64px] mq825:min-w-full">
          <div className="w-[792px] flex flex-col items-start justify-start gap-[32px] text-38xl font-heading-serif-xl">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-28 box-border max-w-full">
              <h1 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[64px] font-medium font-inherit inline-block max-w-full mq450:text-15xl mq450:leading-[38px] mq825:text-27xl mq825:leading-[51px]">{`Confirm & pay`}</h1>
            </div>
            <div className="self-stretch rounded-radii-r-16 bg-grey-light-c-l-grey-05 box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-sm font-label-regular-bold border-[1px] border-solid border-colors-border-c-border-grey-default-subtle">
              <div className="h-32 w-1 relative bg-black hidden" />
              <div className="flex-1 flex flex-row items-start justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-20 box-border gap-[12px] max-w-full mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[468px] max-w-full mq825:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start pt-spacing-sp-4 px-0 pb-spacing-sp-2 gap-[4px]">
                    <div className="self-stretch relative leading-[20px] font-semibold">
                      Free cancellation
                    </div>
                    <div className="self-stretch relative leading-[20px] text-colors-text-c-text-grey-secondary1">
                      Tickets can be cancelled by 13th December, 2022.
                    </div>
                  </div>
                </div>
                <div className="h-6 w-6 rounded-radii-r-circle flex flex-row items-center justify-center p-1 box-border">
                  <img className="h-4 w-4 relative" alt="" src="/info.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[792px] flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-spacing-sp-16 box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  Enter your details
                </h2>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-spacing-sp-16 box-border max-w-full text-base text-colors-text-c-text-grey-secondary1">
                <div className="flex-1 relative leading-[24px] inline-block max-w-full">
                  We'll be sending your tickets to the details below. Booking
                  for a friend? Add their details.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-colors-text-c-text-grey-secondary1">
              <div className="self-stretch h-14 flex flex-row items-start justify-start max-w-full">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch flex-1 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <input
                      type="text"
                      placeholder="Full name"
                      className="self-stretch flex-1 relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-colors-text-c-text-grey-tertiary1 mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] border-[1px] border-solid border-colors-border-c-border-grey-default mq450:flex-wrap">
                    <select
                      className="flex-1 relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                      required
                    >
                      <option value="">Select country code</option>
                      <option value="+1">United States (+1)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+81">Japan (+81)</option>
                    </select>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full text-colors-text-c-text-grey-secondary1">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="self-stretch flex-1 relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <input
                      type="email"
                      placeholder="Email"
                      className="self-stretch flex-1 relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                      required
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <input
                      type="email"
                      placeholder="Confirm email"
                      className="self-stretch flex-1 relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-0 flex flex-col items-start justify-start max-w-[1200px] mq1450:max-w-full">
              <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1" />
            </div>
          </div>

          <div className="w-[792px] flex flex-col items-start justify-start gap-[32px]">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-spacing-sp-16 box-border max-w-full">
                <h2 className="m-0 flex-1 relative text-inherit tracking-[0.01em] leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                  Additional information
                </h2>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center pt-0 px-0 pb-spacing-sp-16 box-border max-w-full text-base text-colors-text-c-text-grey-secondary1">
                <div className="flex-1 relative leading-[24px] inline-block max-w-full">
                  We need a few more details to complete your reservation.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-base text-colors-text-c-text-grey-secondary1">
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch h-14 rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden shrink-0 flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <div className=" flex items-center text-colors-text-c-text-grey-tertiary1">
                      <input
                        type="text"
                        className="relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] border-[1px] border-solid border-colors-border-c-border-grey-default mq450:flex-wrap">
                    <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[4px] min-w-[53px] text-colors-text-c-text-grey-tertiary1">
                      <select
                        className="w-full relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left"
                        required
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>

                      <div className="relative text-sm leading-[20px] font-semibold text-red-light-c-l-red-905"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white box-border overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] max-w-full border-[1px] border-solid border-colors-border-c-border-grey-default mq825:flex-wrap">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px] min-w-[90px] max-w-full text-colors-text-c-text-grey-tertiary1">
                      <select className="relative text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 text-left w-full">
                        <option value="" disabled>
                          Select a option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 rounded-radii-r-24 bg-brand-ghost-white box-border flex flex-col items-start justify-start min-w-[384px] max-w-full text-right text-sm text-colors-text-c-text-grey-secondary1 border-[1px] border-solid border-colors-border-c-border-grey-divider-default1 lg:flex-1 mq450:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start pt-spacing-sp-16 px-spacing-sp-16 pb-0 box-border gap-[16px] max-w-full">
              <div className="w-[352px] flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border relative gap-[59px] min-h-[198px] max-w-full mq450:gap-[59px]">
                <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radii-r-16">
                  <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-2xl flex items-center justify-center">
                    <img
                      className="h-full w-full max-w-full overflow-hidden max-h-full object-contain absolute left-[0px] top-[0px] [transform:scale(1.505)]"
                      alt=""
                      src="/credit-debit-card@2x.png"
                    />
                  </div>
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radii-r-16 max-w-full overflow-hidden max-h-full object-cover z-[1]"
                    alt=""
                    src="/credit-debit-card1@2x.png"
                  />
                </div>
                <div className="w-[352px] my-0 mx-[!important] absolute bottom-[0px] left-[calc(50%_-_176px)] flex flex-row items-start justify-center pt-0 px-spacing-sp-12 pb-spacing-sp-16 box-border z-[2]">
                  <div className="flex flex-row items-center justify-start gap-[6px]">
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-1.5 w-1.5 relative rounded-[50%] bg-whitesmoke-300 [backdrop-filter:blur(37.5px)]" />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-2 w-2 relative rounded-[50%] bg-whitesmoke-300 [backdrop-filter:blur(50px)]" />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-2 w-2 relative rounded-[50%] bg-whitesmoke-300 [backdrop-filter:blur(50px)]" />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-2 w-7 relative rounded-radii-r-8 bg-grey-light-c-l-grey-05" />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-2 w-2 relative rounded-[50%] bg-whitesmoke-300 [backdrop-filter:blur(50px)]" />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-2 w-2 relative rounded-[50%] bg-whitesmoke-300 [backdrop-filter:blur(50px)]" />
                    </div>
                    <div className="flex flex-row items-start justify-start">
                      <div className="h-1.5 w-1.5 relative rounded-[50%] bg-whitesmoke-300 [backdrop-filter:blur(37.5px)]" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[45px] mq450:gap-[45px]">
                  <div className="flex flex-row items-start justify-start py-0 px-3">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center z-[2]">
                      <div className="rounded-radii-r-4 bg-brand-ghost-white flex flex-row items-center justify-start py-spacing-sp-4 px-spacing-sp-8 gap-[4px]">
                        <img
                          className="h-3.5 w-3.5 relative"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="relative text-xs leading-[18px] font-semibold font-label-regular-bold text-colors-text-c-text-grey-primary text-left">
                          Bestseller
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-between py-0 px-spacing-sp-12 gap-[20px] z-[2] mq450:flex-wrap">
                    <div className="h-8 w-8 rounded-radii-r-circle bg-whitesmoke-400 [backdrop-filter:blur(50px)] flex flex-row items-start justify-start p-2 box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/caretleft.svg"
                      />
                    </div>
                    <div className="h-8 w-8 rounded-radii-r-circle bg-whitesmoke-400 [backdrop-filter:blur(50px)] flex flex-row items-start justify-start p-2 box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/caretright.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-4 box-border gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[4px] mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-start gap-[4px] text-colors-text-c-text-grey-primary">
                      <img
                        className="h-3.5 w-3.5 relative"
                        alt=""
                        src="/rating-star.svg"
                      />
                      <div className="flex flex-row items-start justify-start gap-[2px]">
                        <div className="relative leading-[20px] font-semibold">
                          4.9
                        </div>
                        <div className="relative leading-[20px] text-colors-text-c-text-grey-secondary1">
                          (4.5k)
                        </div>
                      </div>
                    </div>
                    <div className="relative leading-[20px] mq450:w-full mq450:h-1.5">
                      •
                    </div>
                    <div className="flex-1 relative leading-[20px] text-left inline-block min-w-[57px]">
                      Sightseeing
                    </div>
                  </div>
                  <div className="self-stretch relative text-base leading-[22px] font-semibold text-colors-text-c-text-grey-primary text-left [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    Amsterdam open boat canal cruise - Live Guiye - from Anne
                    Frank Housef
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full text-left text-colors-text-c-text-grey-primary">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-center">
                      <img
                        className="h-5 w-5 relative"
                        loading="eager"
                        alt=""
                        src="/ticket.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[209px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-8 box-border max-w-full">
                        <div className="flex-1 relative leading-[20px] font-semibold inline-block max-w-full">
                          Amsterdam open boat canal cruise
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-center">
                      <img
                        className="h-5 w-5 relative"
                        loading="eager"
                        alt=""
                        src="/calendarblank.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[209px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-8 box-border max-w-full">
                        <div className="flex-1 relative leading-[20px] font-semibold inline-block max-w-full">
                          15 December 2022
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-8 text-xs text-colors-text-c-text-grey-secondary1">
                        <div className="relative leading-[18px]">{`Duration: 3 Hours`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-center">
                      <img
                        className="h-5 w-5 relative"
                        loading="eager"
                        alt=""
                        src="/clock.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[209px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-8 box-border max-w-full">
                        <div className="flex-1 relative leading-[20px] font-semibold inline-block max-w-full">{`1300 IST`}</div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-8 text-xs text-colors-text-c-text-grey-secondary1">
                        <div className="relative leading-[18px]">{`Operating hours: 0900 to 1800 IST`}</div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[10px] max-w-full mq450:flex-wrap">
                    <div className="flex flex-row items-center justify-center">
                      <img
                        className="h-5 w-5 relative"
                        loading="eager"
                        alt=""
                        src="/users.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start min-w-[209px] max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-spacing-sp-8 box-border max-w-full">
                        <div className="flex-1 relative leading-[20px] font-semibold inline-block max-w-full">
                          5 guests
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-spacing-sp-20 gap-[16px] text-left">
              <div className="w-full h-0 flex flex-col items-start justify-start py-0 px-spacing-sp-16 box-border max-w-[1200px] mq1450:max-w-full">
                <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-colors-border-c-border-grey-divider-default1" />
              </div>
              <div className="self-stretch flex flex-row items-center justify-between py-0 px-spacing-sp-16 gap-[20px]">
                <div className="overflow-hidden flex flex-row items-start justify-start gap-[8px]">
                  <div
                    onClick={togglePaymentSummary}
                    className="cursor-pointer underline flex items-center justify-between w-full"
                  >
                    <span>View payment summary</span>
                    <img
                      className={`transform ${
                        isPaymentSummaryVisible ? "rotate-45" : "rotate-0"
                      }`}
                      src="/plus.svg"
                      alt="toggle"
                    />
                  </div>

                  {/* Payment Summary Details */}
                  {isPaymentSummaryVisible && (
                    <div className="w-full py-2">
                      <div className="border-t border-dashed border-gray-200 my-2"></div>
                      <div className="flex justify-between">
                        <span>2 Adults</span>
                        <span>$140</span>
                      </div>
                      <div className="flex justify-between">
                        <span>3 Children</span>
                        <span>$150</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>tickete Discount</span>
                        <span>- $40</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service Fees</span>
                        <span>$10</span>
                      </div>
                      <div className="border-t border-dashed border-gray-200 my-2"></div>
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>$300</span>
                      </div>
                    </div>
                  )}
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
            <div className="text-xs text-gray-600 ">
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
            <button className="cursor-pointer font-bold text-white text-lgi w-full  [border:none] py-spacing-sp-16 px-spacing-sp-20 bg-black  rounded-radii-r-16 overflow-hidden flex flex-row items-center justify-center gap-[12px]">
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
      <div className="w-full h-0 flex flex-col items-start justify-start max-w-[1200px] mq1450:max-w-full">
        <div className="self-stretch h-0.5 relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1" />
      </div>
    </section>
  );
};

export default Main;
