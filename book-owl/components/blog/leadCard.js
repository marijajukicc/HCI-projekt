import Image from "next/image";
import Link from "next/link";

const LeadCard = ({...item}) => {
    return (
        <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
            <div className="flex flex-wrap no-underline hover:no-underline">
                <div className="md:w-2/3 w-full md:h-full h-[35vh] rounded-t">	
                <Link href={`/blog/${item.id}`} key={item.id} passHref>
                    <div style={{
                        background: `url(${'https:' + item.image.fields.file.url})`,
                        backgroundSize:"cover",
                        width: "100%",
                        height:"100%",
                    }}>
                    </div>  
                </Link>
                </div>

				<div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <p className="w-full uppercase text-light-brown/[.60] text-xs md:text-sm pt-6 pb-10 px-6">{item.publishDate}</p>
                        <div className="w-full font-bold text-xl text-shingle-fawn-dark pb-5 px-6">{item.title}</div>
                        <p className="text-shingle-fawn text-base px-6 mb-5">
                            {item.description}
                        </p>
                    </div>

                    <div className="flex justify-between items-center mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                        <p className="mr-4 text-light-brown/[.80]">by {item.author}</p>
                        <Link href={`/blog/${item.id}`} key={item.id} passHref>
                            <button className="font-extrabold text-3xl bg-swamp-green/[.7] rounded-full px-8 py-5 hover:bg-swamp-green hover:shadow-md hover:shadow-shingle-fawn-dark text-shingle-fawn-dark">
                                &gt;
                            </button>
                        </Link>
                    </div>
				</div>

            </div>
        </div>
    );
};

export default LeadCard;