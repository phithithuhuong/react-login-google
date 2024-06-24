type Props = {
  icon: string;
  title: string;
  description: string;
};
const CardBase = ({ icon, title, description }: Props) => {
  return (
    <div className=" flex flex-col p-6 space-y-4 rounded-xl bg-[#1E201D] text-white max-w-[361px] ">
      <i className={`text-customGreen text-xl ${icon}`}></i>
      <span className=" text-[16px] font-semibold">{title}</span>
      <span className=" text-customGray">{description}</span>
    </div>
  );
};

export default CardBase;
