import classNames from 'classnames/bind';
import Link from 'next/link';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Product } from '~/constants/category';
import { hideModal } from '../Header/modeSlice';
import { Image } from '../Image';
import styles from './Modal.module.scss';

const cx = classNames.bind(styles);

interface Props {
    subTitle: string;
    products: Product[] | undefined;
    full?: boolean;
    visible?: boolean;
}

const SearchModalContent: FC<Props> = ({
    subTitle,
    products,
    full,
    visible = true,
}) => {
    const dispatch = useDispatch();

    if (visible === false) {
        return <></>;
    }

    const handleClickLink = () => {
        dispatch(hideModal());
    };

    return (
        <div className={cx('group')}>
            <div className={cx('subtitle')}>{subTitle}</div>
            <ul className={cx('list', { full })}>
                {products?.map((item, index) => (
                    <li className={cx('item')} key={index} tabIndex={0}>
                        <Link
                            href={`/detail/${item.id}`}
                            className={cx('link')}
                            onClick={handleClickLink}
                        >
                            <Image
                                src={item.image[0]}
                                alt={item.name}
                                className={cx('img')}
                            />
                            <div className={cx('content')}>
                                <h4 className={cx('name')}>{item.name}</h4>
                                <span className={cx('desc')}>{item.desc}</span>
                            </div>
                            <span className={cx('price')}>{item.price}đ</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchModalContent;
