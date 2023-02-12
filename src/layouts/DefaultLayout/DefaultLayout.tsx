import { ReactNode } from 'react';
import { Header } from '~/components/Header';
import { Modal } from '~/components/Modal';
import { LayoutProps } from '../PageWithLayoutType';

interface Props {
    children: ReactNode;
}

const DefaultLayout: LayoutProps = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Modal />
        </>
    );
};

export default DefaultLayout;
