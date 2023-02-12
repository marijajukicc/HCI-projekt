import { useRouter } from 'next/router';
import Link from "next/link";
import useAuth from '../hooks/useAuth';
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";
import User from "../public/account2.png";
import Image from "next/image";

const Self = () => {
    const { removeAuth } = useAuth();
    const router = useRouter();

    return (
        <HeaderFooterLayout title="BookOwl / Self">
            
            <Background>
                <p className="uppercase text-3xl text-center text-shingle-fawn">Self</p>
            </Background>
            <div className="my-16 flex flex-col items-center">
            <h1 className="text-shingle-fawn text-lg my-2">Hello user, this is your personal page!</h1>
            <Image
                        src={User}
                        width={90}
                        height={90}
                        alt="User"
                        className="mt-2 col-span-2 place-self-center"
                    />
            <p className="text-shingle-fawn text-lg my-2">Let us help you find something to read.</p>
            <Link href="/shop" passHref>
                <button className="animate-pulse-slow hover:animate-none transition-colors duration-300 shadow-xl shadow-shingle-fawn-dark bg-swamp-green rounded-full px-7 py-4 uppercase text-xl hover:ring hover:ring-swamp-green hover:ring-offset-2 text-shingle-fawn-dark mt-4">Shop now</button>
            </Link>
            <p className="text-shingle-fawn text-lg my-4">If you want to log out of your account click the button below.</p>
            <button className="animate-pulse-slow hover:animate-none transition-colors duration-300 shadow-xl shadow-shingle-fawn-dark bg-swamp-green rounded-full px-7 py-4 uppercase text-xl hover:ring hover:ring-swamp-green hover:ring-offset-2 text-shingle-fawn-dark mt-4" 
             onClick={() => {
                            removeAuth();
                            router.push('/');
                        }}>Logout</button>
            </div>
        </HeaderFooterLayout>
    );
};

export default Self;