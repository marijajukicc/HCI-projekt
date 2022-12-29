import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";
import Link from "next/link";

import HeaderFooterLayout from "../layouts/HeaderFooterLayout";

const Login = () => {
    return (
        <HeaderFooterLayout>

            <main className="h-screen bg-[url('../public/background.webp')]">
                <div className="flex flex-col justify-center items-center pt-14 pr-8 pb-12 pl-8">
                    <p className="text-shingle-fawn text-5xl text-center tracking-widest uppercase">Log in</p>
                    <section className="flex flex-col justify-center items-center">
                        <div className="w-full relative mt-14 ">
                            <label className="text-base text-shingle-fawn uppercase">Username</label>
                            <input
                                type="email"
                                id="email"
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <div className="w-full relative mt-8">
                            <label className="text-base text-shingle-fawn uppercase">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark mt-8">Log in</button> 
                        <p className="text-lg text-shingle-fawn mt-20">Don't have an account yet?</p>
                        <Link href="/registration" key="registration" passHref>
                            <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark mt-4">Sign up now</button>     
                        </Link>
                    </section>
                </div>
            </main>
            
        </HeaderFooterLayout>
    );
};

export default Login;