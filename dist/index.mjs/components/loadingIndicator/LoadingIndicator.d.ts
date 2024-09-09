import * as React from 'react';
export declare enum LoaderSize {
    LARGE = 0,
    SMALL = 1,
    EXTRA_SMALL = 2
}
export interface ILoader {
    isLoading: boolean;
    style?: React.CSSProperties;
    color?: string;
    center?: boolean;
    centerRelativeToContainer?: boolean;
    size?: LoaderSize;
    className?: string;
    children?: React.ReactNode;
}
export default class LoadingIndicator extends React.Component<ILoader, unknown> {
    static defaultProps: {
        center: boolean;
        size: LoaderSize;
    };
    render(): JSX.Element;
}
//# sourceMappingURL=LoadingIndicator.d.ts.map