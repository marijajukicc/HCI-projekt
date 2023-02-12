"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { Bars3Icon} from '@heroicons/react/24/solid';
import NavBar from './navigation/navbar';
import HamburgerBar from './navigation/HamburgerBar';
import LogoImg from '../public/Logo.png';

const Header = () => {
    return(
        <Popover className='sticky top-0 z-10 flex items-center bg-swamp-green'>
             <nav className='container mx-auto'>
                <main className='py-2'>
                    <div className='flex   items-center md:justify-center lg:justify-between md:gap-16 lg:gap-x-64 mx-auto sm:mx8'>
                        <Link href="/">
                            <div className='flex items-center hover:scale-105'>
                                <Image 
                                    src={LogoImg}
                                    width={60}
                                    height={60}
                                    alt="Logo"
                                />
                                <p className='font-pacifico text-shingle-fawn'>BOOK <br></br> OWL</p>
                            </div>
                        </Link>
                        <NavBar />
                        <div className='flex grow items-center justify-end md:hidden'>
                        <Popover.Button className='inline-flex items-center rounded-md bg-swamp-green text-shingle-fawn
                        hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                            <span className='sr-only'>Open Menu </span>
                            <Bars3Icon className='h-10 w-10'aria-hidden='true'/>
                        </Popover.Button>
                        </div>
                    </div>
                </main>
            </nav>
      
        </Popover>
    );
};

export default Header;