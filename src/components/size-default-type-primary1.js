import { useMemo } from "react";

const SizeDefaultTypePrimary1 = ({
  sizeDefaultTypePrimary1Si,
  iconLeft = true,
  iconRight = true,
  sizeDefaultTypePrimaryBorderRadius,
  sizeDefaultTypePrimaryBackgroundColor,
  sizeDefaultTypePrimaryBorder,
  sizeDefaultTypePrimaryBoxSizing,
  sizeDefaultTypePrimaryDisplay,
  sizeDefaultTypePrimaryFlexDirection,
  sizeDefaultTypePrimaryAlignItems,
  sizeDefaultTypePrimaryJustifyContent,
  sizeDefaultTypePrimaryPadding,
  sizeDefaultTypePrimaryGap,
  sizeDefaultTypePrimaryPosition,
  sizeDefaultTypePrimaryTop,
  sizeDefaultTypePrimaryLeft,
}) => {
  const sizeDefaultTypePrimary1Style = useMemo(() => {
    return {
      borderRadius: sizeDefaultTypePrimaryBorderRadius,
      backgroundColor: sizeDefaultTypePrimaryBackgroundColor,
      border: sizeDefaultTypePrimaryBorder,
      boxSizing: sizeDefaultTypePrimaryBoxSizing,
      display: sizeDefaultTypePrimaryDisplay,
      flexDirection: sizeDefaultTypePrimaryFlexDirection,
      alignItems: sizeDefaultTypePrimaryAlignItems,
      justifyContent: sizeDefaultTypePrimaryJustifyContent,
      padding: sizeDefaultTypePrimaryPadding,
      gap: sizeDefaultTypePrimaryGap,
      position: sizeDefaultTypePrimaryPosition,
      top: sizeDefaultTypePrimaryTop,
      left: sizeDefaultTypePrimaryLeft,
    };
  }, [
    sizeDefaultTypePrimaryBorderRadius,
    sizeDefaultTypePrimaryBackgroundColor,
    sizeDefaultTypePrimaryBorder,
    sizeDefaultTypePrimaryBoxSizing,
    sizeDefaultTypePrimaryDisplay,
    sizeDefaultTypePrimaryFlexDirection,
    sizeDefaultTypePrimaryAlignItems,
    sizeDefaultTypePrimaryJustifyContent,
    sizeDefaultTypePrimaryPadding,
    sizeDefaultTypePrimaryGap,
    sizeDefaultTypePrimaryPosition,
    sizeDefaultTypePrimaryTop,
    sizeDefaultTypePrimaryLeft,
  ]);

  return (
    <div
      className="rounded-[36.55px] bg-neutral-colors-white flex flex-row items-start justify-start py-6 px-9 gap-[8px] text-center text-lg text-neutral-colors-headings-black font-text-single-200-bold border-[1px] border-solid border-neutral-colors-color-600"
      style={sizeDefaultTypePrimary1Style}
    >
      {iconLeft && (
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/line-roundedsearch@2x.png"
        />
      )}
      <div className="relative leading-[18px]">Default</div>
      {iconRight && (
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/line-roundedarrow-right@2x.png"
        />
      )}
    </div>
  );
};

export default SizeDefaultTypePrimary1;
