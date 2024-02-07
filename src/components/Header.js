const Header = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 box-border max-w-full text-left text-sm text-gray font-label-regular-bold">
      <div className="self-stretch bg-whitesmoke-200 [backdrop-filter:blur(50px)] overflow-hidden flex flex-row items-center justify-center p-[13px] box-border max-w-full text-base text-colors-text-c-text-grey-secondary1">
        <div className="w-[1239.5px] flex flex-row items-center justify-between py-0 px-5 box-border gap-[20px] max-w-full mq450:flex-wrap">
          <img
            className="h-8 w-[126.5px] relative"
            loading="eager"
            alt=""
            src="/logo.svg"
          />
          <div className="w-[101px] overflow-hidden shrink-0 flex flex-row items-center justify-center gap-[8px] max-w-[486px] mq825:max-w-full">
            <img
              className="h-5 w-5 relative"
              loading="eager"
              alt=""
              src="/lock.svg"
            />
            <div className="flex-1 relative leading-[22px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
              Checkout
            </div>
            <img
              className="h-5 w-5 relative hidden"
              alt=""
              src="/diamond.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-end gap-[2px] text-right text-colors-text-c-text-grey-primary">
            <div className="h-11 w-[65px] rounded-xl bg-brand-ghost-white overflow-hidden shrink-0 hidden" />
            <div className="self-stretch rounded-radii-r-12 bg-whitesmoke-300 [backdrop-filter:blur(50px)] overflow-hidden hidden flex-row items-center justify-end py-spacing-sp-12 px-spacing-sp-16 gap-[4px]">
              <img className="h-5 w-5 relative" alt="" src="/globesimple.svg" />
              <div className="self-stretch relative leading-[22px]">EN</div>
              <div className="self-stretch relative leading-[22px]">/</div>
              <div className="self-stretch relative leading-[22px]">USD</div>
            </div>
            <div className="rounded-radii-r-12 overflow-hidden flex flex-row items-center justify-end py-spacing-sp-12 px-spacing-sp-16 gap-[4px]">
              <img className="h-5 w-5 relative" alt="" src="/question.svg" />
              <div className="relative leading-[22px]">Help</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch bg-black overflow-hidden flex flex-row items-center justify-center p-2.5 text-center text-grey-light-c-l-grey-05">
        <div className="w-[239px] relative leading-[20px] font-semibold inline-block whitespace-nowrap pl-5 pr-5">
          Holding your tickets for 30:00
        </div>
      </div>
    </section>
  );
};

export default Header;
