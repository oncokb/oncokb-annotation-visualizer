import * as React from 'react';
import { SearchColumn } from './components/tables/OncoKBTable';
import { AnnotationImplication, TreatmentImplication, NotificationImplication, APIResponse, ColumnOption } from './config/constants';
import './components/styles/index.module.scss';
import { ANNOTATION_TYPE, PatientInfo } from './config/constants';
interface Data {
    mutationData: APIResponse[];
    cnaData: APIResponse[];
    structuralVariant: APIResponse[];
}
export interface AnnotationVisualisationProps {
    data: Data;
    patientInfo: PatientInfo;
    isPatientInfoVisible?: boolean;
    notifications: NotificationImplication[];
}
interface MetaData {
    lastUpdate: string;
    dataVersion: string;
}
export interface AnnotationVisualisationState {
    selectedAnnotationColumns: string[];
    selectedTreatmentColumns: string[];
    viewportWidth: number;
}
export declare class AnnotationVisualisation extends React.Component<AnnotationVisualisationProps, AnnotationVisualisationState> {
    get mutationsAnnotations(): AnnotationImplication[];
    get copyNumberAnnotations(): AnnotationImplication[];
    get structuralAnnotations(): AnnotationImplication[];
    get allAnnotations(): AnnotationImplication[];
    get mutationsTreatments(): TreatmentImplication[];
    get copyNumberTreatments(): TreatmentImplication[];
    get structuralTreatments(): TreatmentImplication[];
    get allTreatments(): TreatmentImplication[];
    get lastUpdateAndVersion(): MetaData;
    constructor(props: AnnotationVisualisationProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleResize(): void;
    handleAnnotationColumnsChange: (selectedOptions: ColumnOption[]) => void;
    handleTreatmentColumnsChange: (selectedOptions: ColumnOption[]) => void;
    treatmentTableColumns(alterationType: string): SearchColumn<TreatmentImplication>[];
    annotationTableColumns(alterationType: string): SearchColumn<AnnotationImplication>[];
    getTreatments(annotationType: ANNOTATION_TYPE, data: APIResponse[]): TreatmentImplication[];
    getAnnotations(annotationType: ANNOTATION_TYPE, data: APIResponse[]): AnnotationImplication[];
    getAPIResponsesList(): APIResponse[];
    render(): React.JSX.Element;
}
export {};
//# sourceMappingURL=AnnotationVisualisation.d.ts.map