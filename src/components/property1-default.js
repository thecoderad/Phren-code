import { useMemo } from "react";
import SizeDefaultTypePrimary from "./size-default-type-primary";

const Property1Default = ({
  lineRoundedSearch,
  lineRoundedArrowRight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  property1DefaultFlexShrink,
  masterPrimaryButtonBorderRadius,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
      flexShrink: property1DefaultFlexShrink,
    };
  }, [
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
    property1DefaultFlexShrink,
  ]);

  const sizeDefaultTypePrimaryStyle = useMemo(() => {
    return {
      borderRadius: masterPrimaryButtonBorderRadius,
    };
  }, [masterPrimaryButtonBorderRadius]);

  return (
    <div
      className="flex flex-row items-start justify-start"
      style={property1DefaultStyle}
    >
      <SizeDefaultTypePrimary
        lineRoundedSearch="/line-roundedsearch@2x.png"
        buttonText="Explore Our Breakthroughs"
        lineRoundedArrowRight="/line-roundedarrow-right@2x.png"
        iconLeft={false}
        iconRight
        sizeDefaultTypePrimaryBorderRadius="47.27px"
        sizeDefaultTypePrimaryBackgroundColor="#ff6347"
        sizeDefaultTypePrimaryAlignItems="center"
        sizeDefaultTypePrimaryPadding="28px 56px"
        sizeDefaultTypePrimaryFlexShrink="0"
        sizeDefaultTypePrimaryPosition="unset"
        sizeDefaultTypePrimaryTop="unset"
        sizeDefaultTypePrimaryLeft="unset"
        sizeDefaultTypePrimaryDisplay="flex"
        sizeDefaultTypePrimaryFlexDirection="row"
        sizeDefaultTypePrimaryJustifyContent="flex-start"
        sizeDefaultTypePrimaryBoxSizing="border-box"
        sizeDefaultTypePrimaryGap="8px"
        lineRoundedSearchIconWidth="20px"
        lineRoundedSearchIconHeight="20px"
        buttonTextFontFamily="Montserrat"
        buttonTextFontSize="20px"
        buttonTextLineHeight="20px"
        lineRoundedArrowRightWidth="20px"
        lineRoundedArrowRightHeight="20px"
      />
    </div>
  );
};

export default Property1Default;
