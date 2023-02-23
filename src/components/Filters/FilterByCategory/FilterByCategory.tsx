import classNames from 'classnames/bind';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { categoryOptions } from '~/constants/categoryOptions';
import styles from './FilterByCategory.module.scss';

const cx = classNames.bind(styles);

interface Props {
    onChange?: (type: string) => void;
}

const FilterByCategory: FC<Props> = ({ onChange }) => {
    const router = useRouter();
    const [type, setType] = useState('');

    useEffect(() => {
        const { category } = router.query;

        if (category) {
            setType(category.toString());
        }
    }, [router.query]);

    const handleClickCategory = (type: string) => {
        setType(type);
        console.log(type);
        if (onChange) {
            onChange(type);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('filter-title')}>Category</h3>
            <ul className={cx('list')}>
                {categoryOptions.map((option) => (
                    <li
                        className={cx('item', { active: option.type === type })}
                        key={option.type}
                        onClick={() => handleClickCategory(option.type)}
                    >
                        <span>{option.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilterByCategory;
