import React from "react";
import ButtonBase from "../base/Button";
import CardBase from "../base/Card";
import { CardModel } from "../model/CardModel";

const BannerContainer = () => {
  const dataCard: CardModel[] = [
    {
      id: 1,
      icon: "far fa-file",
      title: "AI Cover Letter Generator",
      description:
        "The AI Cover Letter Generator is a tool that uses artificial intelligence algorithms to create personalized cover letters for job applicants.",
    },
    {
      id: 2,
      icon: "fa-regular fa-check",
      title: "Smart Personalization",
      description:
        "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.",
    },
    {
      id: 3,
      icon: "far fa-expand",
      title: "Resume Scanner",
      description:
        "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.",
    },
  ];

  return (
    <div className=" mt-20 max-w-[1147px] w-full  flex flex-col items-center">
      <span className=" text-[88px] text-customGreen font-semibold">
        Win your dream job
      </span>
      <span className=" text-[88px] font-semibold">with PostJob</span>
      <span className=" text-customGray mt-5">
        Submit better job app — 10x faster. AI cover letter
      </span>
      <span className=" text-customGray ">
        generator, resume keyword checker, outreach message
      </span>
      <span className=" text-customGray">writer, and more. Powered by GPT</span>
      <div className=" mt-5 max-w-[567px] w-full relative h-[60px] rounded-xl border border-customGray p-2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Your Email"
          className=" w-full text-[18px] text-white bg-black focus:outline-none px-6 placeholder-customGray  "
        />
        <div className=" absolute right-2 top-[4.5px]">
          <ButtonBase title="Started For Free" />
        </div>
      </div>
      <div className="mt-[56px] mb-[60px] grid grid-cols-3 gap-x-8">
        {dataCard.map((item, index) => (
          <CardBase
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerContainer;
