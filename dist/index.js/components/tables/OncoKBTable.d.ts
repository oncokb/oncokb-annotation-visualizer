import React from 'react';
import { Column, TableProps } from 'react-table';
import { ColumnOption, MUTATIONS_TABLE_COLUMN_KEY, TREATMENTS_TABLE_COLUMN_KEY } from './../../config/constants';
import './OncoKBTable.scss';
export declare type SearchColumn<T> = Column<T> & {
    onFilter?: (data: T, keyword: string) => boolean;
};
interface ITableWithSearchBox<T> extends Partial<TableProps<T>> {
    data: T[];
    disableSearch?: boolean;
    fixedHeight?: boolean;
    showPagination?: boolean;
    pageSize?: number;
    minRows?: number;
    columns: SearchColumn<T>[];
    loading?: boolean;
    filters?: React.FunctionComponent;
    className?: string;
    tableName: string;
    selectedColumnsState: string[];
    selectedColumns: {
        key: MUTATIONS_TABLE_COLUMN_KEY | TREATMENTS_TABLE_COLUMN_KEY;
        label: string;
        prop: string;
    }[];
    handleColumnsChange: (selectedOptions: ColumnOption[]) => void;
}
export default class OncoKBTable<T> extends React.Component<ITableWithSearchBox<T>, {
    searchKeyword: string;
}> {
    constructor(props: ITableWithSearchBox<T>);
    static defaultProps: {
        disableSearch: boolean;
        showPagination: boolean;
        searchIconClassName: string;
    };
    get filteredData(): T[];
    componentDidUpdate(): void;
    componentDidMount(): void;
    toggleOverflowClass(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=OncoKBTable.d.ts.map