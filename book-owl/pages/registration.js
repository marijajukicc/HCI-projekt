import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import BackArrow from "../public/back-arrow.png";
import bg from "../public/background.webp";

const Registration = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(""); 
    const [error, setError] = useState("");

    function validateFirst() {
        if(!email || !username || !password || !passwordCheck) {
            setError("Please fill out all the boxes.");
            return false;
        }
        
        if(password != passwordCheck) {
            setError("Passwords are not the same.");
            return false;
        }

        return true;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(validateFirst()) {
            router.push("/login");
        } 
    }

    return (
        <>
        <Head>
            <title>BookOwl / Registration</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main style={{background: `url(${bg.src})`, backgroundPositionX: 'center'}} className="relative h-screen w-full">
            <div className="absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-1 lg:gap-3 ">
                <Link href="/" passHref className="md:w-[54vh] w-[40vh] mb-1">
                    <Image
                        src={BackArrow}
                        width={35}
                        height={35}
                        alt="Back-arrow"
                        className="hover:scale-110"
                    />
                </Link>
                <p className="text-shingle-fawn text-4xl sm:text-5xl text-center tracking-widest uppercase">Sign up</p>
                <section className="flex flex-col justify-center items-center gap-6">
                    <div className="flex flex-col gap-5">
                        <div className="w-full relative">
                            <label className="text-base text-shingle-fawn uppercase">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <div className="w-full relative">
                            <label className="text-base text-shingle-fawn uppercase">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <div className="w-full relative">
                            <label className="text-base text-shingle-fawn uppercase">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <div className="w-full relative">
                            <label className="text-base text-shingle-fawn uppercase">Confirm password</label>
                            <input
                                type="password"
                                id="password_check"
                                value={passwordCheck}
                                onChange={(e) => setPasswordCheck(e.target.value)}
                                className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                            />
                        </div>
                        <button onClick={handleSubmit} className="self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base sm:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">Sign up</button> 
                        {error && <p className="mt-4 font-bold text-lg text-shingle-fawn">{error}</p>}
                    </div>
                    <div>
                        <p className="text-base sm:text-lg text-shingle-fawn mb-2">Already have an account?</p>
                        <Link href="/login" key="login" passHref>
                            <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base sm:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">Log in now</button>     
                        </Link>
                    </div>
                </section>
            </div>
        </main>
        </>
    );
};

export default Registration;
