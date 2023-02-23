import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './ProductList.module.scss';
import { Product as ProductItem } from '~/components/Product';
import { Product } from '~/constants/category';

const cx = classNames.bind(styles);

interface Props {
    data: Product[];
}

const ProductList: FC<Props> = ({ data }) => {
    return (
        <div className={cx('row')}>
            {data.map((product, key) => (
                <div className={cx('col', 'l-3', 'm-4', 'c-12')} key={key}>
                    <ProductItem product={product} />
                </div>
            ))}
        </div>
    );
};

export default ProductList;
