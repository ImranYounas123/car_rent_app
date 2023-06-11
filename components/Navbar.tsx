import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomBtn } from "./index"
const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center py-4 sm:px-16 px-6  bg-transparent'>
                <Link href={'/'} className='flex justify-center items-center'>
                    <Image
                        alt='logo'
                        src="/logo.svg"
                        height={18}
                        width={118}
                        className='object-contain'
                    />
                </Link>

                <CustomBtn
                    title="SignIn"
                    btnType="button"
                    containerStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
                />
            </nav>
        </header>
    )
}

export default Navbar