import Property1Default from "./property1-default";

const Header = () => {
  return (
    <header className="absolute top-[-3.2px] left-[0px] bg-neutral-colors-white w-[1536.8px] h-[117.4px] text-center text-lgi-2 text-black font-montserrat">
      <section className="relative w-[1111px] h-[1084.3px] bg-[url('/public/subtract@3x.png')] bg-cover bg-no-repeat bg-[top] hidden">
        <img
          className="relative w-[1111px] h-[1084.3px] object-cover"
          alt=""
          src="/subtract@2x.png"
        />
        <div className="absolute top-[4.3px] left-[16px] w-[1536.8px] h-[117.4px]">
          <div className="absolute top-[0px] left-[0px] bg-neutral-colors-white w-[1536.8px] h-[117.4px]" />
          <img
            className="absolute top-[29.9px] left-[117.4px] w-[222px] h-[59.8px] object-cover"
            alt=""
            src="/microsoftteamsimage-11@2x.png"
          />
          <div className="absolute top-[18.1px] left-[723.6px] w-[708.6px] h-[81.1px]">
            <Property1Default
              lineRoundedSearch="/line-roundedsearch@2x.png"
              lineRoundedArrowRight="/line-roundedarrow-right@2x.png"
              property1DefaultPosition="absolute"
              property1DefaultTop="0px"
              property1DefaultLeft="0px"
              property1DefaultFlexShrink="0"
              masterPrimaryButtonBorderRadius="50.45px"
            />
          </div>
        </div>
      </section>
      <img
        className="absolute top-[30.9px] left-[122.7px] w-[222px] h-[59.8px] object-cover"
        alt=""
        src="/microsoftteamsimage-11@2x.png"
      />
      <div className="absolute top-[51.2px] left-[617.2px] flex flex-row items-start justify-start gap-[35.22px]">
        <div className="relative leading-[19.21px] font-semibold text-black1 inline-block w-[89.6px] shrink-0">
          About
        </div>
        <div className="relative leading-[19.21px] font-semibold inline-block w-[115.3px] shrink-0">
          Products
        </div>
        <div className="relative leading-[19.21px] font-semibold">Research</div>
        <div className="relative leading-[19.21px] font-semibold">News</div>
        <div className="shrink-0 flex flex-row items-center justify-start gap-[10.67px] text-black1">
          <div className="relative leading-[19.21px] font-semibold">
            Services
          </div>
          <img
            className="relative w-[12.5px] h-[6.2px] object-cover"
            alt=""
            src="/vector@2x.png"
          />
        </div>
        <div className="relative leading-[19.21px] font-semibold">Blog</div>
        <div className="relative leading-[19.21px] font-semibold">Contact</div>
      </div>
    </header>
  );
};

export default Header;
