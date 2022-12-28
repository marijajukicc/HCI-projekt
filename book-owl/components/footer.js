import Image from "next/image";
import Link from "next/link";

import { footerNavigationItems } from '../constants/footer';

import Facebook from '../public/facebook.png';
import Instagram from '../public/instagram.png';
import Twitter from '../public/twitter.png';
import Email from '../public/email.png';

const Footer = () => {

    return(
        <section className="bg-swamp-green text-shingle-fawn">
            <main className="flex flex-col ml-6 mr-6 p-8">
                <div className="flex items-center justify-between">
                    <Link href="/">
                        <p id="footer" className='font-pacifico text-shingle-fawn text-4xl'>BOOK <br></br> OWL</p>
                    </Link>
                    <div className="flex list-none text-xl">
                        {footerNavigationItems.map(({label, path}) => (
                            <Link href={path} key={label} passHref >
                                <li
                                    key={label}
                                    className="px-5 whitespace-nowrap hover:font-bold cursor-pointer"
                                    >
                                    {label}
                                </li>
                            </Link>
                        ))}
                    </div> 
                    <div className="flex flex-col items-center">
                        <p className="text-xl mb-4">Follow us</p>
                        <div className="flex gap-5">
                            <Link href="https://www.facebook.com/" >
                                <Image 
                                    src={Facebook}
                                    width={30}
                                    height={30}
                                    alt="Facebook"
                                />
                            </Link>
                            <Link href="https://www.instagram.com/" >
                                <Image 
                                    src={Instagram}
                                    width={30}
                                    height={30}
                                    alt="Instagram"
                                />
                            </Link>
                            <Link href="https://twitter.com/" >
                                <Image 
                                    src={Twitter}
                                    width={30}
                                    height={30}
                                    alt="Twitter"
                                />
                            </Link>
                            <Link href="https://gmail.com/" >
                                <Image 
                                    src={Email}
                                    width={30}
                                    height={30}
                                    alt="Email"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
};

export default Footer;