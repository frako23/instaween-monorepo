import { MdHeartBroken } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { users } from "../utils/data/dummy";

const Card = () => {
  return (
    <div className="overflow-y-auto p-4 bg-black items-center justify-center gap-2 flex flex-col min-h-screen">
      {" "}
      {users?.map((user) => (
        <div
          className="max-w-[555px] px-3 relative pt-1.5 pb-3 bg-darkPurple border border-darkPurple flex-col justify-start items-start gap-2 inline-flex"
          key={user.id}
        >
          <div className="w-full h-8 p-2 flex-col justify-start items-start gap-1 flex">
            <div className="self-stretch h-6 justify-between items-center inline-flex">
              <div className="justify-start flex gap-2">
                <div className="justify-start items-end flex">
                  <div className=" bg-[#fdfcff] rounded-full border border-[#e1e2e8] justify-center gap-[6.67px] flex">
                    <div className="flex-col justify-center items-center gap-[6.67px] inline-flex">
                      <img
                        src="https://cdn0.iconfinder.com/data/icons/halloween-15/86/pumpkin-512.png"
                        width={24}
                        height={24}
                        alt="avatar image"
                      />
                    </div>
                  </div>
                </div>
                <div className="h-12 flex-col justify-center items-end gap-px inline-flex">
                  <div className="self-stretch h-3.5 text-ghostGreen text-3xl  font-medium leading-tight mb-1">
                    {user.userName}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                {/* <div
                  
                  className={`cursor-pointer p-2 ${
                    translateToggle &&
                    index == cardToTranslate &&
                    " bg-[#eaf1ff] justify-center items-center gap-2.5 flex rounded-[100px]"
                  }`}
                >
                  <TranslateIcon
                    index={index}
                    cardToTranslate={cardToTranslate}
                    translatedToggle={translateToggle}
                  />
                </div> */}
                <div
                  // onClick={() => {
                  //   if (!translateToggle) {
                  //     setTranslateToggle(true)
                  //     setCardToTranslate(index)
                  //     handleTranslateTitle(user.title)
                  //     handleTranslateStory(user.story)
                  //   } else {
                  //     setCardToTranslate(null)
                  //     setTranslateToggle(false)
                  //     setTranslatedTitle('')
                  //     setTranslatedStory('')
                  //   }
                  // }}
                  className="cursor-pointer p-2"
                >
                  {/* <HeadsetIcon /> */}
                  {/* <TranslateIcon
                index={index}
                cardToTranslate={cardToTranslate}
                translatedToggle={translateToggle}
              /> */}
                </div>

                {/* <div
                  className="h-6 pl-2 justify-end items-center gap-1.5 flex cursor-pointer"
                  onClick={() => {
                    setBgGrey(true);
                    setSelectedIdea(user);
                    setStory(user.story);
                    setModalToggle(true);
                  }}
                >
                  <ThreeHorizontalDotsIcons />
                </div> */}
              </div>
            </div>
          </div>
          <div
          // href={`idea/${user.title}`}
          // onClick={() => setSelectedIdea(user)}
          >
            <div className="flex justify-center w-full mt-4">
              <img width={318} height={205} alt="idea image" src={user.image} />
            </div>

            <div className="h-10 justify-start items-center gap-1.5 inline-flex">
              <div className="self-stretch p-2.5 justify-start items-center gap-4 flex">
                <div className="text-right text-ghostGreen text-2xl  font-semibold leading-[18px] flex justify-between items-center gap-2">
                  <MdHeartBroken className="w-7 h-7 text-ghostGreen" />{" "}
                  {user.likes}
                </div>

                <div className="text-right text-ghostGreen text-2xl  font-semibold leading-[18px] flex justify-between items-center gap-2">
                  <RiFilePaper2Line className="w-7 h-7 text-ghostGreen" />{" "}
                  {user.comments.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
