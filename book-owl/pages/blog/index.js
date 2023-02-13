import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import LeadCard from "../../components/blog/leadCard";
import PostThird from "../../components/blog/postThird";
import PostHalf from "../../components/blog/postHalf";
import PostTwo from "../../components/blog/postTwo";
import { getBlogs } from "../api/ContentfulAPI";

import bg from '../../public/background.webp';
import { useState } from "react";

const Blog = (props) => {
    const { fields } = props;
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsClicked(!isClicked);
    };

    return (
        <HeaderFooterLayout title="BookOwl / Blog">
            <div 
                style={{
                    background: `url(${bg.src})`,
                    backgroundPosition: "center",
                    height: "42vh",
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

            <div className="container px-8 max-w-6xl mx-auto -mt-32 2xl:-mt-20">
                <LeadCard key={fields[0].id} {...fields[0]}/>
                <div className="flex flex-wrap justify-between pt-12 -mx-6">
                    <PostThird key={fields[1].id} {...fields[1]} />
                    <PostThird key={fields[2].id} {...fields[2]} />
                    <PostThird key={fields[3].id} {...fields[3]} />
                    <PostHalf key={fields[4].id} {...fields[4]} />
                    <PostHalf key={fields[5].id} {...fields[5]} />
                    <PostTwo key={fields[6].id} {...fields[6]}/>
                    <PostThird key={fields[7].id} {...fields[7]} />
                
                    {isClicked &&
                        <>
                            <PostThird key={fields[8].id} {...fields[8]} />
                            <PostThird key={fields[9].id} {...fields[9]} />
                            <PostThird key={fields[10].id} {...fields[10]} />
                            <PostHalf key={fields[11].id} {...fields[11]} />
                            <PostHalf key={fields[12].id} {...fields[12]} />
                            <PostTwo key={fields[13].id} {...fields[13]}/>
                            <PostThird key={fields[14].id} {...fields[14]} />

                            <PostThird key={fields[15].id} {...fields[15]} />
                            <PostThird key={fields[16].id} {...fields[16]} />
                            <PostThird key={fields[17].id} {...fields[17]} />
                            <PostHalf key={fields[18].id} {...fields[18]} />
                            <PostHalf key={fields[19].id} {...fields[19]} />
                            <PostTwo key={fields[20].id} {...fields[20]}/>  
                            <PostThird key={fields[21].id} {...fields[21]}/>  
                        </>
                    }
                    <button onClick={handleClick} className="mx-auto mb-5 text-xl bg-swamp-green/[.7] rounded-full px-5 py-2 hover:bg-swamp-green text-shingle-fawn-dark">
                        {!isClicked && <p>More posts</p>}
                        {isClicked && <p>Show less</p>}
                    </button>
                </div>
            </div>
                

        </HeaderFooterLayout>
    );
};

export async function getStaticProps() {
    const entries = await getBlogs();
    let data = entries.filter(() => function() {
    return item.sys.contentType.sys.id === 'blogs'})
    const fields = data.map((item) => item.fields );
    return {
        props: {
            fields: fields,
        }
    }

}

export default Blog;