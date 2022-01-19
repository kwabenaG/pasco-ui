// handles the header component

import { useState, useEffect, useRef} from 'react';
import {HomeIcon, UserCircleIcon, 
    SearchIcon, CurrencyDollarIcon, 
    CollectionIcon, AcademicCapIcon, MenuAlt3Icon } from '@heroicons/react/outline'
import Link from 'next/link';
import Image from 'next/image';

// local imports
import HeaderItem from './HeaderItem';
import MobileMenu from './MobileMenu';

export default function Header() {

    // create hold variable
    const [isActive, setIsActive ] = useState(0)

    function handler() {
        setIsActive(
            preVal => preVal + 1
        )
    }
    useEffect(() => {
            handler()
    },[])




    return (
        <header className="sticky items-center h-auto justify-between bg-[#06202A] top-0 z-50 flex-col  sm:flex-row sm:items-center sm:text-center md:flex  ">
            
            <div className="hidden justify-evenly sm:hidden sm:mt-2 md:flex flex-grow lg:flex ">
               <HeaderItem href="/about" title="HOME" Icon={HomeIcon} />
                <HeaderItem href="/about" title="TRENDING" Icon={CollectionIcon} />
                <HeaderItem href="/about" title="SCHOOLS" Icon={AcademicCapIcon} />
                <HeaderItem href="/about" title="PRICING" Icon={CurrencyDollarIcon } />
                <HeaderItem href="/about" title="SEARCH" Icon={SearchIcon} />
                <HeaderItem href="/about" title="ACCOUNT" Icon={UserCircleIcon} />
            </div>

            <div className='hidden sm:flex-row md:flex lg:flex m-4 justify-between sm:hidden' >
                <Link href="/"><a className="text-white px-10 tracking-widest hover:text-red-600">Sign In </a></Link>
                <Link href="/"><a className="text-white tracking-widest hover:text-red-600">Create Free Acount</a></Link>
            
            </div>

            <div className="hidden items-center text-center sm:hidden md:flex md:justify-end flex-grow md:p-4">
                <Link href="/"><a className="text-3xl text-white tracking-widest">Pasada</a></Link>
            </div>

            {/* mobile menu */}
            <div className="">
                <div className="flex min-w-fit justify-between py-2 px-2 sm:flex-row md:hidden lg:hidden">
                    <Link href="/">
                        <a className="flex items-center text-3xl text-white tracking-widest uppercase">Pasada</a>
                    </Link>
                    <div className="mobile-menu" >
                        <button onClick={() => {}} type="button" className="inline-flex ">
                            <MobileMenu href="/home" Icon={MenuAlt3Icon} />
                        </button>
                    </div>
                    
                </div>
            </div>

            <div className="mobile-menu absolute transform -translate-x-full transtion duration-300 left-0 items-end sm:hidden md:hidden lg:hidden">
                <HeaderItem href="/about" title="HOME" Icon={HomeIcon} />
                <HeaderItem href="/about" title="TRENDING" Icon={CollectionIcon} />
                <HeaderItem href="/about" title="SCHOOLS" Icon={AcademicCapIcon} />
                <HeaderItem href="/about" title="PRICING" Icon={CurrencyDollarIcon } />
                <HeaderItem href="/about" title="SEARCH" Icon={SearchIcon} />
                <HeaderItem href="/about" title="ACCOUNT" Icon={UserCircleIcon} />
            </div>
        
        </header>
    )
}
