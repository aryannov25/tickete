const Header = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 box-border max-w-full text-left text-sm text-gray font-label-regular-bold">
      {/* Common layout with padding */}
      <div className="self-stretch py-3 bg-whitesmoke-200 [backdrop-filter:blur(50px)] overflow-hidden flex flex-row items-center justify-between px-16 lg:px-8 box-border max-w-full text-base text-colors-text-c-text-grey-secondary1">
        {/* Back arrow, only visible on mobile */}
        <img
          className="h-4 w-auto relative hidden lg:block"
          alt="back arrow"
          src="/back-arrow.svg"
        />
        {/* Logo, hidden on mobile */}
        <img
          className="h-8 w-auto relative lg:hidden block"
          loading="eager"
          alt="logo"
          src="/logo.svg"
        />
        {/* Checkout */}
        <div className="flex-1 flex items-center justify-center mx-4 lg:mx-0">
          <img className="h-5 w-5 relative" alt="lock icon" src="/lock.svg" />
          <span className="leading-[22px] font-semibold">Checkout</span>
        </div>
        {/* Help */}
        <div className=" flex items-center justify-end mx">
          <img
            className="h-5 w-5 relative"
            alt="help icon"
            src="/question.svg"
          />
          <span className="leading-[22px] font-semibold">Help</span>
        </div>
      </div>
      {/* Timer bar, only visible on web */}
      <div className="self-stretch bg-black overflow-hidden flex items-center justify-center p-2.5 text-center text-grey-light-c-l-grey-05">
        <span className="relative leading-[20px] font-semibold">
          Holding your tickets for 30:00
        </span>
      </div>
      {/* Mobile layout */}
      <div className="w-[1240px] -mb-10 flex flex-col lg:flex-row items-center lg:items-start justify-center mt-6 mx-auto box-border gap-[32px] max-w-full text-left text-5xl text-colors-text-c-text-grey-primary font-label-regular-bold mq825:gap-[32px]">
        <div className="self-stretch flex flex-row items-start justify-start gap-[24px] max-w-full lg:flex-wrap">
          <div className=" w-full lg:flex-1  flex flex-col items-start justify-start max-w-full mq450:gap-[64px] mq825:gap-[64px] mq825:min-w-full">
            <div className="w-[792px] flex flex-col items-start justify-start gap-[32px] text-38xl font-heading-serif-xl">
              <div className="flex-1 flex flex-row items-start justify-start  pr-spacing-sp-16 pl-spacing-sp-20 box-border gap-[12px] max-w-full mq825:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start gap-[10px] min-w-[468px] max-w-full mq825:min-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start  ">
                    <div className="self-stretch  pt-0 px-0 pb-spacing-sp-28 box-border max-w-full ">
                      <h1 className="font-bold -mt-16  leading-[64px] text-27xl font-inherit inline-block max-w-full mq450:text-15xl mq450:leading-[38px] mq825:text-27xl mq825:leading-[51px]">
                        Confirm & pay
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
