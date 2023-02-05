import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '~/app';
import { PageWithLayoutType } from '~/layouts/PageWithLayoutType';
import '../styles/app.scss';

type AppLayoutProps = AppProps & {
    Component: PageWithLayoutType;
    pageProps: any;
};

export default function App({ Component, pageProps }: AppLayoutProps) {
    const Layout =
        Component.layout || ((children: ReactElement) => <>{children}</>);

    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    );
}
