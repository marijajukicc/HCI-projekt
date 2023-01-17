import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import api from "../api";
import useAuth from "../hooks/useAuth";

import BackArrow from "../public/back-arrow.png";

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
        <main className="h-screen w-full bg-[url('../public/background.webp')]">
            <div className="flex flex-col justify-center items-center p-10">
                <Link href="/" passHref className="w-[48vh]">
                    <Image
                        src={BackArrow}
                        width={35}
                        height={35}
                        alt="Back-arrow"
                        className="hover:scale-110"
                    />
                </Link>
                <p className="text-shingle-fawn text-5xl text-center tracking-widest uppercase">Log in</p>
                <section className="flex flex-col justify-center items-center">
                    <div className="w-full relative mt-12">
                        <label className="text-base text-shingle-fawn uppercase">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                        />
                    </div>
                    <div className="w-full relative mt-8">
                        <label className="text-base text-shingle-fawn uppercase">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                        />
                    </div>
                    <button onClick={handleSubmit} className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark mt-8">Log in</button> 
                    {error && <p className="mt-8 font-bold text-lg text-shingle-fawn">{error}</p>}
                    <p className="text-lg text-shingle-fawn mt-20">Don&#39;t have an account yet?</p>
                    <Link href="/registration" key="registration" passHref>
                        <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark mt-4">Sign up now</button>     
                    </Link>
                </section>
            </div>
        </main> 
    );
};

export default Login;
