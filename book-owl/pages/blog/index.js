import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import LeadCard from "../../components/blog/leadCard";

import bg from '../../public/background.webp';

const Blog = () => {
    return (
        <HeaderFooterLayout>
            <div 
                style={{
                    background: `url(${bg.src})`,
                    backgroundPosition: "center",
                    height: "60vh",
                }} 
                className="w-full m-0 p-0 bg-cover bg-bottom" 
            >
                <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
                    <p id="blog" className="font-pacifico uppercase text-shingle-fawn text-3xl md:text-5xl">
                            Book owl
                    </p>
                    <p className="text-xl md:text-2xl text-gray-500">Welcome to our blog!</p>
                </div>
		    </div>

            <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
                <LeadCard />
            </div>

        </HeaderFooterLayout>
    );
};

export default Blog;