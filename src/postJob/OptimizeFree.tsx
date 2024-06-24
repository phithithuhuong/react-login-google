import React from "react";
import ButtonBase from "../base/Button";

const OptimizeFree = () => {
  return (
    <div className=" bg-customGreen text-black w-full p-10 items-center flex justify-center">
      <div className=" w-full max-w-[1036px]">
        <div className=" flex flex-row space-x-20 items-center">
          <div className=" w-[456px] flex flex-col">
            <span className=" text-[48px] font-semibold">
              Free AI cover letter generator powered by GPT
            </span>
            <span className="py-6">
              A free AI cover letter generator powered by GPT is a tool that
              uses artificial intelligence and natural language processing to
              help job seekers create customized and effective cover letters.
            </span>
            <ButtonBase
              title="Try For Free Now"
              template="black"
              className="self-start"
            />
          </div>
          <img
            src="/Illustration.png"
            alt="Illustration"
            className="w-[500px] h-[500px]"
          />
        </div>
        <div className=" flex flex-row space-x-20 items-center">
          <img
            src="/Illustration2.png"
            alt="Illustration2"
            className="w-[500px] h-[500px]"
          />
          <div className=" w-[456px] flex flex-col">
            <span className=" text-[48px] font-semibold">
              Optimize the keywords in your resume
            </span>
            <span className="py-6">
              By optimizing keywords in your resume, you can increase your
              chances of getting noticed by recruiters and landing interviews
              for the jobs you want.
            </span>
            <ButtonBase
              title="Optimize your Resume"
              template="black"
              className="self-start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptimizeFree;
