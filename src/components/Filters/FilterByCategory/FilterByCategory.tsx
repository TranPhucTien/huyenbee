import classNames from 'classnames/bind';
import { FC } from 'react';
import { categoryOptions } from '~/constants/categoryOptions';
import styles from './FilterByCategory.module.scss';

const cx = classNames.bind(styles);

const FilterByCategory: FC = () => {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('filter-title')}>Category</h3>
            <ul className={cx('list')}>
                {categoryOptions.map((option) => (
                    <li
                        className={cx('item')}
                        key={option.type}
                        // onClick={() => handleClickCategory(option)}
                    >
                        <span>{option.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterByCategory;
