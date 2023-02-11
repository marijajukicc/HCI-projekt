import Image from "next/image";
import Link from "next/link";

import { footerNavigationItems } from '../constants/footer';

import Facebook from '../public/facebook.png';
import Instagram from '../public/instagram.png';
import Twitter from '../public/twitter.png';
import Email from '../public/email.png';

function Footer() {
	return (
		<>
			<div className="bg-swamp-green h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 text-shingle-fawn">
				<div className="p-5 ">
					<ul>
                        <Link href="/">
                            <p id="footer" className='font-pacifico text-shingle-fawn text-4xl'>BOOK <br></br> OWL</p>
                        </Link>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Help & Information</p>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							FAQ
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Returns & Refunds
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Order Status
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Payment Options
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Contact Us</p>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							About Us
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Careers
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Complaints
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
							Privacy policy
						</li>
						<li className=" text-md pb-2 font-semibold hover:text-blue-500 cursor-pointer">
                            Terms & Conditions
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
                    <p className="md:text-xl mb-4">Follow us</p>
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
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-swamp-green text-shingle-fawn">
				<h1 className=" text-gray-800 font-semibold">
					© 2023 All rights reserved | Build with ❤ by Adriana and Marija
				</h1>
			</div>
		</>
	);
}

export default Footer;