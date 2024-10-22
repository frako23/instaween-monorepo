import React, { useEffect, useRef, useState } from "react";
import type { BackgroundType, CloudinaryResponse } from "../types";
import ReactCompareImage from "react-compare-image";
import DownloadButton from "./DownloadButton";
import { SpookyLoader } from "./SpookyLoader";

const BACKGROUND: BackgroundType = {
  ghost: "scary ghost",
  house: "scary witched house",
  cementery: "scary cementery",
  zombie: "scary zombies",
};

const UploadWidget = () => {
  const cloudinaryRef = useRef<typeof window.cloudinary | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const widgetRef = useRef<any>(null);
  const [storedImg, setStoredImg] = useState<CloudinaryResponse | null>(null);
  const [from, setFrom] = useState<"face" | "background" | null>(null);
  const [to, setTo] = useState<
    "zombie" | "frankestein" | "vampire" | "werewolf" | string | null
  >(null);
  const [gender, setGender] = useState<"male" | "female" | null>(null);
  const cloudName = "ddsxxfyir";
  const uploadPreset = "upload-unsigned-images";
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    if (from && to && storedImg) {
      setLoading(true);
      const img = new Image();
      img.src =
        from === "face" && gender !== null && to !== null
          ? `https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_replace:from_face;to_a%20${gender + "%20" + to}%20${from};preserve-geometry_true/${storedImg?.public_id}?_a=DAJAUVWIZAA0`
          : from === "background" && to !== null
            ? `https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_background_replace:prompt_${to}/${storedImg?.public_id}.jpg`
            : storedImg?.secure_url;

      img.onload = () => setLoading(false);
    }
  }, [from, to, gender, storedImg]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {loading && <SpookyLoader />}
      {from == null ? (
        <div
          className={`flex justify-around gap-4 ${from === "face" && "hidden"}  ${from === "background" && "hidden"}`}
        >
          <button
            onClick={() => setFrom("face")}
            className="md:text-6xl sm:text-4xl text-2xl  bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Selfie 💀
          </button>
          <button
            onClick={() => setFrom("background")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Background ⛺
          </button>
        </div>
      ) : from == "face" && gender === null ? (
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
            Female 👩
          </button>
        </div>
      ) : (
        <button
          onClick={() => widgetRef.current?.open()}
          className="md:text-6xl sm:text-4xl text-2xl bg-darkPurple  text-ghostGreen font-bold w-fit mb-4 hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
        >
          Spookie starts HERE
        </button>
      )}

      {gender !== null && storedImg !== null && (
        <div
          className={`flex justify-around gap-4 ${from === "face" || (from === "background" && "hidden")}`}
        >
          <button
            onClick={() => setTo("werewolf")}
            className="md:text-6xl sm:text-4xl text-2xl  bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Werewolf 🐺
          </button>
          <button
            onClick={() => setTo("zombie")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Zombie 💀
          </button>
          <button
            onClick={() => setTo("vampire")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Vampire 🧛‍♂️
          </button>
          <button
            onClick={() => setTo("frankenstein")}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Frankenstein 🧟‍♂️
          </button>
        </div>
      )}

      {from === "background" && storedImg !== null && (
        <div
          className={`flex justify-around gap-4 ${from !== "background" && "hidden"}`}
        >
          <button
            onClick={() => setTo(BACKGROUND.ghost)}
            className="md:text-6xl sm:text-4xl text-2xl  bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Ghost 👻
          </button>
          <button
            onClick={() => setTo(BACKGROUND.zombie)}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Zombies 🧟‍♂️
          </button>
          <button
            onClick={() => setTo(BACKGROUND.house)}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            House 🕸
          </button>
          <button
            onClick={() => setTo(BACKGROUND.cementery)}
            className="md:text-6xl sm:text-4xl text-2xl bg-sweetYellowCorn  text-black font-bold w-fit hover:bg-black hover:text-sweetYellowCorn py2 px-4 rounded"
          >
            Cementery ☠
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
                from === "face" && gender !== null && to !== null
                  ? `https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_replace:from_face;to_a%20${gender + "%20" + to}%20${from};preserve-geometry_true/${storedImg?.public_id}?_a=DAJAUVWIZAA0`
                  : from === "background" && to !== null
                    ? `https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_background_replace:prompt_${to}/${storedImg?.public_id}.jpg`
                    : storedImg?.secure_url
              }
            />
          </div>
        )}
      </div>
      {to !== null && from == "face" ? (
        <DownloadButton
          fileName="instaWEEN.jpg"
          fileUrl={`https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_replace:from_${from};to_a%20${gender + "%20" + to}%20${from};preserve-geometry_true/${storedImg?.public_id}?_a=DAJAUVWIZAA0`}
        />
      ) : to !== null && from == "background" ? (
        <DownloadButton
          fileName="instaWEEN.jpg"
          fileUrl={`https://res.cloudinary.com/ddsxxfyir/image/upload/e_gen_background_replace:prompt_${to}/${storedImg?.public_id}.jpg`}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default UploadWidget;
