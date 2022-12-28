import Image from "next/image";

import BackgroundImg from '../public/background.webp'

const Background = () => {
    return (
        <div>
            <Image 
                src={BackgroundImg}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-60"
                alt="Background"
            />
            <div className="flex justify-around text-3xl ">
                <p className="uppercase relative -mt-32 text-[#1e1e1e]/[.25]">Bored?</p>
                <p className="uppercase relative -mt-36 text-center text-shingle-fawn">explore our page and <br></br> be entertained :)</p>
            </div>
        </div>
    );
};

export default Background;