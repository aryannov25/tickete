import { useState } from "react";

const Main = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValue1, setSelectedValue1] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [isFocused2, setIsFocused2] = useState(false);

  const [isPaymentSummaryVisible, setIsPaymentSummaryVisible] = useState(false);

  const togglePaymentSummary = () => {
    setIsPaymentSummaryVisible(!isPaymentSummaryVisible);
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setIsFocused(false);
  };

  const handleChange1 = (e) => {
    setSelectedValue1(e.target.value);
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  const handleFocus1 = () => {
    setIsFocused1(true);
  };

  const handleBlur1 = () => {
    setIsFocused1(false);
  };

  const handleInput1 = (e) => {
    setInputValue1(e.target.value);
  };

  const handleInput2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleInput3 = (e) => {
    setInputValue3(e.target.value);
  };

  const handleInput4 = (e) => {
    setInputValue4(e.target.value);
  };

  const handleInput5 = (e) => {
    setInputValue5(e.target.value);
  };

  const handleFocus2 = () => {
    setIsFocused2(true);
  };

  const handleBlur2 = () => {
    setIsFocused2(false);
  };

  const inputPaddingClass = isFocused1 || isFocused2 ? "pl-4" : "pl-4";

  return (
    <section className="w-[1240px]  flex flex-col lg:flex-row items-center lg:items-start justify-center  mx-auto  py-0 px-5 box-border gap-[32px] max-w-full text-left text-5xl text-colors-text-c-text-grey-primary font-label-regular-bold mq825:gap-[32px]">
      <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full lg:flex-wrap">
        <div className="order-1 lg:order-2 w-full lg:flex-1 overflow-x-auto flex flex-col items-start justify-start gap-[64px] max-w-full mq450:gap-[64px] mq825:gap-[64px] mq825:min-w-full">
          <div className="w-[792px] max-w-full flex flex-col items-start justify-start gap-[32px] text-38xl font-heading-serif-xl">
            <div className="self-stretch rounded-radii-r-16 bg-grey-light-c-l-grey-05 box-border overflow-hidden flex flex-row items-start justify-start max-w-full text-sm font-label-regular-bold border-[1px] border-solid border-colors-border-c-border-grey-default-subtle">
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
          <div className="w-[792px] flex flex-col items-start justify-start gap-[32px] m-0 max-w-full">
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
                  <div className="relative w-full flex items-center min-w-[250px] h-14 rounded-radii-r-16 bg-brand-ghost-white border border-solid border-colors-border-c-border-grey-default">
                    {inputValue1 === "" && (
                      <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                        Enter your name <span className="text-red-500">*</span>
                      </span>
                    )}
                    <input
                      type="text"
                      className={`w-full h-full pr-4 text-base font-label-regular-bold text-colors-text-c-text-grey-tertiary1 bg-transparent focus:outline-none ${inputPaddingClass}`}
                      value={inputValue1}
                      onChange={handleInput1}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full text-colors-text-c-text-grey-tertiary1 mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch  rounded-radii-r-16 bg-brand-ghost-white overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] border-[1px] border-solid border-colors-border-c-border-grey-default mq450:flex-wrap">
                    {!isFocused2 && inputValue2 === "" && (
                      <span className="absolute  text-colors-text-c-text-grey-tertiary1">
                        Country Code <span className="text-red-500">*</span>
                      </span>
                    )}
                    <select
                      className={`w-full text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1  pr-4 bg-transparent focus:outline-none ${
                        isFocused2 || inputValue2
                          ? "text-colors-text-c-text-grey-tertiary1 "
                          : "text-gray-400 "
                      }`}
                      value={inputValue2}
                      onChange={handleInput2}
                      onFocus={handleFocus2}
                      onBlur={handleBlur2}
                      required
                    >
                      <option value="" disabled></option>
                      <option value="+1">United States (+1)</option>
                      <option value="+44">United Kingdom (+44)</option>
                      <option value="+91">India (+91)</option>
                      <option value="+61">Australia (+61)</option>
                      <option value="+81">Japan (+81)</option>
                    </select>
                    {inputValue2 === "" && !isFocused2 && (
                      <span className="text-red-500 absolute right-4 top-1/2 transform -translate-y-1/2">
                        *
                      </span>
                    )}
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="relative w-full flex items-center min-w-[250px] h-14 rounded-radii-r-16 bg-brand-ghost-white border border-solid border-colors-border-c-border-grey-default">
                    {inputValue3 === "" && (
                      <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                        Phone Number <span className="text-red-500">*</span>
                      </span>
                    )}
                    <input
                      type="text"
                      className={`w-full h-full pr-4 text-base font-label-regular-bold text-colors-text-c-text-grey-tertiary1 bg-transparent focus:outline-none ${inputPaddingClass}`}
                      value={inputValue3}
                      onChange={handleInput3}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full mq825:flex-wrap">
                <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="relative w-full flex items-center min-w-[250px] h-14 rounded-radii-r-16 bg-brand-ghost-white border border-solid border-colors-border-c-border-grey-default">
                    {inputValue4 === "" && (
                      <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                        Email <span className="text-red-500">*</span>
                      </span>
                    )}
                    <input
                      type="text"
                      className={`w-full h-full pr-4 text-base font-label-regular-bold text-colors-text-c-text-grey-tertiary1 bg-transparent focus:outline-none ${inputPaddingClass}`}
                      value={inputValue4}
                      onChange={handleInput4}
                      required
                    />
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start max-w-full">
                  <div className="relative w-full flex items-center min-w-[250px] h-14 rounded-radii-r-16 bg-brand-ghost-white border border-solid border-colors-border-c-border-grey-default">
                    {inputValue5 === "" && (
                      <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                        Confirm Email <span className="text-red-500">*</span>
                      </span>
                    )}
                    <input
                      type="text"
                      className={`w-full h-full pr-4 text-base font-label-regular-bold text-colors-text-c-text-grey-tertiary1 bg-transparent focus:outline-none ${inputPaddingClass}`}
                      value={inputValue5}
                      onChange={handleInput5}
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

          <div className="w-[792px] max-w-full flex flex-col items-start justify-start gap-[32px]">
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
                <div className="relative w-96 flex items-center min-w-[250px] h-14 rounded-radii-r-16 bg-brand-ghost-white border border-solid border-colors-border-c-border-grey-default">
                  {inputValue === "" && (
                    <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                      Enter your name <span className="text-red-500">*</span>
                    </span>
                  )}
                  <input
                    type="text"
                    className={`w-full h-full pr-4 text-base font-label-regular-bold text-colors-text-c-text-grey-tertiary1 bg-transparent focus:outline-none ${inputPaddingClass}`}
                    value={inputValue}
                    onChange={handleInput}
                    required
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] border-[1px] border-solid border-colors-border-c-border-grey-default mq450:flex-wrap">
                    <div className="flex-1 h-6 flex flex-row items-center justify-start gap-[4px] min-w-[53px] text-colors-text-c-text-grey-tertiary1 relative">
                      {!isFocused1 && selectedValue1 === "" && (
                        <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                          Select an option{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      )}
                      <select
                        className={`w-full text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1  pr-4 bg-transparent focus:outline-none ${
                          isFocused1 || selectedValue1
                            ? "text-colors-text-c-text-grey-tertiary1 pl-4"
                            : "text-gray-400"
                        }`}
                        value={selectedValue1}
                        onChange={handleChange1}
                        onFocus={handleFocus1}
                        onBlur={handleBlur1}
                        required
                      >
                        <option value="" disabled></option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                <div className="relative flex-1 flex flex-col items-start justify-start min-w-[250px] max-w-full">
                  <div className="self-stretch rounded-radii-r-16 bg-brand-ghost-white overflow-hidden flex flex-row items-center justify-start py-spacing-sp-16 pr-spacing-sp-16 pl-spacing-sp-16 gap-[10px] border-[1px] border-solid border-colors-border-c-border-grey-default">
                    <div className="flex-1 flex flex-row items-center justify-start gap-[4px] min-w-[53px] text-colors-text-c-text-grey-tertiary1">
                      {!isFocused && selectedValue === "" && (
                        <span className="absolute left-4 text-colors-text-c-text-grey-tertiary1">
                          Select an option{" "}
                          <span className="text-red-500">*</span>
                        </span>
                      )}
                      <select
                        className={`w-full text-base leading-[22px] font-label-regular-bold text-colors-text-c-text-grey-tertiary1 ${
                          isFocused || selectedValue !== "" ? "pl-4" : "pl-20"
                        } pr-4 bg-transparent focus:outline-none`}
                        value={selectedValue}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        required
                      >
                        <option value="" disabled></option>
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
        <div className="order-2 lg:order-1 w-96 rounded-radii-r-24 bg-brand-ghost-white box-border flex flex-col items-start justify-start min-w-[384px] max-w-full text-right text-sm text-colors-text-c-text-grey-secondary1 border-[1px] border-solid border-colors-border-c-border-grey-divider-default1 lg:flex-1 mq450:min-w-full">
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

                <div className="self-stretch flex flex-col items-start justify-start gap-[45px] mq450:gap-[45px]">
                  <div className="flex flex-row items-start justify-start py-0 px-3">
                    <button className="cursor-pointer [border:none] p-0 bg-[white] flex flex-row items-center justify-center z-[2]">
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
                    <div className="h-8 w-8 rounded-radii-r-circle bg-white [backdrop-filter:blur(50px)] flex flex-row items-start justify-start p-2 box-border">
                      <img
                        className="h-4 w-4 relative"
                        alt=""
                        src="/caretleft.svg"
                      />
                    </div>
                    <div className="h-8 w-8 rounded-radii-r-circle bg-white [backdrop-filter:blur(50px)] flex flex-row items-start justify-start p-2 box-border">
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
                        <div className="flex-1 relative leading-[20px] font-bold inline-block max-w-full">
                          Amsterdam Open Boat Canal Cruise
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
          <div className="self-stretch flex flex-col pt-spacing-sp-16 px-spacing-sp-16 pb-spacing-sp-32 gap-[32px]  text-lg text-colors-text-c-text-grey-primary font-label-regular-bold border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default1 mq450:gap-[32px]">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-800 font-semibold text-left">
                  Total payable:
                </p>
                <div className="text-green-600 w-[8.5rem] text-sm px-2 my-2 bg-green-100 rounded-lg flex items-center gap-2">
                  <img
                    src="/piggybank.svg"
                    alt="Piggybank"
                    className="h-4 w-auto" // Adjusted for automatic width based on the height
                  />
                  <span>You saved $40</span>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-gray-600">
                    You will be charged in AED
                  </p>
                  <img className="h-6 w-6 p-1" alt="" src="/info.svg" />
                </div>
              </div>
              <span className="text-right font-bold">$300</span>
            </div>
            <div className="text-xs text-gray-600 text-left">
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
