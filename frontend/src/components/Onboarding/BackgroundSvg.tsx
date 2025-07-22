import * as React from "react";

export const BackgroundSvg: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 shrink-0 h-[854px] w-[393px]">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="22:923" width="601" height="1063" viewBox="0 0 601 1063" fill="none" xmlns="http://www.w3.org/2000/svg" class="background-svg" style="width: 393px; height: 854px; flex-shrink: 0; fill: #000; filter: drop-shadow(0px 70px 104px rgba(105, 124, 129, 0.10)); position: absolute; left: 0px; top: 0px"> <g filter="url(#filter0_d_22_923)"> <path d="M104 34H497V888.433H104V34Z" fill="black"></path> </g> <defs> <filter id="filter0_d_22_923" x="0" y="0" width="601" height="1062.43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="70"></feOffset> <feGaussianBlur stdDeviation="52"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0.411736 0 0 0 0 0.485681 0 0 0 0 0.504167 0 0 0 0.1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_923"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_923" result="shape"></feBlend> </filter> </defs> </svg>',
          }}
        />
      </div>
    </div>
  );
};
