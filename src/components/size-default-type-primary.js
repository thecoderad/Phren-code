import { useMemo } from "react";

const SizeDefaultTypePrimary = ({
  sizeDefaultTypePrimarySiz,
  lineRoundedSearch,
  buttonText,
  lineRoundedArrowRight,
  iconLeft = true,
  iconRight = true,
  sizeDefaultTypePrimaryBorderRadius,
  sizeDefaultTypePrimaryBackgroundColor,
  sizeDefaultTypePrimaryAlignItems,
  sizeDefaultTypePrimaryPadding,
  sizeDefaultTypePrimaryFlexShrink,
  sizeDefaultTypePrimaryPosition,
  sizeDefaultTypePrimaryTop,
  sizeDefaultTypePrimaryLeft,
  sizeDefaultTypePrimaryDisplay,
  sizeDefaultTypePrimaryFlexDirection,
  sizeDefaultTypePrimaryJustifyContent,
  sizeDefaultTypePrimaryBoxSizing,
  sizeDefaultTypePrimaryGap,
  lineRoundedSearchIconWidth,
  lineRoundedSearchIconHeight,
  buttonTextFontFamily,
  buttonTextFontSize,
  buttonTextLineHeight,
  lineRoundedArrowRightWidth,
  lineRoundedArrowRightHeight,
}) => {
  const sizeDefaultTypePrimaryStyle = useMemo(() => {
    return {
      borderRadius: sizeDefaultTypePrimaryBorderRadius,
      backgroundColor: sizeDefaultTypePrimaryBackgroundColor,
      alignItems: sizeDefaultTypePrimaryAlignItems,
      padding: sizeDefaultTypePrimaryPadding,
      flexShrink: sizeDefaultTypePrimaryFlexShrink,
      position: sizeDefaultTypePrimaryPosition,
      top: sizeDefaultTypePrimaryTop,
      left: sizeDefaultTypePrimaryLeft,
      display: sizeDefaultTypePrimaryDisplay,
      flexDirection: sizeDefaultTypePrimaryFlexDirection,
      justifyContent: sizeDefaultTypePrimaryJustifyContent,
      boxSizing: sizeDefaultTypePrimaryBoxSizing,
      gap: sizeDefaultTypePrimaryGap,
    };
  }, [
    sizeDefaultTypePrimaryBorderRadius,
    sizeDefaultTypePrimaryBackgroundColor,
    sizeDefaultTypePrimaryAlignItems,
    sizeDefaultTypePrimaryPadding,
    sizeDefaultTypePrimaryFlexShrink,
    sizeDefaultTypePrimaryPosition,
    sizeDefaultTypePrimaryTop,
    sizeDefaultTypePrimaryLeft,
    sizeDefaultTypePrimaryDisplay,
    sizeDefaultTypePrimaryFlexDirection,
    sizeDefaultTypePrimaryJustifyContent,
    sizeDefaultTypePrimaryBoxSizing,
    sizeDefaultTypePrimaryGap,
  ]);

  const lineRoundedSearchIconStyle = useMemo(() => {
    return {
      width: lineRoundedSearchIconWidth,
      height: lineRoundedSearchIconHeight,
    };
  }, [lineRoundedSearchIconWidth, lineRoundedSearchIconHeight]);

  const buttonTextStyle = useMemo(() => {
    return {
      fontFamily: buttonTextFontFamily,
      fontSize: buttonTextFontSize,
      lineHeight: buttonTextLineHeight,
    };
  }, [buttonTextFontFamily, buttonTextFontSize, buttonTextLineHeight]);

  const lineRoundedArrowRightStyle = useMemo(() => {
    return {
      width: lineRoundedArrowRightWidth,
      height: lineRoundedArrowRightHeight,
    };
  }, [lineRoundedArrowRightWidth, lineRoundedArrowRightHeight]);

  return (
    <div
      className="rounded-[40px] bg-neutral-colors-headings-black flex flex-row items-start justify-start py-6 px-9 gap-[8px] text-center text-lg text-neutral-colors-white font-text-single-200-bold"
      style={sizeDefaultTypePrimaryStyle}
    >
      {iconLeft && (
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={lineRoundedSearch}
          style={lineRoundedSearchIconStyle}
        />
      )}
      <b className="relative leading-[18px]" style={buttonTextStyle}>
        {buttonText}
      </b>
      {iconRight && (
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
          alt=""
          src={lineRoundedArrowRight}
          style={lineRoundedArrowRightStyle}
        />
      )}
    </div>
  );
};

export default SizeDefaultTypePrimary;
