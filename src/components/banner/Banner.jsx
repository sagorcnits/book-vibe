import { NavLink } from "react-router-dom";
import BannerImg from "../../assets/Images/banner.png";
import Button from "../button/Button";

const Banner = () => {
  return (
    <div className="flex gap-4 items-center bg-[rgba(19,19,19,0.05)] py-10  rounded-xl">
      <div className="flex-1  pl-20">
        <h1 className="text-[50px] font-bold text-[#131313] pb-8">
          Books to freshen up your bookshelf
        </h1>
        <NavLink to='/listed_Books'>
        <Button title={"View The List"} bgColor={"#23BE0A"}></Button>
        </NavLink>
      </div>
      <div className="flex-1">
        <img className="block mx-auto" src={BannerImg} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
