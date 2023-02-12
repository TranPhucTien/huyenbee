import classNames from 'classnames/bind';
import { FC, MutableRefObject, useEffect, useRef, useState } from 'react';
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

const Modal: FC = () => {
    const searchInputRef = useRef() as MutableRefObject<HTMLInputElement>;
    const modalSearchRef = useRef<HTMLElement>(null);

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

    const allProduct = categoryMenu.categories
        .map((category) => category.products)
        .reduce((acc, val) => acc.concat(val), []);

    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState<Product[] | []>([]);

    const debouncedValue = useDebounce({ value: searchValue, delay: 500 });

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const result = allProduct.filter((val) => {
            if (
                removeAccents({ value: val.name.toLowerCase() }).includes(
                    removeAccents({ value: searchValue.toLowerCase() }),
                )
            ) {
                return val;
            }
        });

        setSearchResult(result);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debouncedValue]);

    const modalContent = (searchResult: Product[]) => {
        const inputLength = searchInputRef.current?.value.trim().length;
        if (searchResult.length > 0 && inputLength > 0) {
            return (
                <SearchModalContent
                    subTitle="Kết quả tìm kiếm: "
                    products={searchResult}
                    full
                />
            );
        } else if (searchResult.length === 0 && inputLength > 0) {
            console.log('Khoong tim kiem duowjc gi');
            return (
                <>
                    <SearchModalContent
                        subTitle="Sản phẩm bạn tìm kiếm không tồn tại :("
                        products={searchResult}
                    />
                    <SearchModalContent
                        subTitle="Sản phẩm phổ biến"
                        products={category?.products}
                        full
                    />
                </>
            );
        } else {
            return (
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
            );
        }
    };

    return (
        <section
            className={cx('wrapper', { show: isShowModal })}
            ref={modalSearchRef}
        >
            <div className={cx('card')}>
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
                            enterKeyHint="search"
                            placeholder="Tìm kiếm..."
                            autoFocus={true}
                            onChange={(event) => {
                                setSearchValue(event.target.value);
                            }}
                        />
                    </form>
                    <button
                        onClick={handleCloseModal}
                        className={cx('button--outline', 'btn-esc')}
                    >
                        esc
                    </button>
                    <button
                        onClick={handleCloseModal}
                        className={cx('button--text', 'btn-close')}
                    >
                        <CgClose />
                    </button>
                </header>
                <div className={cx('body')}>{modalContent(searchResult)}</div>
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
