import classNames from 'classnames/bind';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import styles from './Breadcrumbs.module.scss';

const cx = classNames.bind(styles);

interface Breadcrumb {
    name: string;
    path: string;
}

interface Props {
    name: string;
    id: string;
}

const Breadcrumbs: FC<Props> = ({ name, id }) => {
    const breadcrumbs: Breadcrumb[] = [
        {
            name: 'Trang chủ',
            path: '/',
        },
        {
            name: 'Danh sách sản phẩm',
            path: '/order',
        },
        {
            name,
            path: `/detail/${id}`,
        },
    ];

    return (
        <nav aria-label="breadcrumb">
            <ol className={cx('breadcrumb')}>
                {breadcrumbs.map(({ name, path }, index: number) => (
                    <Fragment key={path}>
                        <li className={cx('item')}>
                            <Link href={path}>{name}</Link>
                        </li>
                        {index !== breadcrumbs.length - 1 ? <span>/</span> : ''}
                    </Fragment>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
