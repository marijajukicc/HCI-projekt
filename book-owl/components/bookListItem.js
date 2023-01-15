import Image from "next/image";

const bookListItem = ({ src, ext, text }) => (
    <div className="flex flex-col items-center gap-5 hover:scale-105 hover:shadow-lg cursor-pointer">
        <Image
            src={`/${src}.${ext}`} 
            width={200}
            height={200}
            alt="Book"
            />
        <p className="text-2xl text-shingle-fawn">{text}</p>
        <button className='bg-light-brown/[.95] rounded-full mt-6 px-5 py-4 uppercase text-base hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark'>Add to cart</button>   
    </div>
);

export default bookListItem;