import classNames from 'classnames/bind';
import {
    ChangeEvent,
    FC,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from 'react';
import { BiSearch } from 'react-icons/bi';
import { CgClose } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/app/store';
import { categoryMenu } from '~/constants';
import { Product } from '~/constants/category';
import { useDebounce } from '~/hooks';
import { hideModal, showModal } from '../Header/modeSlice';
import styles from './Modal.module.scss';
import SearchModalContent from './SearchModalContent';

const cx = classNames.bind(styles);

const TIME_SEARCH_DELAY = 500;

const Modal: FC = () => {
    const searchInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const modalSearchRef = useRef<HTMLElement>(null);
    const [loading, setLoading] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<Product[] | []>([]);

    const isShowModal = useSelector(
        (state: RootState) => state.mode.isShowModal,
    );
    const currentCategoryId = useSelector(
        (state: RootState) => state.category.value,
    );
    const category = categoryMenu.categories.find(
        (item) => item.id === currentCategoryId,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        const handleKeydown = (e: KeyboardEvent) => {
            if (e.keyCode === 27) {
                handleCloseModal();
            } else if (e.ctrlKey && e.keyCode === 75) {
                e.preventDefault();
                dispatch(showModal());
            }
        };

        const handleClose = (event: Event) => {
            if (event.target == modalSearchRef.current) {
                handleCloseModal();
            }
        };

        window.addEventListener('keydown', handleKeydown);
        window.addEventListener('click', handleClose);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
            window.removeEventListener('click', handleClose);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (isShowModal) {
            const timer = setTimeout(() => {
                searchInputRef.current?.focus();
            }, 30);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isShowModal]);

    const handleCloseModal = () => {
        dispatch(hideModal());
        setSearchValue('');
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const allProduct = categoryMenu.categories
        .map((category) => category.products)
        .reduce((acc, val) => acc.concat(val), []);

    const debouncedValue = useDebounce({
        value: searchValue,
        delay: TIME_SEARCH_DELAY,
    });

    useEffect(() => {
        setLoading(true);
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const result = allProduct.filter((val) => {
            if (
                removeAccents({
                    value: val.name.toLowerCase().trim(),
                }).includes(
                    removeAccents({ value: searchValue.toLowerCase().trim() }),
                )
            ) {
                return val;
            }
        });

        setLoading(false);
        setSearchResult(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    return (
        <section
            className={cx('wrapper', { show: isShowModal })}
            ref={modalSearchRef}
        >
            <div className={cx('card')}>
                <input style={{ visibility: 'hidden', position: 'absolute' }} />
                <header className={cx('header')}>
                    <form>
                        <label htmlFor="search">
                            <BiSearch className={cx('search-icon')} />
                        </label>
                        <input
                            ref={searchInputRef}
                            id="search"
                            className={cx('search')}
                            type="search"
                            autoComplete="off"
                            autoCorrect="off"
                            spellCheck={false}
                            enterKeyHint="search"
                            placeholder="Tìm kiếm..."
                            autoFocus={true}
                            value={searchValue}
                            onChange={handleChange}
                        />
                    </form>
                    <button
                        onClick={handleCloseModal}
                        className={cx('button', 'button--outline', 'btn-esc')}
                        tabIndex={2}
                    >
                        esc
                    </button>
                    <button
                        onClick={handleCloseModal}
                        className={cx('button', 'button--text', 'btn-close')}
                        tabIndex={2}
                    >
                        <CgClose />
                    </button>
                </header>
                <div className={cx('body')}>
                    {!!searchValue && searchResult.length > 0 ? (
                        <SearchModalContent
                            subTitle="Kết quả tìm kiếm: "
                            products={searchResult}
                            full
                            visible={!!searchValue && searchResult.length > 0}
                        />
                    ) : !!searchValue && searchResult.length === 0 ? (
                        <>
                            <SearchModalContent
                                subTitle="Rất tiếc, không có sản phẩm bạn tìm kiếm!"
                                products={searchResult}
                                visible={!loading}
                            />
                            <SearchModalContent
                                subTitle="Sản phẩm phổ biến:"
                                products={category?.products}
                                full
                            />
                        </>
                    ) : (
                        <>
                            <SearchModalContent
                                subTitle="Sản phẩm đã tìm kiếm:"
                                products={category?.products}
                            />
                            <SearchModalContent
                                subTitle="Sản phẩm phổ biến:"
                                products={category?.products}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

interface RemoveAccentsProps {
    value: string;
}

function removeAccents({ value }: RemoveAccentsProps) {
    return value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/đ/g, 'd')
        .replace(/Đ/g, 'D');
}

export default Modal;
