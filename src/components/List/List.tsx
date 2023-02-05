import classNames from 'classnames/bind';
import Link from 'next/link';
import { FC, FormEvent } from 'react';
import { MdAdd } from 'react-icons/md';
import { useAppSelector } from '~/app';
import { categoryMenu } from '~/constants';
import { Image } from '../Image';
import styles from './List.module.scss';

const cx = classNames.bind(styles);

const List: FC = () => {
    const categoryCurrentId = useAppSelector(
        (state: any) => state.category.value,
    );

    const category = categoryMenu.categories.find(
        (item) => item.id === categoryCurrentId,
    );

    const handleClickAddBtn = (e: FormEvent<EventTarget>) => {
        e.preventDefault();
        e.stopPropagation();

        console.log('success');
    };

    return (
        <section className={cx('wrapper', 'list')}>
            <div className={cx('container')}>
                <span className={cx('global-title', 'title')}>
                    {category?.name}
                </span>
                <ul className={cx('row', 'list')}>
                    {category?.products?.map((item, index) => (
                        <li className={cx('col', 'l-3', 'm-4', 'c-6', 'item')} key={index}>
                            <Link href={`/${encodeURIComponent(item.id)}`} className={cx('group')}>
                                <div className={cx('img-wrapper')}>
                                    <Image
                                        src={item.image[0]}
                                        alt={item.name}
                                        className={cx('img')}
                                    />
                                </div>

                                <div className={cx('content')}>
                                    <h3 className={cx('name')}>{item.name}</h3>
                                    <span className={cx('desc')}>
                                        {item.desc}
                                    </span>
                                    <div className={cx('footer')}>
                                        <span className={cx('price')}>
                                            {item.price}.000đ
                                        </span>
                                        <MdAdd
                                            className={cx('add-icon')}
                                            onClick={(e) =>
                                                handleClickAddBtn(e)
                                            }
                                        />
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default List;
