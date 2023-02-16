import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import useAuth from '../../hooks/useAuth';

import { navigationItems } from "../../constants/navbar";
import DropDown from './dropDown';
import Cart from "../../public/shopping-cart.png";
import CartActive from "../../public/shopping-cart2.png";
import Login from '../../public/account.png';
import LoginActive from '../../public/account2.png';

const NavBar = () => {
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
        <nav className='hidden  lg:flex-grow md:flex md:justify-between gap-8 text-shingle-fawn '>
            <ul className='flex py-0.5 list-none'>
                {navigationItems.map(({ label, path }) => (
                    <Link href={path} key={label} passHref>
                        <li
                            key={label}
                            className={`md:px-2 lg:px-5 text-xl uppercase whitespace-nowrap hover:font-bold hover:scale-110 cursor-pointer ${
                                currentPage === path || (currentPage === '/shop/[slug]' && path === "/shop") || (currentPage === '/blog/[id]' && path === "/blog") ? 'font-bold underline decoration-2 scale-110' : ''
                            }`}
                            >
                            {label}
                        </li>
                    </Link>
                 ))}
            </ul>
            <div className='inline-flex gap-5 items-center'>
                <span className={`flex gap-1 items-center hover:scale-110 ${ currentPage === '/shoppingCart' ? 'scale-110  rounded-md border-b-4 border-shingle-fawn' : '' }`}>
                    <Link href="/shoppingCart" key="shoppingCart" passHref>
                        <Image
                            src={ currentPage === '/shoppingCart' ? CartActive : Cart }
                            width={30}
                            height={30}
                            alt="Cart"
                        />
                    </Link>
                    <span className='text-xl text-shingle-fawn'>{getTotalQuantity()}</span>
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
        </nav>
    );
};

export default NavBar;