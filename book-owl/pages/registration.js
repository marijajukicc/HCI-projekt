import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import BackArrow from "../public/back-arrow.png";

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
        <main className="h-full w-full bg-[url('../public/background.webp')]">
            <div className="flex flex-col justify-center items-center p-6">
                <Link href="/" passHref className="w-[58vh]">
                    <Image
                        src={BackArrow}
                        width={35}
                        height={35}
                        alt="Back-arrow"
                        className="hover:scale-110"
                    />
                </Link>
                <p className="text-shingle-fawn text-5xl text-center tracking-widest uppercase">Sign up</p>
                <section className="flex flex-col justify-center items-center">
                    <div className="w-full relative mt-3">
                        <label className="text-base text-shingle-fawn uppercase">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                        />
                    </div>
                    <div className="w-full relative mt-8">
                        <label className="text-base text-shingle-fawn uppercase">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
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
                    <div className="w-full relative mt-8">
                        <label className="text-base text-shingle-fawn uppercase">Confirm password</label>
                        <input
                            type="password"
                            id="password_check"
                            value={passwordCheck}
                            onChange={(e) => setPasswordCheck(e.target.value)}
                            className="inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn"
                        />
                    </div>
                    <button onClick={handleSubmit} className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark mt-8">Sign up</button> 
                    {error && <p className="mt-4 font-bold text-lg text-shingle-fawn">{error}</p>}
                    <p className="text-lg text-shingle-fawn mt-8">Already have an account?</p>
                    <Link href="/login" key="login" passHref>
                        <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark mt-4">Log in</button>     
                    </Link>
                </section>
            </div>
        </main>
    );
};

export default Registration;