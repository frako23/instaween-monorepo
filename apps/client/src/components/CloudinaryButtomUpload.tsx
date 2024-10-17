import React, { useEffect, useRef } from "react";
import "../types.d.ts";

const UploadWidget = () => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "tu_cloud_name",
        uploadPreset: "tu_upload_preset",
      },
      (error: any, result: any) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen subida con éxito: ", result.info);
        }
      }
    );
  }, []);

  return (
    <button
      onClick={() => widgetRef.current?.open()}
      className="btn-upload"
      className="text-6xl  bg-darkPurple  text-ghostGreen font-bold hover:bg-black hover:text-sweetYellowCor-n py2 px-4 rounded"
    >
      Spookie starts HERE
    </button>
  );
};

export default UploadWidget;
