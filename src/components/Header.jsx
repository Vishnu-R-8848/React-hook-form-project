import React from 'react'
import { RiMenuLine, RiAddLine } from "@remixicon/react";


const Header = ({setToggleForm}) => {
  return (
        <header className="header-wrapper w-full h-10 p-1 flex items-center justify-between  text-[#3E65FF] rounded-xl ">
            <div className="header-content-wrapper flex items-center justify-center gap-2">
              <RiMenuLine size={36} />
              <div className="logo-container capitalize text-2xl font-semibold">
                curator
              </div>
            </div>
            <div className="header-cta-wrapper">
              <button
                onClick={() => setToggleForm((prev) => !prev)}
                className="cta header-cta bg-[#3E65FF] text-white text-xl rounded-full p-0.5 flex items-center justify-center gap-1"
              >
                <RiAddLine size={26} />
              </button>
            </div>
          </header>
  )
}

export default Header