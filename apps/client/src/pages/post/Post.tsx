import { useImgActionStore } from "../../store/imgActions";
import CloudinaryButtonUpload from "../../components/CloudinaryButtomUpload";
import { useUser } from "../../Context/UserContext";
import useRedirect from "../../hooks/useRedirect";

// By default, the CldImage component applies auto-format and auto-quality to all delivery URLs for optimized delivery.
const Post = () => {
  const { user } = useUser();
  useRedirect("/home", !user);

  // const img = cld
  // .image('cld-sample-5')
  // .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
  // .quality('auto')
  // .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio
  const uploadedImage = useImgActionStore((state) => state.uploadedImage);
  console.log(uploadedImage);
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
