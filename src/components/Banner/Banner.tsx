import classNames from 'classnames/bind';
import { FC } from 'react';
import { MdPlace } from 'react-icons/md';
import styles from './Banner.module.scss';

const cx = classNames.bind(styles);

const Banner: FC = () => {
    return (
        <section className={cx('wrapper', 'banner')}>
            <div className={cx('images')}>
                <img
                    src="images/banner1.jpg"
                    alt="Đây là hình ảnh 1 bàn ăn của quán Huyền Bee, những rất tiếc bạn không thể nhìn thất!"
                />
                <img
                    src="images/banner2.jpg"
                    alt="Đây là hình ảnh 1 bàn ăn của quán Huyền Bee, những rất tiếc bạn không thể nhìn thất!"
                />
            </div>
            <div className={cx('container')}>
                <div className={cx('address')}>
                    <h2>Các cơ sở của Huyền Bee</h2>
                    <div className={cx('group')}>
                        <h3>
                            <MdPlace className={cx('icon')} />
                            <span>
                                Cơ sở 1: Chợ Hồng Thuận, Giao Thủy, Nam Định{' '}
                            </span>
                        </h3>
                    </div>
                    <div className={cx('group')}>
                        <h3>
                            <MdPlace className={cx('icon')} />
                            <span>
                                Cơ sở 1: Cầu đông lạnh, Thọ Nghiệp, Xuân Trường,
                                Nam Định{' '}
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
