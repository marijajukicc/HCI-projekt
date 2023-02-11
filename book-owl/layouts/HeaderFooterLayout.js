import Header from "../components/header";
import Footer from "../components/footer";

const HeaderFooterLayout = ({children, ...rest}) => {
    return(
        <div>
            <Header />
            <main {...rest}>{children}</main>
            <Footer />
        </div>
    );
};

export default HeaderFooterLayout;