import { useTheme } from 'next-themes'
import {
  SearchIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
} from '@heroicons/react/solid'
import { useEffect, useState } from 'react'

function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  const [isOpenSearch, setIsOpenSearch] = useState(false)
  useEffect(() => {
    if (theme == null) setTheme('light')
  }, [])
  return (
    <>
      <div className="fixed top-12 z-50 mx-auto w-full  md:top-16">
        <button
          className="fixed top-1 left-1 z-50 block border border-[#ff4040] shadow-lg md:hidden"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <MenuIcon className="h-10 w-10 text-[#ff5959]" />
        </button>
        <div
          className={`md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 ${
            isOpenMenu ? 'block' : 'hidden'
          } md:block`}
        >
          <nav className="navbar">
            <ul className="nav-list flex list-none flex-col items-center gap-8 rounded-[40px] rounded-br-none rounded-tl-none px-6 py-4 md:flex-row">
              <li>
                <a href="/" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.beckem.dev/" className="nav-link">
                  About me
                </a>
              </li>
              <li className="drop-button relative">
                <a href="#" className="nav-link flex items-center">
                  <span>Category</span>
                  <ChevronDownIcon className=" h-6 w-6" />
                </a>

                {/* bridge when hover */}
                <div className="absolute h-6 w-full bg-transparent"></div>

                <div className="dropdown z-50">
                  <a href="/category/frontend" className="drop-item">
                    Frontend
                  </a>
                  <a href="/category/backend" className="drop-item">
                    Backend
                  </a>
                  <a href="/category/blockchain" className="drop-item">
                    Blockchain
                  </a>
                  <a href="/category/other" className="drop-item">
                    Other
                  </a>
                </div>
              </li>
              <li>
                <div
                  className="relative flex h-[26px] w-[50px] scale-125 cursor-pointer items-center justify-between rounded-full bg-white p-[5px] dark:bg-[#111]"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
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
              <li className="hidden md:block">
                <div className=" m-0 h-[40px] w-[2px] bg-white"></div>
              </li>

              <li
                className="cursor-pointer"
                onClick={() => setIsOpenSearch(!isOpenSearch)}
              >
                <SearchIcon className="h-10 w-10" />
              </li>
            </ul>

            {isOpenSearch && (
              <div className="">
                <input
                  type="text"
                  placeholder="Enter post's name"
                  className="absolute mt-1 w-full rounded-full px-5 py-2 shadow-md outline-none"
                />
                <div className="right absolute -bottom-[42px] right-1 cursor-pointer rounded-full bg-red-400 p-2 hover:bg-red-500">
                  <SearchIcon className=" h-5 w-5 " />
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
