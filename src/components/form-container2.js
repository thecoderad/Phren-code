import { useMemo } from "react";

const FormContainer2 = ({
  dimensions,
  imageDimensions,
  imageDimensionsId,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensions2,
  imageDimensionsText5,
  imageDimensionsText6,
  imageDimensionsText7,
  imageDimensionsText8,
  imageDimensionsText9,
  imageDimensions3,
  propWidth,
  propTop,
  propWidth1,
  propHeight,
  propWidth2,
  propHeight1,
  propTop1,
  propWidth3,
  propHeight2,
}) => {
  const labelIconStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const inputLeftStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const inputPlaceholderIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight,
    };
  }, [propWidth1, propHeight]);

  const labelIcon1Style = useMemo(() => {
    return {
      width: propWidth2,
      height: propHeight1,
    };
  }, [propWidth2, propHeight1]);

  const inputLeft1Style = useMemo(() => {
    return {
      top: propTop1,
    };
  }, [propTop1]);

  const inputPlaceholderIcon1Style = useMemo(() => {
    return {
      width: propWidth3,
      height: propHeight2,
    };
  }, [propWidth3, propHeight2]);

  return (
    <div className="shrink-0 flex flex-col items-start justify-start gap-[28.7px] text-center text-base-1 text-neutral-colors-white font-onest">
      <div className="shrink-0 flex flex-col items-start justify-start gap-[10.76px]">
        <img
          className="relative w-[43.9px] h-[11.5px] object-cover"
          alt=""
          src={dimensions}
          style={labelIconStyle}
        />
        <div className="relative w-[256.5px] h-[64.6px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={imageDimensions}
            />
            <div className="absolute top-[7.2px] right-[13.3px] hidden flex-row items-start justify-start">
              <div className="rounded-[86.09px] bg-primary-colors-color-1 shrink-0 flex flex-row items-center justify-center py-[16.141735076904297px] px-[25.109365463256836px] gap-[5.38px]">
                <img
                  className="relative w-[16.1px] h-[16.1px] overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src={imageDimensionsId}
                />
                <b className="relative leading-[17.94px]">Default</b>
                <img
                  className="relative w-[14.3px] h-[14.3px] overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src={imageDimensionsText}
                />
              </div>
            </div>
            <img
              className="absolute h-[27.71%] top-[36.07%] right-[21.6px] bottom-[36.22%] max-h-full w-[17.9px] overflow-hidden object-cover hidden"
              alt=""
              src={imageDimensionsText2}
            />
            <div
              className="absolute top-[calc(50%_-_5.9px)] left-[21.5px] flex flex-row items-center justify-start gap-[8.97px]"
              style={inputLeftStyle}
            >
              <img
                className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src={imageDimensionsText3}
              />
              <img
                className="relative w-[86.8px] h-[11.8px] object-cover"
                alt=""
                src={imageDimensionsText4}
                style={inputPlaceholderIconStyle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-start justify-start gap-[10.76px]">
        <img
          className="relative w-[47.1px] h-[11.8px] object-cover"
          alt=""
          src={imageDimensions2}
          style={labelIcon1Style}
        />
        <div className="relative w-[256.5px] h-[64.6px] shrink-0">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%]">
            <img
              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src={imageDimensionsText5}
            />
            <div className="absolute top-[7.2px] right-[13.3px] hidden flex-row items-start justify-start">
              <div className="rounded-[86.09px] bg-primary-colors-color-1 shrink-0 flex flex-row items-center justify-center py-[16.141735076904297px] px-[25.109365463256836px] gap-[5.38px]">
                <img
                  className="relative w-[16.1px] h-[16.1px] overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src={imageDimensionsText6}
                />
                <b className="relative leading-[17.94px]">Default</b>
                <img
                  className="relative w-[14.3px] h-[14.3px] overflow-hidden shrink-0 object-cover hidden"
                  alt=""
                  src={imageDimensionsText7}
                />
              </div>
            </div>
            <img
              className="absolute h-[27.71%] top-[36.07%] right-[21.6px] bottom-[36.22%] max-h-full w-[17.9px] overflow-hidden object-cover hidden"
              alt=""
              src={imageDimensionsText8}
            />
            <div
              className="absolute top-[calc(50%_-_7.7px)] left-[21.5px] flex flex-row items-center justify-start gap-[8.97px]"
              style={inputLeft1Style}
            >
              <img
                className="relative w-[17.9px] h-[17.9px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src={imageDimensionsText9}
              />
              <img
                className="relative w-[112.8px] h-[15.4px] object-cover"
                alt=""
                src={imageDimensions3}
                style={inputPlaceholderIcon1Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer2;
