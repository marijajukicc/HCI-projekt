import { useRouter } from 'next/router';

import useAuth from '../hooks/useAuth';
import HeaderFooterLayout from "../layouts/HeaderFooterLayout";
import Background from "../layouts/background";

const Self = () => {
    const { removeAuth } = useAuth();
    const router = useRouter();

    return (
        <HeaderFooterLayout>
            <Background>
                <p className="uppercase text-3xl text-center text-shingle-fawn">Self</p>
            </Background>
            <button onClick={() => {
                            removeAuth();
                            router.push('/');
                        }}>Logout</button>
        </HeaderFooterLayout>
    );
};

export default Self;