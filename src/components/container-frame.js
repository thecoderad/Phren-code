import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const ContainerFrame = () => {
  const [masterLinkAnchorEl, setMasterLinkAnchorEl] = useState(null);
  const masterLinkOpen = Boolean(masterLinkAnchorEl);
  const handleMasterLinkClick = (event) => {
    setMasterLinkAnchorEl(event.currentTarget);
  };
  const handleMasterLinkClose = () => {
    setMasterLinkAnchorEl(null);
  };
  return (
    <section className="absolute top-[3984.2px] left-[0px] w-[1536.4px] h-[853.6px] overflow-hidden text-left text-21xl-9 text-neutral-colors-white font-montserrat">
      <div className="absolute top-[0px] left-[0px] [background:linear-gradient(rgba(0,_51,_102,_0.13),_rgba(0,_51,_102,_0.13)),_#003366] shadow-[70.4px_-70.4px_70.41px_rgba(0,_39,_78,_0.13)_inset,_-70.4px_70.4px_70.41px_rgba(255,_255,_255,_0.13)_inset] [backdrop-filter:blur(159.13px)] w-[1536.4px] h-[853.6px]">
        <img
          className="absolute top-[225.2px] left-[860.8px] rounded-[32.44px] w-[639.1px] h-[561.2px] object-cover"
          alt=""
          src="/container@2x.png"
        />
      </div>
      <div className="absolute top-[336.8px] left-[115.4px] w-[613px] h-[301.8px]">
        <b className="absolute top-[0px] left-[0px] leading-[53.6px] inline-block w-[613px]">{`Elevate efficiency through Pioneering Medicine via Research & Development`}</b>
        <div className="absolute top-[181.4px] left-[0px] text-xl-4 leading-[32.16px] inline-block w-[574.7px]">{`Optimize efficiency with our cutting-edge Research & Development in Pioneering Medicine.`}</div>
        <div className="absolute top-[261.8px] left-[0px] rounded-16xl bg-tomato-100 h-10 flex flex-col items-center justify-center py-[5.64965295791626px] px-[11.29930591583252px] box-border">
          <div>
            <Button
              id="button-Learn more"
              aria-controls="menu-Learn more"
              aria-haspopup="true"
              aria-expanded={masterLinkOpen ? "true" : undefined}
              onClick={handleMasterLinkClick}
              color="primary"
            >
              Learn more
            </Button>
            <Menu
              anchorEl={masterLinkAnchorEl}
              open={masterLinkOpen}
              onClose={handleMasterLinkClose}
            />
          </div>
        </div>
      </div>
      <h1 className="m-0 absolute top-[28.3px] left-[calc(50%_-_366px)] text-29xl leading-[70.44px] font-medium font-inherit text-gray text-center">
        <p className="m-0">Tomorrow's Cures:</p>
        <p className="m-0">{`Our Research & Development.`}</p>
      </h1>
    </section>
  );
};

export default ContainerFrame;
