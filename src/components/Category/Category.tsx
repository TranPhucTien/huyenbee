import classNames from 'classnames/bind';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { categoryMenu } from '~/constants';
import { changeCategory } from '~/features/category/categorySlice';
import styles from './Category.module.scss';

const cx = classNames.bind(styles);

const Category: FC = () => {
    const dispatch = useDispatch();

    const handleClickCategory = (name: string) => {
        dispatch(changeCategory(name));
    };

    return (
        <section className={cx('wrapper', 'category')}>
            <div className={cx('container')}>
                <span className={cx('global-title', 'title')}>
                    Bộ sưu tập món ăn
                </span>
                <ul className={cx('row', 'list')}>
                    {categoryMenu.categories.map((category) => (
                        <li
                            className={cx('col', 'l-3', 'm-4', 'c-6', 'item')}
                            key={category.id}
                            onClick={() => handleClickCategory(category.id)}
                        >
                            <div className={cx('group')}>
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className={cx('img')}
                                />
                                <h2 className={cx('name')}>{category.name}</h2>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Category;
