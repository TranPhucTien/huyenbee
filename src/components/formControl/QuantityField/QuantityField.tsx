import classNames from 'classnames/bind';
import { FC } from 'react';
import { MdAdd } from 'react-icons/md';
import { FiMinus } from 'react-icons/fi';
import styles from './QuantityField.module.scss';

const cx = classNames.bind(styles);

const QuantityField: FC = () => {
    return (
        <div className={cx('wrapper')}>
            <MdAdd className={cx('button--icon', 'button--icon-l')} />
            <input className={cx('input', 'no-select')} type="number" min="1" />
            <FiMinus className={cx('button--icon', 'button--icon-l')} />
        </div>
    );
};

export default QuantityField;
