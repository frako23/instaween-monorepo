"use client";

import { GiVampireDracula } from "react-icons/gi";
import { GiGraveyard } from "react-icons/gi";
import { GiEvilBook } from "react-icons/gi";
import { FaCameraRetro } from "react-icons/fa";
import { useUser } from "../Context/UserContext";
import NavLink from "./NavLink";

const Footer = () => {
  const { user } = useUser();

  return (
    <div className="h-20 px-2 bg-pumpkinOrange justify-center items-start gap-2 inline-flex w-full z-20 fixed bottom-0 left-0 ">
      <NavLink to="/home" icon={<GiGraveyard />} label="Home" />
      {user ? <NavLink to="/find" icon={<GiEvilBook />} label="Find" /> : null}
      {user ? (
        <NavLink to="/profile" icon={<GiVampireDracula />} label="Me" />
      ) : null}
      {user ? (
        <NavLink to="/post" icon={<FaCameraRetro />} label="Post" />
      ) : null}
      {/* <CldUploadWidget
          uploadPreset="upload-unsigned-images"
          onSuccess={(results) => {
            setUploadedImage(results.info?.url);
            setUploadedImageId(results.info?.public_id);
          }}
          options={{
            sources: ["local"],
            multiple: false,
            maxFiles: 1,
            language: "en",
            text: {
              en: {
                menu: {
                  files: "👻 InstaWEEN 🎃",
                },
                local: {
                  dd_title_single:
                    "Drag and Drop your 📷 Here and watch the Spooky 👻 AI Magic 🔮",
                },
              },
            },
          }}
        >
          {({ open }) => {
            return (
              <button
                className="p-4 bg-ghostGreen rounded-xl border-4 border-black justify-center items-center gap-1.5 inline-flex"
                onClick={() => open?.()}
              >
                
              </button>
            );
          }}
        </CldUploadWidget> */}
    </div>
  );
};

export default Footer;
