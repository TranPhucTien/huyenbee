import classNames from 'classnames/bind';
import Link from 'next/link';
import { FC, Ref, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header: FC = () => {
    return (
        <header className={cx('wrapper', 'header')}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <Link href={'/'} className={cx('logo')}>
                            <img
                                src="/images/logo.png"
                                alt="Logo của huyền bee"
                            />
                            <h1>Huyền Bee</h1>
                        </Link>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('input-container')}>
                            <BiSearch className={cx('search-icon')} />
                            <button>Tìm món ăn hoặc đồ uống</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
