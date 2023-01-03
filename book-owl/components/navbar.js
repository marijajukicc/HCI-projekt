import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import useAuth from '../hooks/useAuth';

import { navigationItems } from "../constants/navbar";
import Cart from "../public/shopping-cart.png";
import CartActive from "../public/shopping-cart2.png";
import Login from '../public/account.png';
import LoginActive from '../public/account2.png';

const NavBar = () => {
    const router = useRouter();
    const currentPage = router.pathname;
    const { token } = useAuth();

    
    return (
        <nav className='flex-grow flex justify-between text-shingle-fawn'>
            <div className='flex py-0.5 list-none'>
                {navigationItems.map(({ label, path }) => (
                    <Link href={path} key={label} passHref>
                        <li
                            key={label}
                            className={`px-5 text-xl uppercase whitespace-nowrap hover:font-bold hover:scale-110 cursor-pointer ${
                                currentPage === path ? 'font-bold underline decoration-2 scale-110' : ''
                            }`}
                            >
                            {label}
                        </li>
                    </Link>
                ))}
            </div>
            <div className='inline-flex gap-5'>
                <Link href="/shoppingCart" key="shoppingCart" passHref>
                    <Image
                        src={ currentPage === '/shoppingCart' ? CartActive : Cart }
                        width={30}
                        height={30}
                        alt="Cart"
                        className={`hover:scale-125 ${ currentPage === '/shoppingCart' ? 'border-2 border-shingle-fawn' : '' }`}
                    />
                </Link>
                <Link href={token ? "/self" : "/login"} key="login" passHref>
                    <Image
                        src={ token ? LoginActive : Login }
                        width={30}
                        height={30}
                        alt="Login"
                        className={`hover:scale-125 ${ currentPage === '/self'  ? 'border-2 border-shingle-fawn' : '' }`}
                    />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;