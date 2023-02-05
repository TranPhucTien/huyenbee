import { NextPage } from 'next';
import { ReactElement } from 'react';
import { DefaultLayout } from './DefaultLayout';

export type PageWithDefaultLayoutType = NextPage & {
    layout: typeof DefaultLayout;
};

export type PageWithLayoutType = PageWithDefaultLayoutType;

export type LayoutProps = ({
    children,
}: {
    children: ReactElement;
}) => ReactElement;

export default PageWithDefaultLayoutType;
