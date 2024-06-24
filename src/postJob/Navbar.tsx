import ButtonBase from "../base/Button";

const NavbarContainer = () => {
  return (
    <div className=" max-w-[1304px] w-full  flex flex-row justify-between h-[128px] items-center pt-[66px]">
      <div className=" flex flex-row items-center">
        <div className=" flex flex-row items-center p-3">
          <img src="/postJobs.png" alt="" className=" w-6 h-6" />
          <span className="pl-1 text-[16px]">PostJobs</span>
        </div>
        <div className=" space-x-6 flex flex-row items-center pl-10 text-[#909090] text-[16px]">
          <span className="cursor-pointer hover:text-white">
            AI Cover Letter Generator
          </span>
          <span className="cursor-pointer hover:text-white">
            Resume Template
          </span>
          <span className="cursor-pointer hover:text-white">Pricing</span>
        </div>
      </div>
      <div className=" space-x-4">
        <ButtonBase title="Sign In" template="outline" />
        <ButtonBase title="Get Started" template="green" />
      </div>
    </div>
  );
};

export default NavbarContainer;
