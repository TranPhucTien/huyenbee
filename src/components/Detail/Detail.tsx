import { FC } from 'react';
import { Product } from '~/constants/category';
import { Image } from '../Image';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';

const cx = classNames.bind(styles);

interface Props {
    product: Product | undefined;
}

const Detail: FC<Props> = ({ product }) => {
    if (!product) {
        return <></>;
    }

    return (
        <section className={cx('detail')}>
            <div className={cx('container')}>
                <div className={cx('thumbnail')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'c-6')}>
                            <div className={cx('row')}>
                                <div className={cx('col', 'c-12')}>
                                    <Image
                                        className={cx('img-main')}
                                        src={product.image[0]}
                                        alt={product.name}
                                    />
                                </div>
                                <div className={cx('col', 'c-3')}>
                                    <Image
                                        src={product.image[0]}
                                        alt={product.name}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('col', 'c-6')}>
                            <h1 className={cx('name')}>{product.name}</h1>
                            <p className={cx('desc')}>
                                <span className={cx('sub-title')}>Mô tả:</span>
                                {product.desc}
                            </p>
                            <span className={cx('price')}>
                                {product.price}đ
                            </span>
                            <div className={cx('group')}>
                                <div>
                                    <span className={cx('sub-title')}>
                                        Danh mục:
                                    </span>
                                    <strong>Trà sữa</strong>
                                </div>
                                <div>
                                    <span className={cx('sub-title')}>
                                        Phân loại:
                                    </span>
                                    <strong>Đồ uống mát/lạnh</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Detail;
