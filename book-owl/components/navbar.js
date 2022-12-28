import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import { navigationItems } from "../constants/navbar";
import Cart from "../public/shopping-cart.png";
import Login from '../public/account.png';

const NavBar = () => {
    const router = useRouter();
    const currentPage = router.pathname;

    return (
        <nav className='flex-grow flex justify-between text-shingle-fawn'>
            <div className='flex py-0.5 list-none'>
                {navigationItems.map(({ label, path }) => (
                    <Link href={path} key={label} passHref>
                        <li
                            key={label}
                            className={`px-5 text-l uppercase whitespace-nowrap hover:font-bold hover:scale-110 cursor-pointer ${
                                currentPage === path ? 'font-bold underline decoration-2' : ''
                            }`}
                            >
                            {label}
                        </li>
                    </Link>
                ))}
            </div>
            <div className='inline-flex gap-5'>
                <Link href="/shoppingCart" passHref>
                    <Image
                        src={Cart}
                        width={30}
                        height={30}
                        alt="Cart"
                        className='hover:scale-125'
                    />
                </Link>
                <Link href="/login" passHref>
                    <Image
                        src={Login}
                        width={30}
                        height={30}
                        alt="Login"
                        className='hover:scale-125'
                    />
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;