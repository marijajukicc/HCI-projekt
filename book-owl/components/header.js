import Image from 'next/image';
import Link from 'next/link';

import NavBar from './navigation/navbar';
import HamburgerBar from './navigation/HamburgerBar';
import LogoImg from '../public/Logo.png';

const Header = () => {
    return(
        <header className='sticky top-0 z-10 flex items-center bg-swamp-green'>
             <nav className='container mx-auto'>
                <main className='py-2'>
                    <div className='flex   items-center justify-between gap-x-64 mx-auto sm:mx8'>
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
                    </div>
                </main>
            </nav>
      
        </header>
    );
};

export default Header;