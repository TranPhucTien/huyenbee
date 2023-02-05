import { FC } from 'react';
import classNames from 'classnames/bind';
import styles from './Dialog.module.scss';

const cx = classNames.bind(styles);

const Dialog: FC = () => {
    return <div className={cx('wrapper')}>
        <div className={cx('overlay')}></div>
        <div className={cx('')}></div>
    </div>
};

export default Dialog;
