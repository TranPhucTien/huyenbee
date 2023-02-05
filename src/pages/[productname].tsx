import { useRouter } from 'next/router';
import { Detail } from '~/components/Detail';
import { DefaultLayout } from '~/layouts/DefaultLayout';

function DetailProduct() {
    const router = useRouter();
    const {productname} = router.query

    return (
        <>
            <Detail productId={productname} />
        </>
    );
}

DetailProduct.layout = DefaultLayout;

export default DetailProduct;
