import Image from "next/image";
import Link from "next/link";

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
						<p className="font-bold text-2xl pb-5">Help & Information</p>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							FAQ
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							Returns & Refunds
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							Order Status
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							Payment Options
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="font-bold text-2xl pb-5">Contact Us</p>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							About Us
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							Careers
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							Complaints
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
							Privacy policy
						</li>
						<li className="text-lg pb-2 font-bold hover:underline cursor-pointer">
                            Terms & Conditions
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
                    <p className="text-2xl font-bold mb-5">Follow us</p>
                        <div className="flex gap-5">
                            <Link href="https://www.facebook.com/" className="hover:shadow-xl hover:shadow-shingle-fawn-dark rounded-full">
                                <Image 
                                    src={Facebook}
                                    width={30}
                                    height={30}
                                    alt="Facebook"
                                />
                            </Link>
                            <Link href="https://www.instagram.com/" className="hover:shadow-xl hover:shadow-shingle-fawn-dark rounded-full">
                                <Image 
                                    src={Instagram}
                                    width={30}
                                    height={30}
                                    alt="Instagram"
                                />
                            </Link>
                            <Link href="https://twitter.com/" className="hover:shadow-xl hover:shadow-shingle-fawn-dark rounded-full">
                                <Image 
                                    src={Twitter}
                                    width={30}
                                    height={30}
                                    alt="Twitter"
                                />
                            </Link>
                            <Link href="https://gmail.com/" className="hover:shadow-xl hover:shadow-shingle-fawn-dark rounded-full">
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
				<h1 className="font-semibold">
					© 2023 All rights reserved | Build with ❤ by Adriana and Marija
				</h1>
			</div>
		</>
	);
}

export default Footer;