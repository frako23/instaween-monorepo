"use client";

import { GiVampireDracula } from "react-icons/gi";
import { BiSolidCameraPlus } from "react-icons/bi";
import { GiGraveyard } from "react-icons/gi";
import { GiEvilBook } from "react-icons/gi";
import { useImgActionStore } from "../store/imgActions";
import { useLocation } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";
import { useUser } from "../Context/UserContext";
import NavLink from "./NavLink";

const Footer = () => {
  const { user } = useUser();
  const setUploadedImage = useImgActionStore((state) => state.setUploadedImage);
  const setUploadedImageId = useImgActionStore(
    (state) => state.setUploadedImageID
  );

  return (
    <div className="h-20 px-2 bg-pumpkinOrange justify-center items-start gap-2 inline-flex w-full fixed bottom-0 left-0 ">
      <NavLink to="/home" icon={<GiGraveyard />} label="Home" />
      {user ? (<NavLink to="/find" icon={<GiEvilBook />} label="Find" />) : null}
      {user ? (<NavLink to="/profile" icon={<GiVampireDracula />} label="Me" />) : null}
      {user ? (<NavLink to="/post" icon={<FaCameraRetro />} label="Post" />) : null}
    </div>
  );
};

export default Footer;
