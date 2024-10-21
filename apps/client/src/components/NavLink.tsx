import React from 'react'
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
    to: string;
    icon: React.ReactElement;
    label: string;
}


function NavLink({ to, icon, label }: NavLinkProps) {
    const { pathname } = useLocation();
    return (
        <Link
            to={to}
            className="shrink basis-0 h-20 py-4 justify-center items-center gap-1 flex"
        >
            <div
                className={`shrink basis-0 flex-col justify-center items-center gap-2.5 inline-flex ${pathname === to && "bg-black rounded-lg"
                    }`}
            >
                <div className="rounded-xl flex-col justify-center items-center flex">
                    <div className="w-16 h-8 pr-2 py-1 justify-center items-center inline-flex">
                        <div className="w-6 h-6 relative">
                            {React.cloneElement(icon as React.ReactElement, {
                                className: `w-8 h-8 ${pathname === to ? "text-sweetYellowCorn" : "text-black"
                                    }`,
                            })}
                        </div>
                    </div>
                </div>
                <div
                    className={`self-stretch text-center ${pathname === to ? "text-sweetYellowCorn" : "text-black"
                        } font-semibold text-xl leading-none pb-2 tracking-wide`}
                >
                    {label}
                </div>
            </div>
        </Link>
    );
}

export default NavLink