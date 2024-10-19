import React from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import { useUser } from '../Context/UserContext';


interface ButtonLoginProps {
    text: string
    icon: React.ReactNode
}
function ButtonLogin({ text, icon }: ButtonLoginProps) {
    const { sign } = useUser();

    const login = useGoogleLogin({
        onSuccess: tokenResponse => sign({ ...tokenResponse, authuser: '' }),
        onError: error => console.log(error),
    });

    return (
        <button onClick={() => login()} className="self-stretch h-[62px] px-5 py-3 bg-black rounded-xl border border-[#e3e2e4] flex-col justify-start items-start gap-2.5 flex">
            <div className="self-stretch pr-2.5 justify-start items-center gap-[18px] inline-flex">
                <div className="grow shrink basis-0 h-[38px] pr-2.5 py-2.5 justify-start items-center gap-2.5 flex">
                    <div className="grow text-start shrink basis-0 text-ghostGreen hover:text-sweetYellowCorn text-3xl font-semibold leading-[18px]">
                        {text}
                    </div>
                </div>
                <div className="w-6 h-6 relative">
                    {icon}
                </div>
            </div>
        </button>
    )
}

export default ButtonLogin