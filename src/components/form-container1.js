import { Autocomplete, TextField } from "@mui/material";

const FormContainer1 = () => {
  return (
    <div className="absolute top-[128.1px] left-[667.3px] w-[752.2px] h-[333px] text-left text-2xl-3 text-lightsteelblue font-text-single-200-bold">
      <div className="absolute top-[0px] left-[0px] w-[90px] h-[314.6px] text-center text-lgi-2 font-montserrat">
        <Autocomplete
          className="absolute top-[0px] left-[0px]"
          disablePortal
          options={[]}
          renderInput={(params) => (
            <TextField
              {...params}
              color="primary"
              label="Menu"
              variant="filled"
              placeholder=""
              helperText=""
            />
          )}
        />
        <div className="absolute top-[64px] left-[0px] w-[90px] h-[250.5px]">
          <Autocomplete
            className="absolute top-[0px] left-[0px]"
            disablePortal
            options={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                color="primary"
                label="About"
                variant="standard"
                placeholder=""
                helperText=""
              />
            )}
          />
          <div className="absolute top-[38.4px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Products
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[76.8px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Research
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[115.3px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">News</div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[153.7px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start text-neutral-colors-text-gray">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Services
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[192.1px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">Blog</div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[230.5px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Contact
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[245.9px] w-[109px] h-[239.7px] text-neutral-colors-white">
        <b className="absolute top-[0px] left-[0px] leading-[21.34px]">
          Company
        </b>
        <div className="absolute top-[66px] left-[0px] w-[109px] h-[173.7px] text-center text-lgi-2 text-neutral-colors-text-gray">
          <div className="absolute top-[0px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Careers
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[38.4px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Culture
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[76.8px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Help Center
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[115.3px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Support
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
          <div className="absolute top-[153.7px] left-[0px] bg-darkslateblue flex flex-row items-start justify-start">
            <div className="shrink-0 flex flex-row items-center justify-start gap-[6.4px]">
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedpassword@2x.png"
              />
              <div className="relative leading-[19.21px] font-medium">
                Legal
              </div>
              <img
                className="relative w-[21.3px] h-[21.3px] overflow-hidden shrink-0 object-cover hidden"
                alt=""
                src="/line-roundedchevron-down@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[483.3px] w-[268.9px] h-[333px] text-darkslateblue">
        <b className="absolute top-[0px] left-[0px] leading-[21.34px]">
          Follow on Instagram
        </b>
        <div className="absolute top-[64px] left-[0px] w-[268.9px] h-[268.9px]">
          <img
            className="absolute top-[0px] left-[0px] rounded-[21.34px] w-[128.1px] h-[128.1px] object-cover"
            alt=""
            src="/container@2x.png"
          />
          <img
            className="absolute top-[0px] left-[140.9px] rounded-[21.34px] w-[128.1px] h-[128.1px] object-cover"
            alt=""
            src="/container@2x.png"
          />
          <img
            className="absolute top-[140.9px] left-[140.9px] rounded-[21.34px] w-[128.1px] h-[128.1px] object-cover"
            alt=""
            src="/container@2x.png"
          />
          <img
            className="absolute top-[140.9px] left-[0px] rounded-[21.34px] w-[128.1px] h-[128.1px] object-cover"
            alt=""
            src="/container@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;
