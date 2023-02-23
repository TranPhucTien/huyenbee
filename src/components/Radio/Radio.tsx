import classNames from 'classnames/bind';
import { FC } from 'react';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

interface Props {
    value: string;
    label: string;
    checked: boolean;
}

const Radio: FC<Props> = ({ value, label, checked }) => {
    return (
        <label className={cx('radio')}>
            <input
                className={cx('radio-input')}
                type="radio"
                value={value}
                checked={checked}
            />
            <span className={cx('checkmark')}></span>
            {label}
        </label>
    );
};

export default Radio;
