const Footer = () => {
  return (
    <div className="absolute top-[591.2px] left-[117.4px] w-[1302px] h-[72.6px] text-left text-base text-neutral-colors-white font-text-single-200-bold">
      <div className="absolute top-[34.2px] left-[1041.6px] bg-darkslateblue flex flex-row items-start justify-start gap-[17.08px]">
        <img
          className="relative rounded-[8.54px] w-[38.4px] h-[38.4px] object-cover"
          alt=""
          src="/social-media-icon-squarefacebook@2x.png"
        />
        <img
          className="relative rounded-[8.54px] w-[38.4px] h-[38.4px] object-cover"
          alt=""
          src="/social-media-icon-squaretwitter@2x.png"
        />
        <img
          className="relative rounded-[8.54px] w-[38.4px] h-[38.4px] object-cover"
          alt=""
          src="/social-media-icon-squareinstagram@2x.png"
        />
        <img
          className="relative w-[38.4px] h-[38.4px] object-cover"
          alt=""
          src="/social-media-icon-squarelinkedin@2x.png"
        />
        <img
          className="relative w-[38.4px] h-[38.4px] object-cover"
          alt=""
          src="/social-media-icon-squareyoutube@2x.png"
        />
      </div>
      <div className="absolute top-[-0.5px] left-[-0.5px] bg-indianred box-border w-[1303.1px] h-[1.1px] border-t-[1.1px] border-solid border-neutral-colors-white" />
      <div className="absolute top-[34.2px] left-[6.4px] leading-[16.05px]">{`Copyright © 2023 Phren | All Rights Reserved `}</div>
    </div>
  );
};

export default Footer;
