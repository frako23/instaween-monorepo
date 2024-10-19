import { Link } from "react-router-dom";
import { MdHeartBroken } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";
import { RiLoginBoxFill } from "react-icons/ri";
import { useUser } from "../Context/UserContext";

const Header = () => {
  const { user, logout } = useUser();
  return (
    <div className="h-20 px-2 bg-pumpkinOrange mb-[80px] justify-around items-start gap-2 inline-flex w-full fixed z-20">
      <div className=" shrink basis-0 h-20 py-4 justify-center items-center flex text-5xl text-black w-3/4 gap-4">
        <img src="/instaWEEN.png" width={48} height={48} alt="instaWEEN logo" />
        InstaWEEEN
      </div>

      <div className=" shrink basis-0 h-20 py-3 gap-4 justify-center items-center inline-flex w-1/4">
        {user ? (<MdHeartBroken className="w-8 h-8 text-black" />) : null}
        {user ? (<RiLogoutBoxFill onClick={() => logout()} className="w-8 h-8 text-black cursor-pointer" />) : (<Link to="/"><RiLoginBoxFill className="w-8 h-8 text-black" /></Link>)}
      </div>
    </div>
  );
};

export default Header;
