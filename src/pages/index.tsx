import { Banner } from '~/components/Banner';
import { Category } from '~/components/Category';
import { List } from '~/components/List';
import Head from '~/components/shared/Head';
import { DefaultLayout } from '~/layouts/DefaultLayout';

function Home() {
    return (
        <>
            <Head />

            <Banner />
            <Category />
            <List />
        </>
    );
}

Home.layout = DefaultLayout;

export default Home;
