import classNames from 'classnames/bind';
import { FC } from 'react';
import { MdPlace } from 'react-icons/md';
import { IMAGE_BANNER_URL } from '~/configs';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

const Banner: FC = () => {
    return (
        <section className={cx('wrapper', 'banner')}>
            <div className={cx('images')}>
                <img
                    src={`${IMAGE_BANNER_URL}/banner1.jpg`}
                    alt="Đây là hình ảnh 1 bàn ăn của quán Huyền Bee, những rất tiếc bạn không thể nhìn thất!"
                    className={cx('img')}
                />
                <img
                    src={`${IMAGE_BANNER_URL}/banner2.jpg`}
                    alt="Đây là hình ảnh 1 bàn ăn của quán Huyền Bee, những rất tiếc bạn không thể nhìn thất!"
                    className={cx('img')}
                />
            </div>
            <div className={cx('container')}>
                <div className={cx('address')}>
                    <span className={cx('title')}>Địa chỉ của Huyền Bee</span>
                    <div className={cx('group')}>
                        <div className={cx('text')}>
                            <MdPlace className={cx('icon')} />
                            <h2>
                                Cơ sở 1: Chợ Hồng Thuận, Giao Thủy, Nam Định{' '}
                            </h2>
                        </div>
                    </div>
                    <div className={cx('group')}>
                        <div className={cx('text')}>
                            <MdPlace className={cx('icon')} />
                            <h2>
                                Cơ sở 2: Cầu đông lạnh, Thọ Nghiệp, Xuân Trường,
                                Nam Định{' '}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
