import { ListPage } from '~/components/Order/ListPage';
import { DefaultLayout } from '~/layouts/DefaultLayout';

const Order = () => {
    return (
        <>
            <ListPage />
        </>
    );
};

Order.layout = DefaultLayout;

export default Order;
