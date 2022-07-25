import { useTheme } from 'next-themes'
import Link from 'next/link'
import { SearchIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

import Image from 'next/image'

function Header() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (theme == null) setTheme('light')
  }, [])
  return (
    // <header className="fixed z-50 mx-auto flex w-full justify-between bg-white p-5 dark:bg-gray-800">
    //   <div className="flex items-center space-x-5">
    //     <div className="hidden items-center space-x-8 md:inline-flex">
    //       <Link passHref href="/">
    //         <a href="#">
    //           <Image
    //             src={Logo.src}
    //             className=""
    //             width={50}
    //             height={50}
    //             objectFit="contain"
    //           />
    //         </a>
    //       </Link>
    //       <Link passHref href="https://www.beckem.dev/">
    //         <a href="#">About Me</a>
    //       </Link>

    //       <Link passHref href="https://www.beckem.dev/">
    //         <a href="#">Blockchain</a>
    //       </Link>
    //       <Link passHref href="https://www.beckem.dev/">
    //         <a href="#">Frontend</a>
    //       </Link>
    //       <Link passHref href="https://www.beckem.dev/">
    //         <a href="#">Backend</a>
    //       </Link>

    //       <div
    //         className="relative flex h-[26px] w-[50px] scale-125 cursor-pointer items-center justify-between rounded-full bg-[#111] p-[5px]"
    //         onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    //       >
    //         <MoonIcon className="h-5 w-5 text-[#f39c12]" />
    //         <SunIcon className="h-5 w-5 text-[#f1c40f]" />
    //         <div
    //           className="absolute top-[2px] left-[2px] h-[22px] w-[22px] translate-x-0 rounded-full bg-white
    //         transition ease-linear dark:translate-x-6 dark:text-white"
    //         ></div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
    <>
      <div className="html-container fixed top-16 z-50 mx-auto w-full">
        <div className="">
          <div className="">
            <div className="navigation">
              <nav>
                <ul className="nav-type">
                  <li>
                    <a href="/" target="_blank" className="active">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.beckem.dev/">About</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <div className="line"></div>
                  <li className="px-4">
                    <SearchIcon className="h-[40px] w-[40px]" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <noscript>
          <div className="first-line">
            <div className="linear">
              <div className="line-w5"></div>
            </div>
          </div>
        </noscript>
        <template>
          <div className="flash-fluid">
            <div className="flash-time">
              <div className="flash-GIF"></div>
            </div>
          </div>
        </template>
        <noscript>
          <div className="cyrcle-center">
            <div className="radial-cyrcle"></div>
          </div>
        </noscript>
      </div>

      {/* <div className="dropdown" id="anotherFunction">
        <div className="drop1">HTML</div>
        <div className="drop2">CSS</div>
        <div className="drop3">Javascript</div>
        <div className="drop4">Sass</div>
      </div> */}
    </>
  )
}

export default Header
