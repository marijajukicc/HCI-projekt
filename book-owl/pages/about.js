import Image from 'next/image';

import HeaderFooterLayout from '../layouts/HeaderFooterLayout';
import Background from '../layouts/background';
import LogoImg from '../public/big-logo.png';


const About = () => {
    return (
        <HeaderFooterLayout title="Book-Owl / About ">
            <Background>
                <Image
                    src={LogoImg}
                    width={200}
                    height={200}
                    alt="Logo"
                />
                <p id="footer" className='font-pacifico uppercase text-5xl text-shingle-fawn'>Book <br></br> owl</p>
            </Background>

            <div className='flex flex-col mx-20 my-32'>
                <h2 className='uppercase text-2xl text-shingle-fawn mb-4'>Who is Book Owl?</h2>
                <p className='text-light-brown'>We are a leading international book retailer with a unique offer — over 20 million books and free delivery worldwide (with no minimum spend). We have offices in London, Gloucester, Madrid, Cape Town and Chennai, and we ship thousands of books every day from our fulfilment centres in United Kingdom, and Australia, to more than 120 countries across the world — displaying prices in 37 different local currencies.Our vision is to provide “All Books to All” by improving range, access and affordability of books.</p>
                <h2 className='uppercase text-2xl text-shingle-fawn mt-10'>More information</h2>
                <p className='text-light-brown'>For more information about Book Owl, and to contact us click <a href='/contact' className='underline hover:text-shingle-fawn cursor-pointer'>here</a>. Don’t forget to follow us on social media :)</p>
            </div>
            
        </HeaderFooterLayout>
    );
};

export default About;
