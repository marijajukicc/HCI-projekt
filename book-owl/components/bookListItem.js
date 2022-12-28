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
    </div>
);

export default bookListItem;