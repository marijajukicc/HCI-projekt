import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import api from "../api";
import useAuth from "../hooks/useAuth";

import BackArrow from "../public/back-arrow.png";
import bg from "../public/background.webp";

const Login = () => {
    const {setAuth } = useAuth();
    const router = useRouter();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        await api
            .login(email, password)
            .then(({ token }) => {
                setEmail("");
                setAuth(token);
                router.push("/self");
            })
            .catch((err) => {
                setError(err.message)
            }); 
    };

    return (
        <>
        <Head>
            <title>BookOwl / Login</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="This is the page where you log in or sign in if you have an account."></meta>
        </Head>
        <main style={{background: `url(${bg.src})`,backgroundPositionX: 'center'}} className="relative h-screen w-full">
            <div className="absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-8 lg:gap-10 p-5 sm:p-10">
                <Link href="/" passHref className="md:w-[48vh] w-[42vh] mb-2">
                    <Image
                        src={BackArrow}
                        width={35}
                        height={35}
                        alt="Back-arrow"
                        className="hover:scale-110"
                    />
                </Link>
                <p className="text-shingle-fawn text-4xl sm:text-5xl text-center tracking-widest uppercase">Log in</p>
                <section className="flex flex-col justify-center items-center gap-8">
                    <div className="flex flex-col gap-5">
                        <div className="w-full relative ">
                            <label className="text-base text-shingle-fawn uppercase">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <div className="w-full relative ">
                            <label className="text-base text-shingle-fawn uppercase">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <button onClick={handleSubmit} className="self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base sm:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">Log in</button> 
                        {error && <p className="mt-8 font-bold text-lg text-shingle-fawn">{error}</p>}
                    </div>
                    <div>
                        <p className="text-base sm:text-lg text-shingle-fawn mb-2">Don&#39;t have an account yet?</p>
                        <Link href="/registration" key="registration" passHref>
                            <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base sm:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">Sign up now</button>     
                        </Link>
                    </div>
                </section>
            </div>
        </main> 
        </>
    );
};

export default Login;
