import React from "react";
import ButtonBase from "../base/Button";

const DesignTemplate = () => {
  return (
    <div className="flex flex-row w-full max-w-[1088px]  py-10 items-center space-x-8">
      <div className=" w-[479px] flex flex-col">
        <span className=" text-[48px] font-semibold">
          Free resume design templates
        </span>
        <span className="py-6">
          By following these design tips, you can create a professional and
          effective resume that will help you stand out to recruiters and hiring
          managers.
        </span>
        <ButtonBase
          title="Create An Account"
          template="outline"
          className="self-start"
        />
      </div>
      <img src="/Illustration3.png" alt="" className="w-[577px] h-[437px]" />
    </div>
  );
};

export default DesignTemplate;
