import { useState, useEffect } from 'react';

interface Props {
    value: string;
    delay: number;
}

const useDebounce = ({ value, delay }: Props) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
};

export default useDebounce;
