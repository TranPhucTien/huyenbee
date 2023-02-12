import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Detail } from '~/components/Detail';
import { categoryMenu } from '~/constants';
import { Product } from '~/constants/category';
import { DefaultLayout } from '~/layouts/DefaultLayout';

function DetailProduct() {
    const router = useRouter();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        if (router.isReady) {
            console.log('is ready');
            const { productId } = router.query;

            const allProduct = categoryMenu.categories
                .map((category) => category.products)
                .reduce((acc, val) => acc.concat(val), []);
            const foundProduct = allProduct.find((p) => p.id === productId);

            setProduct(foundProduct);
        }
    }, [router.isReady, router.query]);

    return (
        <>
            <Detail product={product} />
        </>
    );
}

DetailProduct.layout = DefaultLayout;

export default DetailProduct;
