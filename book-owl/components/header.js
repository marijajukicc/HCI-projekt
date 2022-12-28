import Image from 'next/image';
import Link from 'next/link';

import NavBar from './navbar';
import LogoImg from '../public/Logo.png';

const Header = () => {
    return(
        <header className='relative flex items-center bg-swamp-green'>
            <main className='ml-6 mr-6 flex-grow flex flex-col mt-2'>
                <div className='flex items-center gap-96'>
                    <Link href="/">
                        <div className='flex items-center'>
                            <Image 
                                src={LogoImg}
                                width={70}
                                height={70}
                                alt="Logo"
                                />
                            <p className='font-pacifico text-shingle-fawn'>BOOK <br></br> OWL</p>
                        </div>
                    </Link>
                    <NavBar />
                </div>
            </main>
        </header>
    );
};

export default Header;