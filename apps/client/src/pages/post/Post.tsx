import ReactCompareImage from "react-compare-image";
import { useImgActionStore } from "../../store/imgActions";
import { useState } from "react";
import { Cloudinary, CloudinaryFile } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
import CloudinaryButtonUpload from "../../components/CloudinaryButtomUpload";
import { useUser } from "../../Context/UserContext";
import useRedirect from "../../hooks/useRedirect";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
const Post = () => {
  const { user } = useUser();
  useRedirect('/home', !user);
  const [publicId, setPublicId] = useState("");
  const cloudName = "hzxyensd5";
  const uploadPreset = "aoh4fpwm";
  const uwConfig = {
    cloudName: "hzxyensd5",
    uploadPreset: "aoh4fpwm",
    sources: ["local"],
    multiple: false,
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ["images"],
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  };

  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  // const img = cld
  // .image('cld-sample-5')
  // .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
  // .quality('auto')
  // .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  const img = cld.image(publicId);
  const uploadedImage = useImgActionStore((state) => state.uploadedImage);
  console.log(uploadedImage);
  const uploadedImageID = useImgActionStore((state) => state.uploadedImageID);
  // const url = getCldImageUrl({
  //   width: 500,
  //   height: 500,
  //   src: uploadedImageID,
  //   replaceBackground: "with dracula",
  // });
  return (
    <div className="flex items-center justify-center p-8 py-[80px] min-h-screen">
      {" "}
      {/* <AdvancedImage cldImg={img} /> */}
      <CloudinaryButtonUpload />
      {/* {uploadedImage && url && (
        <div className="md:w-1/2 sm:w-3/4 w-full">
          <h3>Uploaded Image: {uploadedImageID ? uploadedImageID : ""}</h3>
          <ReactCompareImage
            hover={true}
            leftImage={uploadedImage}
            rightImage={url}
          />
        </div>
      )} */}
    </div>
  );
};

export default Post;
