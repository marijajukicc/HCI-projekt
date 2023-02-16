"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Popover, Transition } from '@headlessui/react';
import { Bars3Icon} from '@heroicons/react/24/solid';
import { XMarkIcon} from '@heroicons/react/20/solid';
import { navigationItems } from "../../constants/navbar";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';

import DropDown from './dropDown';
import Cart from "../../public/shopping-cart.png";
import CartActive from "../../public/shopping-cart2.png";
import Login from '../../public/account.png';
import LoginActive from '../../public/account2.png';


const HamburgerBar = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  const { token } = useAuth();
  const cart = useSelector((state) => state.cart);
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = (e) => {
      e.preventDefault();
      setIsClicked(!isClicked);
  };

  const getTotalQuantity = () => {
      return cart.reduce(
          (accumulator, item) => accumulator + item.quantity,
          0
      );
  }
  return (
    <Popover>
    <div className='flex grow items-center justify-end md:hidden'>
    <Popover.Button className='inline-flex items-center rounded-md bg-swamp-green text-shingle-fawn
    hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
        <span className='sr-only'>Open Menu </span>
        <Bars3Icon className='h-10 w-10'aria-hidden='true'/>
    </Popover.Button>
    </div>
    <Transition
        as={Fragment}
        enter='duration-200 ease out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
    >
    <Popover.Panel focus className='absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden'>
        <div className='rounded-lg bg-swamp-green shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
        <div className='px-5 pt-5 pb-6'>
            <div className='flex items-center justify-between'>
                <p id="footer" className='font-pacifico text-shingle-fawn'>BOOK <br></br> OWL</p>
                <div className='-mr-2'>
                <Popover.Button className='inline-flex items-center rounded-md bg-swamp-green text-shingle-fawn
                hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    <span className='sr-only'>Open Menu </span>
                    <XMarkIcon className='h-10 w-10'aria-hidden='true'/>
                </Popover.Button>
                </div>
            </div>
            <div className='mt-6 '>
                <nav className='grid gap-y-8 text-shingle-fawn list-none '>
                        {navigationItems.map(({ label, path }) => (
                            <Link href={path} key={label} passHref>
                                <li
                                    key={label}
                                    className={`focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:font-bold cursor-pointer ${
                                        currentPage === path || (currentPage === '/shop/[slug]' && path === "/shop") || (currentPage === '/blog/[id]' && path === "/blog") ? 'font-bold underline decoration-2 scale-110' : ''
                                    }`}
                                    >
                                    {label}
                                </li>
                            </Link>
                        ))}
                </nav>
            </div>
            <div className='mt-6 inline-flex items-center gap-2'>
                <span className={`flex gap-1 items-center hover:scale-110 ${ currentPage === '/shoppingCart' ? 'scale-110  rounded-md border-b-4 border-shingle-fawn' : '' }`}>
                    <Link href="/shoppingCart" key="shoppingCart" passHref>
                        <Image
                            src={ currentPage === '/shoppingCart' ? CartActive : Cart }
                            width={30}
                            height={30}
                            alt="Cart"
                        />
                    </Link>
                    <span className='md:hidden text-xl text-shingle-fawn'>{getTotalQuantity()}</span>
                </span>
                <div>
                    <Image
                        src={ token ? LoginActive : Login }
                        width={30}
                        height={30}
                        alt="Login"
                        className={`hover:cursor-pointer hover:scale-110 ${ currentPage === '/self'  ? 'scale-110 outline outline-2 outline-offset-2 rounded-md outline-shingle-fawn' : '' }`}
                        onClick={handleButtonClick}                        
                    />
                    {isClicked && <DropDown />}

                </div>
            </div>
            </div>
        </div>

    </Popover.Panel>
    </Transition>
    </Popover>
  );
};

export default HamburgerBar;