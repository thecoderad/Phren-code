import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import FormContainer2 from "./form-container2";
import SizeDefaultTypePrimary from "./size-default-type-primary";

const FormContainer = () => {
  return (
    <section className="absolute top-[5676px] left-[-4px] w-[1542px] h-[993px] overflow-hidden text-center text-base-1 text-neutral-colors-white font-onest">
      <img
        className="absolute top-[0px] left-[0px] w-[1542px] h-[993px] object-cover"
        alt=""
        src="/rectangle-4448@2x.png"
      />
      <div className="absolute top-[107px] left-[calc(50%_-_334.6px)] w-[674.4px] h-[778.4px]">
        <img
          className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/rectangle-4444@2x.png"
        />
        <img
          className="absolute h-[1.52%] w-[30.72%] top-[17.79%] right-[34.67%] bottom-[80.69%] left-[34.61%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/paragraph@2x.png"
        />
        <div className="absolute top-[calc(50%_-_154.2px)] left-[calc(50%_-_267.3px)] flex flex-col items-start justify-start gap-[28.7px]">
          <div className="shrink-0 flex flex-row items-start justify-start gap-[21.52px]">
            <FormContainer2
              dimensions="/label@2x.png"
              imageDimensions="/input@2x.png"
              imageDimensionsId="/line-roundedsearch@2x.png"
              imageDimensionsText="/line-roundedarrow-right@2x.png"
              imageDimensionsText2="/icon-input-left@2x.png"
              imageDimensionsText3="/input-icon-left@2x.png"
              imageDimensionsText4="/input-placeholder@2x.png"
              imageDimensions2="/label@2x.png"
              imageDimensionsText5="/input@2x.png"
              imageDimensionsText6="/line-roundedsearch@2x.png"
              imageDimensionsText7="/line-roundedarrow-right@2x.png"
              imageDimensionsText8="/icon-input-left@2x.png"
              imageDimensionsText9="/input-icon-left@2x.png"
              imageDimensions3="/input-placeholder@2x.png"
              propWidth="43.9px"
              propTop="calc(50% - 5.9px)"
              propWidth1="86.8px"
              propHeight="11.8px"
              propWidth2="47.1px"
              propHeight1="11.8px"
              propTop1="calc(50% - 7.7px)"
              propWidth3="112.8px"
              propHeight2="15.4px"
            />
            <FormContainer2
              dimensions="/label@2x.png"
              imageDimensions="/input@2x.png"
              imageDimensionsId="/line-roundedsearch@2x.png"
              imageDimensionsText="/line-roundedarrow-right@2x.png"
              imageDimensionsText2="/icon-input-left@2x.png"
              imageDimensionsText3="/input-icon-left@2x.png"
              imageDimensionsText4="/input-placeholder@2x.png"
              imageDimensions2="/label@2x.png"
              imageDimensionsText5="/input@2x.png"
              imageDimensionsText6="/line-roundedsearch@2x.png"
              imageDimensionsText7="/line-roundedarrow-right@2x.png"
              imageDimensionsText8="/icon-input-left@2x.png"
              imageDimensionsText9="/input-icon-left@2x.png"
              imageDimensions3="/input-placeholder@2x.png"
              propWidth="40.1px"
              propTop="calc(50% - 7.6px)"
              propWidth1="153.7px"
              propHeight="15.2px"
              propWidth2="74.8px"
              propHeight1="15px"
              propTop1="calc(50% - 5.9px)"
              propWidth3="71.1px"
              propHeight2="11.8px"
            />
          </div>
          <div className="shrink-0 flex flex-col items-start justify-start gap-[10.76px]">
            <img
              className="relative w-[152.4px] h-[15px] object-cover"
              alt=""
              src="/label@2x.png"
            />
            <TextField
              className="[border:none] bg-[transparent]"
              color="primary"
              sx={{ width: 534.5 }}
              variant="filled"
            />
          </div>
          <SizeDefaultTypePrimary
            sizeDefaultTypePrimarySiz="Send message"
            sizeDefaultTypePrimaryBorderRadius="unset"
            sizeDefaultTypePrimaryBackgroundColor="unset"
            sizeDefaultTypePrimaryAlignItems="unset"
            sizeDefaultTypePrimaryPadding="unset"
            sizeDefaultTypePrimaryFlexShrink="unset"
            sizeDefaultTypePrimaryPosition="unset"
            sizeDefaultTypePrimaryTop="unset"
            sizeDefaultTypePrimaryLeft="unset"
            sizeDefaultTypePrimaryDisplay="unset"
            sizeDefaultTypePrimaryFlexDirection="unset"
            sizeDefaultTypePrimaryJustifyContent="unset"
            sizeDefaultTypePrimaryBoxSizing="unset"
            sizeDefaultTypePrimaryGap="unset"
          />
        </div>
      </div>
      <h1 className="m-0 absolute top-[171px] left-[calc(50%_-_206px)] text-29xl leading-[71px] font-medium font-montserrat">
        Reach Out Today
      </h1>
    </section>
  );
};

export default FormContainer;
