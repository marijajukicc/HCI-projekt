import Image from "next/image";

import bg from '../../public/photo.webp';

const LeadCard = () => {
    return (
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <div className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full md:w-2/3 rounded-t">	
                    <Image 
                        src={bg}
                        style={{ width: "100%", height: "100%" }}
                        alt="Blog img"
                        className="shadow"
                    />   
                </div>

				<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <p className="w-full uppercase text-gray-500 text-xs md:text-sm pt-6 pb-10 px-6">December 1st, 2022</p>
                        <div className="w-full font-bold text-xl text-shingle-fawn-dark pb-5 px-6">Books Make the Best Gifts</div>
                        <p className="text-shingle-fawn text-base px-6 mb-5">
                            Every time you give someone a book, you give them a passport into a new world. You also help them reap the many benefits of reading. In this post, you&#39;ll discover the best gift books for everyone on your list!
                        </p>
                    </div>

                    <div className="flex justify-end mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                        <button className="font-extrabold text-3xl bg-swamp-green/[.7] rounded-full px-8 py-5 hover:bg-swamp-green hover:shadow-md hover:shadow-shingle-fawn-dark text-shingle-fawn-dark">
                            &gt;
                        </button>
                    </div>
				</div>

            </div>
        </div>
    );
};

export default LeadCard;