import { Banner } from '~/components/Banner';
import { Header } from '~/components/Header';
import Head from '~/components/shared/Head';

export default function Home() {
    return (
        <>
            <Head />

            <Header />
            <Banner />
        </>
    );
}
