"use client";

import { GiVampireDracula } from "react-icons/gi";
import { BiSolidCameraPlus } from "react-icons/bi";
import { GiGraveyard } from "react-icons/gi";
import { GiEvilBook } from "react-icons/gi";
import { useImgActionStore } from "../store/imgActions";
import { useLocation } from "react-router-dom";
import { FaCameraRetro } from "react-icons/fa";

const Footer = () => {
  const { pathname } = useLocation();
  const setUploadedImage = useImgActionStore((state) => state.setUploadedImage);
  const setUploadedImageId = useImgActionStore(
    (state) => state.setUploadedImageID
  );

  return (
    <div className="h-20 px-2 bg-pumpkinOrange justify-center items-start gap-2 inline-flex w-full fixed bottom-0 left-0 ">
      <a
        href="/home"
        className=" shrink basis-0 h-20 py-4 justify-center items-center gap-1 flex"
      >
        <div
          className={`shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex ${
            pathname === "/home" && "bg-black rounded-lg"
          }`}
        >
          <div className=" rounded-xl flex-col justify-center items-center flex">
            <div className="w-16 h-8 pr-2 py-1 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
                <GiGraveyard
                  className={`w-8 h-8 ${
                    pathname === "/home" ? "text-sweetYellowCorn" : "text-black"
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            className={`self-stretch text-center text-black  font-semibold text-xl leading-none pb-2 tracking-wide ${
              pathname === "/home" ? "text-sweetYellowCorn" : "text-black"
            }`}
          >
            Home
          </div>
        </div>
      </a>

      <a
        href="/find"
        className=" shrink basis-0 h-20 py-4 justify-center items-center gap-1 flex"
      >
        <div
          className={`shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex ${
            pathname === "/find" && "bg-black rounded-lg"
          }`}
        >
          <div className=" rounded-xl flex-col justify-center items-center flex">
            <div className="w-16 h-8 pr-2 py-1 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
                <GiEvilBook
                  className={`w-8 h-8 ${
                    pathname === "/find" ? "text-sweetYellowCorn" : "text-black"
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            className={`self-stretch text-center ${
              pathname === "/find" ? "text-sweetYellowCorn" : "text-black"
            }  font-semibold text-xl leading-none pb-2 tracking-wide`}
          >
            Find
          </div>
        </div>
      </a>

      <a
        href="/profile"
        className=" shrink basis-0 h-20 py-4 justify-center items-center gap-1 flex"
      >
        <div
          className={`shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex ${
            pathname === "/profile" && "bg-black rounded-lg"
          }`}
        >
          <div className=" rounded-xl flex-col justify-center items-center flex">
            <div className="w-16 h-8 pr-2 py-1 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
                <GiVampireDracula
                  className={`w-8 h-8 ${
                    pathname === "/profile"
                      ? "text-sweetYellowCorn"
                      : "text-black"
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            className={`self-stretch text-center ${
              pathname === "/profile" ? "text-sweetYellowCorn" : "text-black"
            }  font-semibold text-xl leading-none pb-2 tracking-wide`}
          >
            Me
          </div>
        </div>
      </a>

      <a
        href="/post"
        className=" shrink basis-0 h-20 py-3 flex-col justify-center items-center gap-1 inline-flex"
      >
        <div
          className={`shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex ${
            pathname === "/post" && "bg-black rounded-lg"
          }`}
        >
          <div className=" rounded-xl flex-col justify-center items-center flex">
            <div className="w-16 h-8 pr-2 py-1 justify-center items-center inline-flex">
              <div className="w-6 h-6 relative">
                <FaCameraRetro
                  className={`w-8 h-8 ${
                    pathname === "/post" ? "text-sweetYellowCorn" : "text-black"
                  }`}
                />
              </div>
            </div>
          </div>
          <div
            className={`self-stretch text-center ${
              pathname === "/post" ? "text-sweetYellowCorn" : "text-black"
            }  font-semibold text-xl leading-none pb-2 tracking-wide`}
          >
            Post
          </div>
        </div>
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
      </a>
    </div>
  );
};

export default Footer;
