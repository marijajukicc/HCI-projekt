import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import BackArrow from "../public/back-arrow.png";
import bg from "../public/background.webp";

const Registration = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(""); 
    const [confirmation, setConfirmation] = useState(false); 


    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit() {
        setConfirmation(true);
    }

    if(confirmation) {
        window.scrollTo(0, 0);
        return(
            <>
                <Head>
                    <title>BookOwl / Registration</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="description" content="This is the page where you register or sign-up to have an account."></meta>
                </Head>

                <main style={{background: `url(${bg.src})`, backgroundPositionX: 'center'}} className="relative h-screen w-full">
                <div className="absolute top-1/2 left-1/2 m-0 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-5">
                        <div className="text-shingle-fawn-dark text-2xl sm:text-3xl text-center">
                            Confirmation email was sent to: <p className="font-bold">{email}</p>
                        </div>
                        <Link href="/login" key="login" passHref>
                            <button className="bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base sm:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">Log in now</button>     
                        </Link>
                    </div>
                </main>
            </>
        )

    }



    return (
        <>
        <Head>
            <title>BookOwl / Registration</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="This is the page where you register or sign-up to have an account."></meta>
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
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex flex-col gap-5">
                            <div className="w-full relative">
                                <label className="text-base text-shingle-fawn uppercase">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    {...register('email')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''} inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn`}
                                />
                                <div className="invalid-feedback text-shingle-fawn-dark">{errors.email?.message}</div>
                            </div>
                            <div className="w-full relative">
                                <label className="text-base text-shingle-fawn uppercase">Username</label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    {...register('username')}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className={`form-control ${errors.username ? 'is-invalid' : ''}inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn`}
                                />
                                <div className="invalid-feedback text-shingle-fawn-dark">{errors.username?.message}</div>
                            </div>
                            <div className="w-full relative">
                                <label className="text-base text-shingle-fawn uppercase">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    {...register('password')}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''} inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn`}
                                />
                                <div className="invalid-feedback text-shingle-fawn-dark">{errors.password?.message}</div>
                            </div>
                            <div className="w-full relative">
                                <label className="text-base text-shingle-fawn uppercase">Confirm password</label>
                                <input
                                    type="password"
                                    id="password_check"
                                    value={passwordCheck}
                                    {...register('confirmPassword')}
                                    onChange={(e) => setPasswordCheck(e.target.value)}
                                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''} inline-block w-full rounded-full text-l text-shingle-fawn bg-[#000000]/[.30] py-3 px-10 focus:outline-shingle-fawn`}
                                />
                                <div className="invalid-feedback text-shingle-fawn-dark">{errors.confirmPassword?.message}</div>
                            </div>
                            <button  className="self-center bg-light-brown/[.67] rounded-full px-7 py-4 uppercase text-base sm:text-xl hover:bg-light-brown hover:ring hover:ring-shingle-fawn hover:ring-offset-2 text-shingle-fawn-dark">Sign up</button> 
                        </div>

                    </form>

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
