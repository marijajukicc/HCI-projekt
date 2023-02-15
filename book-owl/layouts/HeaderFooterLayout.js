import Header from "../components/header";
import Footer from "../components/footer";
import PageHead from "../components/pageHead";

const HeaderFooterLayout = ({title, description, children, ...rest}) => {
    return(
        <div className="z-30">
            <PageHead title={title} description={description}/>
            <Header />
            <main {...rest}>{children}</main>
            <Footer />
        </div>
    );
};

export default HeaderFooterLayout;