import { ReactNode } from 'react';
import { Header } from '~/components/Header';
import { LayoutProps } from '../PageWithLayoutType';

interface Props {
    children: ReactNode;
}

const DefaultLayout: LayoutProps = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
        </>
    );
};

export default DefaultLayout;
