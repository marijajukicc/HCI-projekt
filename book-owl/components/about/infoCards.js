import { SlClock, SlLocationPin } from "react-icons/sl";
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";

const InfoCards = () => {
    return (
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
            <div className="flex flex-wrap justify-between break-all">

                <div className="w-full lg:w-1/4 md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <div className="flex flex-wrap">
                            <HiOutlinePhone className='text-swamp-green rounded-t pb-6 w-full lg:h-40 md:h-30 h-24'/>
                            <h2 className="w-full text-light-brown font-bold text-lg lg:text-2xl px-6 mb-3">Phone</h2>
                            <p className="w-full text-light-brown text-base md:text-lg px-6 mb-3">+44 7457 433511</p>
                        </div>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/4 md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <div className="flex flex-wrap">
                            <GoMail className='text-swamp-green rounded-t pb-6 w-full lg:h-40 md:h-30 h-24'/>
                            <h2 className="w-full text-light-brown font-bold text-lg lg:text-2xl px-6 mb-3">Mail</h2>
                            <p className="w-full text-light-brown text-base md:text-lg px-6 mb-3">contact@book-owl.com</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/4 md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <div className="flex flex-wrap">
                            <SlLocationPin className='text-swamp-green rounded-t pb-6 w-full lg:h-40 md:h-30 h-24'/>
                            <h2 className="w-full text-light-brown font-bold text-lg lg:text-2xl px-6 mb-3">Location</h2>
                            <p className="w-full text-light-brown text-base md:text-lg px-6 mb-3">79 Park Lane, London</p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-1/4 md:w-1/2 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <div className="flex flex-wrap">
                            <SlClock className='text-swamp-green rounded-t pb-6 w-full lg:h-40 md:h-30 h-24'/>
                            <h2 className="w-full text-light-brown font-bold text-lg lg:text-2xl px-6 mb-3">Working hours</h2>
                            <p className="w-full text-light-brown text-base md:text-lg px-6 mb-3">Mon – Fri: 8:00 – 17:00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default InfoCards