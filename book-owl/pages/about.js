import Image from 'next/image';

import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Background from '../layouts/background';
import Newsletter from '../components/about/newsletter';
import InfoCards from '../components/about/infoCards';
import LogoImg from '../public/big-logo.png';

const About = () => {
    return (
        <HeaderFooterLayout title="BookOwl / About ">
            <head><meta name="description" content="This is the page to get to know us. We are a book selling company which also has blog posts."></meta></head>
            <Background>
                <Image
                    src={LogoImg}
                    width={0}
                    height={0}
                    sizes={100}
                    alt="Logo"
                    className='md:w-52 md:h-52 w-32 h-32'
                />
                <p id="footer" className='font-pacifico uppercase text-2xl md:text-5xl text-shingle-fawn'>Book <br className='hidden md:inline'></br> owl</p>
            </Background>

            <div className='flex flex-col md:p-20 p-10'>
                <h2 className='uppercase text-2xl font-bold text-shingle-fawn mb-4'>Who is Book Owl?</h2>
                <p className='text-base md:text-lg text-light-brown'>We are a leading international book retailer with a unique offer — over 20 million books and free delivery worldwide (with no minimum spend). We have offices in London, Gloucester, Madrid, Cape Town and Chennai, and we ship thousands of books every day from our fulfilment centres in United Kingdom, and Australia, to more than 120 countries across the world — displaying prices in 37 different local currencies.Our vision is to provide “All Books to All” by improving range, access and affordability of books.</p>

                <h2 className='uppercase text-2xl font-bold text-shingle-fawn mt-10 mb-4'>More information</h2>
                <InfoCards />

                <Newsletter />

            </div>
            
        </HeaderFooterLayout>
    );
};

export default About;
