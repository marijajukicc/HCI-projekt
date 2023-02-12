import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { BsPen } from 'react-icons/bs';

import HeaderFooterLayout from "../../layouts/HeaderFooterLayout";
import { getBlogs } from "../api/ContentfulAPI";
import BackArrow from "../../public/back-arrow.png";
import PostThird from "../../components/blog/postThird";

const Post = (props) => {
    const {fields} = props;
    const router = useRouter();
    const postID = router.query.id;

    const Text = ({ children }) => <p className="py-3 indent-5">{children}</p>;
    const ListOl = ({ children }) => <ol className="list-decimal py-6">{children}</ol>;
    const ListUl = ({ children }) => <ul className="list-disc py-6">{children}</ul>;
    const Bold = ({ children }) => <span className="bold">{children}</span>;

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
          },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
            [BLOCKS.OL_LIST]: (node, children) => <ListOl>{children}</ListOl>,
            [BLOCKS.UL_LIST]: (node, children) => <ListUl>{children}</ListUl>,
        },
    };
    return (
        <HeaderFooterLayout title="BookOwl / Blog">
            
            {fields?.map((item, index) => {
                if(item.id == postID) {
                    if(index < 16) {
                        var nextI = fields[index + 1];
                        var nextII = fields[index + 2];
                        var nextIII = fields[index + 3];
                    } else {
                        var nextI = fields[index - 1];
                        var nextII = fields[index - 2];
                        var nextIII = fields[index - 3];
                    }
                    
                    return (
                        <>
                            <div className="text-center pt-10 md:pt-16">
                                <Link href="/blog" passHref>
                                    <Image
                                        src={BackArrow}
                                        width={35}
                                        height={35}
                                        alt="Back-arrow"
                                        className="hover:scale-110 ml-16"
                                    />
                                </Link>
                                <p className="text-sm md:text-base text-light-brown font-bold mb-2">{item.publishDate} </p>
                                <h1 className="font-bold break-normal text-3xl text-shingle-fawn-dark md:text-5xl">{item.title}</h1>
                            </div>

                            <div className="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
                                style={{
                                    background: `url(${'https:' + item.image.fields.file.url})`,
                                    backgroundSize:"cover",
                                    height: "70vh",
                                    }}
                            >
                            </div>

                            <div className="container max-w-5xl mx-auto -mt-32">
		                        <div className="mx-0 sm:mx-6">
                                    <div className="bg-gray w-full p-8 md:p-20 text-xl md:text-2xl text-shingle-fawn leading-normal">
                                        <p className="flex items-center text-sm md:text-lg underline"><BsPen />{item.author}</p>
                                        <div className="text-lg md:text-2xl mb-5">
                                            {documentToReactComponents(item.body, options)}
                                        </div>
                                    </div>
                                </div>
                            </div> 

                        <div className="bg-swamp-green/[.3] mt-10">
                            <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                                <div className="flex flex-wrap justify-between">
                                    <PostThird key={nextI.id} {...nextI}/>  
                                    <PostThird key={nextII.id} {...nextII}/>  
                                    <PostThird key={nextIII.id} {...nextIII}/>  
                                </div>  
                            </div> 
                        </div> 
                        
                        </>
                        )
                    }
                }
                )}

            
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

export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        '/blog/1',
      ],
      fallback: true,
    }
}

export default Post;