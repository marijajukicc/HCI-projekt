import Header from "../components/header";
import Footer from "../components/footer";

const HeaderFooterLayout = ({children, ...rest}) => {
    return(
        <>
            <Header />
            <main {...rest}>{children}</main>
            <Footer />
        </>
    );
};

export default HeaderFooterLayout;