import Link from 'next/link';
import { FC, FormEvent } from 'react';
import { Product } from '~/constants/category';
import { Image } from '../Image';
import classNames from 'classnames/bind';
import styles from './Product.module.scss';
import { MdAdd } from 'react-icons/md';

const cx = classNames.bind(styles);

interface Props {
    product: Product;
}

const Product: FC<Props> = ({ product }) => {
    const handleClickAddBtn = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('success');
    };

    return (
        <Link href={`/detail/${product.id}`} className={cx('group')}>
            <div className={cx('img-wrapper')}>
                <Image
                    src={product.image[0]}
                    alt={product.name}
                    className={cx('img')}
                />
            </div>

            <div className={cx('content')}>
                <h3 className={cx('name')}>{product.name}</h3>
                <span className={cx('desc')}>{product.desc}</span>
                <div className={cx('footer')}>
                    <span className={cx('price')}>{product.price}đ</span>
                    <MdAdd
                        className={cx('add-icon')}
                        onClick={(e) => handleClickAddBtn(e)}
                    />
                </div>
            </div>
        </Link>
    );
};

export default Product;
