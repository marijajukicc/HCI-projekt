import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";

const Blog = () => {
    return (
        <HeaderFooterLayout>
            <Background>
                <p className="uppercase text-3xl text-shingle-fawn">Blog</p>
            </Background>
        </HeaderFooterLayout>
    );
};

export default Blog;