import * as React from 'react';
import { Column } from 'react-table';

declare enum ANNOTATION_TYPE {
    MUTATION = "MUTATION",
    COPY_NUMBER_ALTERATION = "COPY_NUMBER_ALTERATION",
    STRUCTURAL_VARIANT = "STRUCTURAL_VARIANT"
}
declare enum MUTATIONS_TABLE_COLUMN_KEY {
    GENE = "GENE",
    MUTATION = "MUTATION",
    CONSEQUENCE_TYPE = "CONSEQUENCE_TYPE",
    LOCATION = "LOCATION",
    ONCOGENICITY = "ONCOGENICITY",
    BIOLOGICAL_EFFECT = "BIOLOGICAL_EFFECT",
    LEVEL = "LEVEL",
    MUTATION_DESCRIPTION = "MUTATION_DESCRIPTION",
    TUMOR_TYPE = "TUMOR_TYPE",
    FDA_LEVEL = "FDA_LEVEL"
}
declare enum TREATMENTS_TABLE_COLUMN_KEY {
    BIOMARKER = "BIOMARKER",
    DRUG = "DRUG",
    TREATMENTS_LEVEL = "TREATMENTS_LEVEL",
    ANNOTATION = "ANNOTATION",
    TREATMENT_FDA_LEVEL = "TREATMENT_FDA_LEVEL",
    TREATMENT_DESCRIPTION = "TREATMENT_DESCRIPTION"
}
interface ColumnOption {
    value: TREATMENTS_TABLE_COLUMN_KEY | MUTATIONS_TABLE_COLUMN_KEY;
    label: string | undefined;
}
declare type AnnotationImplication = {
    level: string;
    gene: string;
    mutation: string;
    consequenceType: string;
    location: string;
    oncogenicity: string;
    biologicalEffect: string;
    alterationType: string;
    mutationDescription: string;
    tumorType: string;
    fdaLevel: string;
    lastUpdate: string;
    dataVersion: string;
};
declare type TreatmentImplication = {
    biomarker: string;
    drug: string;
    level: string;
    annotation: string;
    alterationType: string;
    treatmentFdaLevel: string;
    treatmentDescription: string;
};
declare type NotificationImplication = {
    message: string;
    type: 'danger' | 'primary' | 'warning' | 'success';
    alterationType: string;
};
declare type PatientInfo = {
    patientId: string;
    age: string;
    gender: string;
};
interface MutationEffect {
    knownEffect: string;
    description: string;
    citations: {
        pmids: string[];
        abstracts: {
            link: string;
            abstract: string;
        }[];
    };
}
interface Drug {
    ncitCode: string;
    drugName: string;
}
interface Treatment {
    alterations: string[];
    drugs: Drug[];
    approvedIndications: unknown[];
    level: string;
    fdaLevel: string;
    levelAssociatedCancerType: {
        id: number;
        code: string;
        color: string;
        name: string;
        mainType: {
            id: number | null;
            name: string;
            tumorForm: string;
        };
        tissue: string;
        children: unknown;
        parent: unknown;
        level: number;
        tumorForm: string;
    };
    levelExcludedCancerTypes: unknown[];
    pmids: string[];
    abstracts: unknown[];
    description: string;
}
interface APIResponse {
    query: {
        id: string | null;
        referenceGenome: string;
        hugoSymbol: string;
        entrezGeneId: number;
        alteration: string;
        alterationType: string;
        svType: string | null;
        tumorType: string;
        consequence: string | null;
        proteinStart: string | null;
        proteinEnd: string | null;
        hgvs: string | null;
    };
    geneExist: boolean;
    variantExist: boolean;
    alleleExist: boolean;
    oncogenic: string;
    mutationEffect: MutationEffect;
    highestSensitiveLevel: string;
    highestResistanceLevel: string | null;
    highestDiagnosticImplicationLevel: string | null;
    highestPrognosticImplicationLevel: string | null;
    highestFdaLevel: string;
    otherSignificantSensitiveLevels: unknown[];
    otherSignificantResistanceLevels: unknown[];
    hotspot: boolean;
    geneSummary: string;
    variantSummary: string;
    tumorTypeSummary: string;
    prognosticSummary: string;
    diagnosticSummary: string;
    diagnosticImplications: unknown[];
    prognosticImplications: unknown[];
    treatments: Treatment[];
    dataVersion: string;
    lastUpdate: string;
    vus: boolean;
}

declare type SearchColumn<T> = Column<T> & {
    onFilter?: (data: T, keyword: string) => boolean;
};

interface Data {
    mutationData: APIResponse[];
    cnaData: APIResponse[];
    structuralVariant: APIResponse[];
}
interface AnnotationVisualisationProps {
    data: Data;
    patientInfo: PatientInfo;
    isPatientInfoVisible?: boolean;
    notifications: NotificationImplication[];
}
interface MetaData {
    lastUpdate: string;
    dataVersion: string;
}
interface AnnotationVisualisationState {
    selectedAnnotationColumns: string[];
    selectedTreatmentColumns: string[];
    viewportWidth: number;
}
declare class AnnotationVisualisation extends React.Component<AnnotationVisualisationProps, AnnotationVisualisationState> {
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

export { AnnotationVisualisation as default };
