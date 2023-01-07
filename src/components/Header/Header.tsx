import classNames from 'classnames/bind';
import { FC, Ref, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header: FC = () => {
    const headerRef: Ref<HTMLDivElement> = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                const scrollTop = window.pageYOffset;
                if (scrollTop > 20) {
                    headerRef.current.classList.add('header-scrolled');
                } else {
                    headerRef.current.classList.remove('header-scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={cx('wrapper', 'header')} ref={headerRef}>
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <div className={cx('left')}>
                        <div className={cx('logo')}>
                            <img
                                src="/images/logo.png"
                                alt="Logo của huyền bee"
                            />
                            <h1>Huyền Bee</h1>
                        </div>
                    </div>
                    <div className={cx('right')}>
                        <div className={cx('input-container')}>
                            <BsSearch className={cx('search-icon')} />
                            <input
                                type="search"
                                autoComplete="false"
                                placeholder="Tìm món ăn hoặc đồ uống"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
