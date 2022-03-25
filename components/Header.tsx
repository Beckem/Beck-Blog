import { useTheme } from 'next-themes'
import Link from 'next/link'
import { SunIcon, MoonIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
function Header() {
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    if (theme == null) setTheme('light')
  }, [])
  return (
    <header className="fixed z-50 mx-auto flex w-full justify-between bg-white p-5 dark:bg-gray-800">
      <div className="flex items-center space-x-5">
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About Me</h3>
          <h3>Contact</h3>
          <h3 className="rounded-full bg-green-600 px-4 py-1 text-white">
            Follow
          </h3>

          <div
            className="relative flex h-[26px] w-[50px] scale-125 cursor-pointer items-center justify-between rounded-full bg-[#111] p-[5px]"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            <MoonIcon className="h-5 w-5 text-[#f39c12]" />
            <SunIcon className="h-5 w-5 text-[#f1c40f]" />
            <div
              className="absolute top-[2px] left-[2px] h-[22px] w-[22px] translate-x-0 rounded-full bg-white 
            transition ease-linear dark:translate-x-6 dark:text-white"
            ></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
