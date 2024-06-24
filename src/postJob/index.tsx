import BannerContainer from "./Banner";
import BetterApplication from "./BetterApplication";
import DesignTemplate from "./DesignTemplate";
import Footer from "./Footer";
import NavbarContainer from "./Navbar";
import OptimizeFree from "./OptimizeFree";
import SpendWork from "./SpendWork";

const PostJobsScreen = () => {
  return (
    <div className=" post-job  bg-black text-white h-screen flex flex-col items-center overflow-y-auto">
      <NavbarContainer />
      <BannerContainer />
      <BetterApplication />
      <SpendWork />
      <OptimizeFree />
      <DesignTemplate />
      <Footer />
    </div>
  );
};

export default PostJobsScreen;
