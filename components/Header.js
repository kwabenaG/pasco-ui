// handles the header component
import {HomeIcon, UserCircleIcon, 
    SearchIcon, CurrencyDollarIcon, 
    CollectionIcon, AcademicCapIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Image from 'next/image';

// local imports
import HeaderItem from './HeaderItem';

export default function Header() {
    return (
        <header className="flex flex-col items-center sm:flex-row m-5 h-auto justify-between">
            <div className="flex flex-grow justify-evenly max-w-2xl">
               <HeaderItem href="/about" title="HOME" Icon={HomeIcon} />
                <HeaderItem href="/about" title="TRENDING" Icon={CollectionIcon} />
                <HeaderItem href="/about" title="SCHOOLS" Icon={AcademicCapIcon} />
                <HeaderItem href="/about" title="PRICING" Icon={CurrencyDollarIcon } />
                <HeaderItem href="/about" title="SEARCH" Icon={SearchIcon} />
                <HeaderItem href="/about" title="USER" Icon={UserCircleIcon} />
            </div>
            <div>
                <h1 className=" text-3xl text-white tracking-widest ">Pasada</h1>
            </div>
        </header>
    )
}
