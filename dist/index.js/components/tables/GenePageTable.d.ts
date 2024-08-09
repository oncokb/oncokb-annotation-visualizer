/// <reference types="react" />
import { SearchColumn } from './OncoKBTable';
import { AnnotationImplication, MUTATIONS_TABLE_COLUMN_KEY, TreatmentImplication, TREATMENTS_TABLE_COLUMN_KEY } from '../../config/constants';
import { SortingRule } from 'react-table';
import { ColumnOption } from '../../config/constants';
export declare const GenePageTable: <T extends TreatmentImplication | AnnotationImplication>({ data, columns, isPending, defaultSorted, selectedAnnotationColumns, selectedColumns, name, handleColumnsChange, }: {
    data: T[];
    columns: SearchColumn<T>[];
    isPending: boolean;
    defaultSorted?: SortingRule[] | undefined;
    selectedAnnotationColumns: string[];
    selectedColumns: {
        key: MUTATIONS_TABLE_COLUMN_KEY | TREATMENTS_TABLE_COLUMN_KEY;
        label: string;
        prop: string;
    }[];
    name: string;
    handleColumnsChange: (selectedOptions: ColumnOption[]) => void;
}) => JSX.Element;
//# sourceMappingURL=GenePageTable.d.ts.map