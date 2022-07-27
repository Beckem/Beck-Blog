import { useTheme } from 'next-themes'
import Link from 'next/link'
import {
  SearchIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/solid'
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

    //     <div
    //       className="relative flex h-[26px] w-[50px] scale-125 cursor-pointer items-center justify-between rounded-full bg-[#111] p-[5px]"
    //       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    //     >
    //       <MoonIcon className="h-5 w-5 text-[#f39c12]" />
    //       <SunIcon className="h-5 w-5 text-[#f1c40f]" />
    //       <div
    //         className="absolute top-[2px] left-[2px] h-[22px] w-[22px] translate-x-0 rounded-full bg-white
    //       transition ease-linear dark:translate-x-6 dark:text-white"
    //       ></div>
    //     </div>
    //   </div>
    // </div>
    // </header>
    <>
      <div className="fixed top-16 z-50 mx-auto w-full">
        <div className="">
          <div className="">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <nav className="navbar">
                <ul className="nav-type gap-8 px-6">
                  <li>
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="https://www.beckem.dev/" className="nav-link">
                      About
                    </a>
                  </li>
                  <li className="drop-button relative">
                    <a href="#" className="nav-link flex items-center">
                      <span>Category</span>
                      <ChevronDownIcon className=" h-6 w-6" />
                    </a>

                    <div className="dropdown">
                      <a href="#" className="drop-item">
                        Frontend
                      </a>
                      <a href="#" className="drop-item">
                        Backend
                      </a>
                      <a href="#" className="drop-item">
                        Blockchain
                      </a>
                      <a href="#" className="drop-item">
                        Other
                      </a>
                    </div>
                  </li>
                  <li>
                    <div
                      className="relative flex h-[26px] w-[50px] scale-125 cursor-pointer items-center justify-between rounded-full bg-white p-[5px] dark:bg-[#111]"
                      onClick={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                      }
                    >
                      <MoonIcon className="h-5 w-5 text-[#f39c12]" />
                      <SunIcon className="h-5 w-5 text-[#f1c40f]" />
                      <div
                        className="absolute top-[2px] left-[2px] h-[22px] w-[22px] translate-x-0 rounded-full bg-[#111] transition duration-200
            ease-linear dark:translate-x-6 dark:bg-white dark:text-white"
                      ></div>
                    </div>
                  </li>

                  {/* divider  */}
                  <li>
                    <div className=" m-0 h-[40px] w-[2px] bg-white"></div>
                  </li>
                  <li>
                    <SearchIcon className="h-[40px] w-[40px]" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
