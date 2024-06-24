import React from "react";
import ButtonBase from "../base/Button";

const Footer = () => {
  return (
    <div className="bg-customGreen text-black w-full flex flex-col justify-center items-center pb-10">
      <div className="w-full max-w-[1126px] flex flex-col py-[48px] justify-center items-center">
        <div className="pt-2 w-[456px] flex flex-col justify-center items-center">
          <span className="font-semibold text-[64px] ">What’s next</span>
          <span className=" text-center">
            Submit better job app — 10x faster. AI cover letter generator,
            resume keyword checker, outreach message writer, and more. Powered
            by GPT
          </span>
          <ButtonBase template="black" title="Try For Free" className="mt-6" />
        </div>
        <div className="mt-10 grid grid-cols-4 gap-x-[96px]">
          <div>
            <span className="font-medium text-xl">Platform</span>
            <div className=" mt-4 flex flex-col space-y-3">
              <span>Plans and Prices</span>
              <span>PAI Create Letters</span>
              <span>AI Resume Checker</span>
              <span>Resume Templates</span>
              <span>Sell Templates</span>
              <span>Blog</span>
            </div>
          </div>
          <div>
            <span className="font-medium text-xl">Features</span>
            <div className=" mt-4 flex flex-col space-y-3">
              <span>AI Cover Letter Creator</span>
              <span>Resume Keywords Optimizer</span>
              <span>ATS Resume Checker</span>
            </div>
          </div>
          <div>
            <span className="font-medium text-xl">Resources</span>
            <div className=" mt-4 flex flex-col space-y-3">
              <span>4 AI Tools for Applying a Job</span>
              <span>How to optimize Resume keywords</span>
              <span>Why you should use Chat GPT for create Resume</span>
              <span>What should you include in a Cover Letter</span>
            </div>
          </div>
          <div>
            <span className="font-medium text-xl">Support</span>
            <div className=" mt-4 flex flex-col space-y-3">
              <span>support@gmail.com</span>
              <div className=" space-x-6 flex flex-row">
                <img
                  src="/instagram.png"
                  alt="instagram"
                  className=" w-6 h-6"
                />
                <img src="/facebook.png" alt="facebook" className=" w-6 h-6" />
                <img src="/linkedin.png" alt="linkedin" className=" w-6 h-6" />
                <img src="/telegram.png" alt="telegram" className=" w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" max-w-[1192px] w-full h-[1px] bg-black" />
      <div className="flex flex-row space-x-2 py-10">
        <span> ©</span>
        <span>Copywriting</span>
        <span>|</span>
        <span> All Rights Reserved</span>
        <span>|</span>
        <span>Terms of Use</span>
        <span>|</span>
        <span>Privacy</span>
      </div>
    </div>
  );
};

export default Footer;
