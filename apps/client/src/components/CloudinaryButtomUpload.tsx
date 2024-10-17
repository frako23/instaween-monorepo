import React, { useEffect, useRef, useState } from "react";
import { CloudinaryResponse } from "../types";
import ReactCompareImage from "react-compare-image";
// import { Cloudinary } from "@cloudinary/url-gen/index";
// import { Effect } from "@cloudinary/url-gen/actions";
// import { AdvancedImage } from "@cloudinary/react";
// import {
//   artisticFilter,
//   generativeReplace,
// } from "@cloudinary/url-gen/actions/effect";
// import { scale } from "@cloudinary/url-gen/actions/resize";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const [storedImg, setStoredImg] = useState<CloudinaryResponse | null>(null);
  const [from, setFrom] = useState<"face" | "background" | null>(null);
  const [to, setTo] = useState<
    "zombie" | "ghost" | "vampire" | "monster" | null
  >(null);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const cloudName = "ddsxxfyir";
  const uploadPreset = "upload-unsigned-images";

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current?.createUploadWidget(
      {
        cloudName,
        uploadPreset,
        multiple: false,
        sources: ["local", "camera"],
      },
      (
        error: unknown,
        result: {
          event: string;
          info: React.SetStateAction<CloudinaryResponse | null>;
        }
      ) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen subida con éxito: ", result.info);
          setStoredImg(result.info);
        }
      }
    );
  }, []);

  // const cld = new Cloudinary({
  //   cloud: { cloudName },
  // });

  // const myImage = cld
  //   .image(storedImg?.public_id)
  //   .effect(
  //     generativeReplace().from("face").to("a zombie face").preserveGeometry()
  //   );
  // .resize(scale().width(1024))
  // .setVersion(1688228955);
  // myImage.effect(artisticFilter("al_dente")); // Aplica un filtro artístico

  // console.log(myImage);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <button
        onClick={() => widgetRef.current?.open()}
        className="md:text-6xl sm:text-4xl text-2xl bg-darkPurple  text-ghostGreen font-bold w-fit mb-4 hover:bg-black hover:text-sweetYellowCor-n py2 px-4 rounded"
      >
        Spookie starts HERE
      </button>
      {storedImg?.secure_url ? (
        <div
          className={`flex justify-around gap-4 ${from === "face" && "hidden"}  ${from === "background" && "hidden"}`}
        >
          <button
            onClick={() => setFrom("face")}
            className="md:text-6xl sm:text-4xl text-2xl  bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCor-n py2 px-4 rounded"
          >
            Face 💀
          </button>
          <button
            onClick={() => setFrom("background")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCor-n py2 px-4 rounded"
          >
            Background ⛺
          </button>
        </div>
      ) : (
        ""
      )}

      {from == "face" && gender === null && (
        <div
          className={`flex justify-around gap-4 ${from === "face" || (from === "background" && "hidden")}`}
        >
          <button
            onClick={() => setGender("male")}
            className="md:text-6xl sm:text-4xl text-2xl  bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Male 👨
          </button>
          <button
            onClick={() => setGender("female")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Female
          </button>
        </div>
      )}

      {gender !== null && (
        <div
          className={`flex justify-around gap-4 ${from === "face" || (from === "background" && "hidden")}`}
        >
          <button
            onClick={() => setTo("monster")}
            className="md:text-6xl sm:text-4xl text-2xl  bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Monster 💀
          </button>
          <button
            onClick={() => setTo("zombie")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Zombie
          </button>
          <button
            onClick={() => setTo("vampire")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Vampire 🧛‍♀️
          </button>
          <button
            onClick={() => setTo("ghost")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Ghost
          </button>
        </div>
      )}

      <div className="flex items-center justify-center p-8 w-full">
        {" "}
        {storedImg?.secure_url && (
          <div className="w-full md:w-1/2 sm:w-3/4">
            <h3>Uploaded Image:</h3>
            <ReactCompareImage
              hover={true}
              leftImage={storedImg?.secure_url}
              rightImage={
                to && from
                  ? `https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_replace:from_${from};to_a%20${gender + "%20" + to}%20${from};preserve-geometry_true/${storedImg?.public_id}?_a=DAJAUVWIZAA0`
                  : storedImg?.secure_url
              }
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadWidget;
