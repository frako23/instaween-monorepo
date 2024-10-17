import FacebookIcon from "../../utils/icons/FacebookIcon";
import GoogleIcon from "../../utils/icons/GoogleIcon";
import { SiGhostery } from "react-icons/si";

export default function Login() {
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <div className="flex items-center justify-center min-h-screen p-8 pb-20 sm:p-20 ">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="w-full px-7 py-6 bg-pumpkinOrange rounded-lg border border-[#6a94c4] flex-col justify-start items-center inline-flex">
            <img
              src="/instaWEEN.png"
              width={96}
              height={96}
              alt="instaWEEN logo"
            />
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch text-center text-black text-8xl font-bold ">
                InstaWEEN
              </div>
              <div className="self-stretch text-center text-black text-2xl font-bold  py-5">
                An Instagram Powered by Cloudfare Spooky AI Creation
              </div>
              <div className="self-stretch  px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                  <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-ghostGreen hover:text-sweetYellowCorn text-3xl font-semibold leading-[18px]">
                      Sign in with Facebook
                    </div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <FacebookIcon />
                  </div>
                </div>
              </div>
              <div className="self-stretch  px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                  <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-ghostGreen hover:text-sweetYellowCorn text-3xl font-semibold leading-[18px]">
                      Sign in with Google
                    </div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <GoogleIcon />
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-1 inline-flex">
                <div className="grow shrink basis-0 text-center text-black text-3xl font-semibold uppercase leading-none tracking-wide">
                  Or
                </div>
              </div>
              <a
                href="/home"
                className="self-stretch h-[62px] px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex"
              >
                <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                  <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                    <div className="grow shrink basis-0 text-ghostGreen hover:text-sweetYellowCorn text-3xl font-semibold leading-[18px]">
                      Ghost Sign in
                    </div>
                  </div>
                  <div className="w-6 h-6 relative">
                    <SiGhostery className="w-6 h-6" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
