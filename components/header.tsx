import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { XMarkIcon, MicrophoneIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

type Props = {}

function Header({}: Props) {
  const router = useRouter()
  const searchInputRef = useRef(null)

  return (
    <header>
        <Image 
            className='cursor-pointer'
            src='https://www.google.com/logos/doodles/2022/seasonal-holidays-2022-6753651837109831.4-s.png'
            height={40}
            width={120}
            alt='Google Logo'
            onClick={() => router.push('/')}
        />
        <form className='flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input 
                ref={searchInputRef} 
                className='flex-grow w-full focus:outline-none' 
                type="text" 
            />
            <XMarkIcon 
                className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
                onClick={() => (searchInputRef.current.value = '')}
            />
            <MicrophoneIcon 
                className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300' 
            />
            <MagnifyingGlassIcon
                className='h-6 text-blue-500 hidden sm:inline-flex' 
            />
        </form>
    </header>
  )
}

export default Header