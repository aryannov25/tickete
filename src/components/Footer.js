const Footer = () => {
  return (
    <footer className="w-full bg-black flex flex-row items-center justify-center  text-left text-sm text-colors-text-c-text-grey-tertiary font-label-regular-bold mq1450:max-w-full">
      <div className="flex-1 bg-black flex flex-col items-center justify-end py-spacing-sp-120 px-0 box-border gap-[64px] max-w-[1440px] min-h-[316px] mq450:gap-[64px] mq825:gap-[64px] mq1450:max-w-full">
        <div className="w-[1240px] flex flex-row items-center justify-start py-0 px-5 box-border max-w-full">
          <img className="h-12 w-[189.8px] relative" alt="" src="/logo-1.svg" />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full ">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-colors-border-c-border-grey-divider-default" />
          <div className="w-full flex flex-row items-center justify-start py-0 px-2  box-border max-w-[1200px] mq1450:max-w-full">
            <div className="flex flex-row items-start justify-start gap-[12px] w-auto lg:px-5   lg:justify-between ">
              <div className="relative leading-[20px]">Made with ❤️</div>
              <div className="relative leading-[20px] font-semibold "></div>
              <div className=" flex flex-row items-center justify-center gap-[8px] text-colors-text-c-text-grey-secondary">
                <div className="relative leading-[20px] font-semibold">
                  • Privacy policy
                </div>
                <div className="relative leading-[20px] font-semibold">
                  • Cancellation policy
                </div>
                <div className="relative leading-[20px] font-semibold">
                  • Terms of usage
                </div>
                <div className="relative leading-[20px] font-semibold">
                  • Sitemap
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
