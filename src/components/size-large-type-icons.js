import { useMemo } from "react";

const SizeLargeTypeIcons = ({
  lineRoundedSearch,
  inputPlaceholder,
  lineRoundedSearch1,
  iconLeft = true,
  iconRight = true,
  sizeLargeTypeIconsBorderRadius,
  sizeLargeTypeIconsBackgroundColor,
  sizeLargeTypeIconsWidth,
  sizeLargeTypeIconsPosition,
  sizeLargeTypeIconsTop,
  sizeLargeTypeIconsLeft,
  containerWidth,
  textIconsWidth,
  textIconsGap,
  inputContentWidth,
  inputPlaceholderColor,
}) => {
  const sizeLargeTypeIconsStyle = useMemo(() => {
    return {
      borderRadius: sizeLargeTypeIconsBorderRadius,
      backgroundColor: sizeLargeTypeIconsBackgroundColor,
      width: sizeLargeTypeIconsWidth,
      position: sizeLargeTypeIconsPosition,
      top: sizeLargeTypeIconsTop,
      left: sizeLargeTypeIconsLeft,
    };
  }, [
    sizeLargeTypeIconsBorderRadius,
    sizeLargeTypeIconsBackgroundColor,
    sizeLargeTypeIconsWidth,
    sizeLargeTypeIconsPosition,
    sizeLargeTypeIconsTop,
    sizeLargeTypeIconsLeft,
  ]);

  const containerStyle = useMemo(() => {
    return {
      width: containerWidth,
    };
  }, [containerWidth]);

  const textIconsStyle = useMemo(() => {
    return {
      width: textIconsWidth,
      gap: textIconsGap,
    };
  }, [textIconsWidth, textIconsGap]);

  const inputContentStyle = useMemo(() => {
    return {
      width: inputContentWidth,
    };
  }, [inputContentWidth]);

  const inputPlaceholderStyle = useMemo(() => {
    return {
      color: inputPlaceholderColor,
    };
  }, [inputPlaceholderColor]);

  return (
    <div
      className="rounded-[50px] bg-neutral-colors-color-300 w-[419px] flex flex-row items-start justify-start p-6 box-border text-center text-base text-neutral-colors-text-gray font-text-single-200-bold"
      style={sizeLargeTypeIconsStyle}
    >
      <div
        className="w-[371px] shrink-0 flex flex-row items-center justify-start"
        style={containerStyle}
      >
        <div
          className="w-[371px] shrink-0 flex flex-row items-center justify-start gap-[240px]"
          style={textIconsStyle}
        >
          <div
            className="w-[113px] shrink-0 flex flex-row items-start justify-start gap-[8px]"
            style={inputContentStyle}
          >
            {iconLeft && (
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
                alt=""
                src={lineRoundedSearch}
              />
            )}
            <div
              className="relative leading-[18px]"
              style={inputPlaceholderStyle}
            >
              {inputPlaceholder}
            </div>
          </div>
          {iconRight && (
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
              alt=""
              src={lineRoundedSearch1}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SizeLargeTypeIcons;
