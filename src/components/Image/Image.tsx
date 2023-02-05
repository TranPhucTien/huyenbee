import { CSSProperties, FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface Props {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    style?: CSSProperties;
}

const Image: FC<Props> = ({ src, alt, ...props }) => {
    return <LazyLoadImage src={src} alt={alt} {...props} effect="blur" />;
};

export default Image;
