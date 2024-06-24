import React from "react";
import ButtonBase from "../base/Button";
import { CardModel } from "../model/CardModel";
import CardBase from "../base/Card";

const SpendWork = () => {
  const dataCard: CardModel[] = [
    {
      id: 1,
      icon: "far fa-file",
      title: "Cover Letter",
      description:
        "A cover letter is a document that accompanies a job application and is written to introduce the applicant to the employer.",
    },
    {
      id: 2,
      icon: "far fa-file",
      title: "Resignation Letters",
      description:
        "A resignation letter is a formal document that an employee writes to inform their employer of their decision to leave the company.",
    },
    {
      id: 3,
      icon: "far fa-expand",
      title: "Connection Request",
      description:
        "A connection request is a message sent on a social networking site, such as LinkedIn, requesting to connect with another user.",
    },
    {
      id: 4,
      icon: "far fa-file",
      title: "Outreach Emails",
      description:
        "Outreach emails are messages sent by individuals or businesses to introduce themselves, establish a connection, or propose a collaboration.",
    },
    {
      id: 5,
      icon: "fa-regular fa-check",
      title: "Resume Optimization",
      description:
        "Smart Personalization refers to the use of data and technology to deliver tailored experiences and content to individual customers or users.",
    },
    {
      id: 6,
      icon: "far fa-expand",
      title: "Resume Design",
      description:
        "A resume scanner is a software application that uses optical character recognition (OCR) technology to extract and analyze data from resumes.",
    },
  ];
  return (
    <div className="mt-10 w-full flex flex-col items-center">
      <span className="text-[48px] font-semibold">Spend less time </span>
      <span className="text-[48px] font-semibold"> looking for work</span>
      <span className="mt-4 text-customGray text-[16px]">
        We'll help you through the hardest part of
      </span>
      <span className="text-customGray text-[16px]">your job search.</span>
      <ButtonBase className="mt-4" title="Create An Account" />
      <div className="mt-[56px] mb-[60px] grid grid-cols-3 gap-8">
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

export default SpendWork;
