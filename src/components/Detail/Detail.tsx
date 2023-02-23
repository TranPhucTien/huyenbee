import { FC } from 'react';
import { Product } from '~/constants/category';
import { Image } from '../Image';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { Breadcrumbs } from '../Breadcrumbs';
import { Radio } from '../Radio';
import { QuantityField } from '../formControl/QuantityField';
import { AiOutlineHeart } from 'react-icons/ai';

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
                <Breadcrumbs name={product.name} id={product.id} />

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
                            {product.image.map((item, index) => (
                                <div key={index} className={cx('col', 'c-3')}>
                                    <Image
                                        className={cx('img-choice', 'active')}
                                        src={item}
                                        alt={product.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('col', 'c-6')}>
                        <h1 className={cx('name')}>{product.name}</h1>
                        <p className={cx('desc')}>
                            <span className={cx('sub-title')}>Mô tả:</span>
                            {product.desc}
                        </p>
                        <span className={cx('price')}>{product.price}đ</span>
                        <div className={cx('flex-center')}>
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
                        <form>
                            <div
                                className={cx(
                                    'global-title',
                                    'global-title-s',
                                    'title',
                                )}
                            >
                                Lựa chọn:
                            </div>
                            <Radio label="Size M" value="size-m" checked />
                            <Radio
                                label="Size L"
                                value="size-l"
                                checked={false}
                            />
                            <div className={cx('outline')}>
                                <QuantityField />
                                <button
                                    className={cx(
                                        'button',
                                        'button--outline',
                                        'custom',
                                    )}
                                >
                                    Thêm vào giỏ hàng
                                </button>
                                <AiOutlineHeart
                                    className={cx(
                                        'button--icon',
                                        'button--icon-l',
                                    )}
                                />
                            </div>
                        </form>
                    </div>
                </div>

                <div className={cx('more')}>
                    <h5 className={cx('global-title')}>Sản phẩm liên quan</h5>
                </div>
            </div>
        </section>
    );
};

export default Detail;
