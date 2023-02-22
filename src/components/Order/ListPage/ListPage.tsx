import classNames from 'classnames/bind';
import { ProductFilters } from '~/components/ProductFilters';
import { categoryMenu } from '~/constants';
import { ProductList } from '../ProductList';
import styles from './ListPage.module.scss';

const cx = classNames.bind(styles);

const ListPage = () => {
    const allProduct = categoryMenu.categories
        .map((category) => category.products)
        .reduce((acc, val) => acc.concat(val), []);

    return (
        <section className={cx('list-page')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-2', 'm-3', 'c-0')}>
                        <ProductFilters />
                    </div>

                    <div
                        className={cx(
                            'col',
                            'l-10',
                            'm-9',
                            'c-12',
                            'product-list',
                        )}
                    >
                        <ProductList data={allProduct} />
                        {/* {isLoading ? (
                            <SkeletonProductList />
                        ) : listProduct.length > 0 ? (
                            <ProductList data={listProduct} />
                        ) : (
                            <img
                                className={cx('not-found')}
                                src={notFound}
                                alt="not-found"
                            />
                        )} */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListPage;
