import { Button } from "@mui/material";
import Property1Default from "./property1-default";
import SizeDefaultTypePrimary1 from "./size-default-type-primary1";

const HealthRevolutionSection = () => {
  return (
    <section className="absolute top-[117.4px] left-[0px] w-[1536.8px] h-[906.1px] text-left text-40xl-8 text-neutral-colors-white font-montserrat">
      <img
        className="absolute top-[0px] left-[0px] w-[1536.8px] h-[906.1px] object-cover"
        alt=""
        src="/group@2x.png"
      />
      <div className="absolute top-[330.8px] left-[calc(50%_-_651px)] leading-[70.44px] font-medium inline-block w-[686.2px] h-[159px]">
        Revolutionizing Health for Tomorrow
      </div>
      <div className="absolute top-[529.8px] left-[calc(50%_-_651px)] w-[615.8px] h-[79.6px]">
        <Property1Default
          lineRoundedSearch="/line-roundedsearch@2x.png"
          lineRoundedArrowRight="/line-roundedarrow-right@2x.png"
          property1DefaultPosition="absolute"
          property1DefaultTop="0px"
          property1DefaultLeft="0px"
          property1DefaultFlexShrink="0"
          masterPrimaryButtonBorderRadius="43.84px"
        />
        <SizeDefaultTypePrimary1
          sizeDefaultTypePrimary1Si="Consult with us"
          sizeDefaultTypePrimaryBorderRadius="unset"
          sizeDefaultTypePrimaryBackgroundColor="unset"
          sizeDefaultTypePrimaryBorder="unset"
          sizeDefaultTypePrimaryBoxSizing="unset"
          sizeDefaultTypePrimaryDisplay="unset"
          sizeDefaultTypePrimaryFlexDirection="unset"
          sizeDefaultTypePrimaryAlignItems="unset"
          sizeDefaultTypePrimaryJustifyContent="unset"
          sizeDefaultTypePrimaryPadding="unset"
          sizeDefaultTypePrimaryGap="unset"
          sizeDefaultTypePrimaryPosition="absolute"
          sizeDefaultTypePrimaryTop="4.6px"
          sizeDefaultTypePrimaryLeft="419.2px"
        />
      </div>
    </section>
  );
};

export default HealthRevolutionSection;
