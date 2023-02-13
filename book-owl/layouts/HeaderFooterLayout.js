import Header from "../components/header";
import Footer from "../components/footer";
import PageHead from "../components/pageHead";

const HeaderFooterLayout = ({title, children, ...rest}) => {
    return(
        <div className="z-30">
            <PageHead title={title} />
            <Header />
            <main {...rest}>{children}</main>
            <Footer />
        </div>
    );
};

export default HeaderFooterLayout;