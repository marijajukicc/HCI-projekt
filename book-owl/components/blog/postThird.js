import Link from "next/link";
import Image from "next/image";

const PostThird = ({...item}) => {
    return (
        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <Link href={`/blog/${item.id}`} key={item.id} passHref className="flex flex-wrap no-underline hover:no-underline">
                    <Image 
                        src={'https:' + item.image.fields.file.url}
                        width={0}
                        height={0}
                        sizes={100}
                        alt="Blog img"
                        className="rounded-t pb-6 w-full h-64"
                    />
                    <p className="w-full text-light-brown/[.60] text-xs md:text-sm px-6 mb-3">{item.publishDate}</p>
                    <div className="w-full font-bold text-xl text-shingle-fawn-dark px-6 mb-2">{item.title}</div>
                        {
                            !item.option &&
                            <p className="text-shingle-fawn text-base px-6 mb-5">
                                {item.description}
                            </p>
                        }
                </Link>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div className="flex items-center justify-between">
                    <p className="text-light-brown/[.80] text-xs md:text-sm">by {item.author}</p>
                    <Link href={`/blog/${item.id}`} key={item.id} passHref>
                        <button className="font-extrabold text-xl bg-swamp-green/[.7] rounded-full px-4 py-2 hover:bg-swamp-green hover:shadow-md hover:shadow-shingle-fawn-dark text-shingle-fawn-dark">
                            &gt;
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostThird;