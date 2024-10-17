import ReactCompareImage from "react-compare-image";
import { useImgActionStore } from "../../store/imgActions";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
const Post = () => {
  const uploadedImage = useImgActionStore((state) => state.uploadedImage);
  console.log(uploadedImage);
  const uploadedImageID = useImgActionStore((state) => state.uploadedImageID);
  const url = getCldImageUrl({
    width: 500,
    height: 500,
    src: uploadedImageID,
    replaceBackground: "with dracula",
  });
  return (
    <div className="flex items-center justify-center p-8 mt-[80px] min-h-screen">
      {" "}
      {uploadedImage && url && (
        <div className="md:w-1/2 sm:w-3/4 w-full">
          <h3>Uploaded Image: {uploadedImageID ? uploadedImageID : ""}</h3>
          <ReactCompareImage
            hover={true}
            leftImage={uploadedImage}
            rightImage={url}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
