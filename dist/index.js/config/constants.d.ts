export declare const ONCOGENIC_MUTATIONS = "Oncogenic Mutations";
export declare const FUSIONS = "Fusions";
export declare const TRUNCATING_MUTATIONS = "Truncating Mutations";
export declare const GAIN_OF_FUNCTION_MUTATIONS = "Gain-of-function Mutations";
export declare const LOSS_OF_FUNCTION_MUTATIONS = "Loss-of-function Mutations";
export declare const SWITCH_OF_FUNCTION_MUTATIONS = "Switch-of-function Mutations";
export declare const CATEGORICAL_ALTERATIONS: string[];
export declare enum ANNOTATION_TYPE {
    MUTATION = "MUTATION",
    COPY_NUMBER_ALTERATION = "COPY_NUMBER_ALTERATION",
    STRUCTURAL_VARIANT = "STRUCTURAL_VARIANT"
}
declare type AnnotationPageSearchQueries = {
    refGenome?: REFERENCE_GENOME;
    tumorType?: string;
};
declare type AnnotationPageHashQueries = {
    tab?: ANNOTATION_PAGE_TAB_KEYS;
};
export declare type GenePageSearchQueries = AnnotationPageSearchQueries & Record<string, never>;
export declare type GenePageHashQueries = AnnotationPageHashQueries & Record<string, never>;
export declare type AlterationPageSearchQueries = AnnotationPageSearchQueries & Record<string, never>;
export declare type AlterationPageHashQueries = AnnotationPageHashQueries & Record<string, never>;
export declare enum ANNOTATION_PAGE_TAB_KEYS {
    BIOLOGICAL = "Biological",
    TX = "Tx",
    DX = "Dx",
    PX = "Px",
    FDA = "FDA"
}
export declare enum Version {
    V1 = "V1",
    V2 = "V2",
    FDA = "FDA",
    FDA_NGS = "FDA_NGS",
    AAC = "AAC",
    DX = "DX",
    PX = "PX"
}
export declare enum REFERENCE_GENOME {
    GRCh37 = "GRCh37",
    GRCh38 = "GRCh38"
}
export declare const DEFAULT_REFERENCE_GENOME = REFERENCE_GENOME.GRCh37;
export declare const HOSTNAME = "https://www.oncokb.org";
export declare enum PAGE_ROUTE {
    GENE_HEADER = "/gene",
    DX = "/diagnostic-levels",
    PX = "/prognostic-levels",
    V2 = "/therapeutic-levels",
    FDA_NGS = "/fda-levels"
}
export declare enum PAGE_TITLE {
    V1 = "OncoKB\u2122 Therapeutic Level of Evidence V1",
    V2 = "OncoKB\u2122 Therapeutic Level of Evidence V2",
    FDA = "Mapping between the OncoKB\u2122 Levels of Evidence and the FDA Levels of Evidence",
    AAC = "Mapping between the OncoKB\u2122 Levels of Evidence and the AMP/ASCO/CAP Consensus Recommendation",
    FDA_NGS = "FDA fact sheet"
}
export declare enum MUTATIONS_TABLE_COLUMN_KEY {
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
export declare enum TREATMENTS_TABLE_COLUMN_KEY {
    BIOMARKER = "BIOMARKER",
    DRUG = "DRUG",
    TREATMENTS_LEVEL = "TREATMENTS_LEVEL",
    ANNOTATION = "ANNOTATION",
    TREATMENT_FDA_LEVEL = "TREATMENT_FDA_LEVEL",
    TREATMENT_DESCRIPTION = "TREATMENT_DESCRIPTION"
}
export declare const TOOLTIP_MAX_HEIGHT = 300;
export declare const LG_TABLE_FIXED_HEIGHT = 640;
export declare const THRESHOLD_TABLE_FIXED_HEIGHT = 15;
export declare const LONG_TEXT_CUTOFF = 200;
export declare enum ONCOGENICITY {
    ONCOGENIC = "Oncogenic",
    LIKELY_ONCOGENIC = "Likely Oncogenic",
    PREDICTED_ONCOGENIC = "Predicted Oncogenic",
    RESISTANCE = "Resistance",
    LIKELY_NEUTRAL = "Likely Neutral",
    NEUTRAL = "Neutral",
    INCONCLUSIVE = "Inconclusive",
    UNKNOWN = "Unknown"
}
export declare enum MUTATION_EFFECT {
    GAIN_OF_FUNCTION = "Gain-of-function",
    LIKELY_GAIN_OF_FUNCTION = "Likely Gain-of-function",
    LOSS_OF_FUNCTION = "Loss-of-function",
    LIKELY_LOSS_OF_FUNCTION = "Likely Loss-of-function",
    SWITCH_OF_FUNCTION = "Switch-of-function",
    LIKELY_SWITCH_OF_FUNCTION = "Likely Switch-of-function",
    NEUTRAL = "Neutral",
    LIKELY_NEUTRAL = "Likely Neutral",
    INCONCLUSIVE = "Inconclusive",
    UNKNOWN = "Unknown"
}
declare type ValueType<T> = T;
declare type ActionMeta = {
    action: string;
    name: string;
};
export declare type HandleColumnsChange = (value: ValueType<ColumnOption>, actionMeta?: ActionMeta<ColumnOption>) => void;
export interface ColumnOption {
    value: TREATMENTS_TABLE_COLUMN_KEY | MUTATIONS_TABLE_COLUMN_KEY;
    label: string | undefined;
}
export declare const treatmentColumns: {
    key: TREATMENTS_TABLE_COLUMN_KEY;
    label: string;
    prop: string;
}[];
export declare const annotationColumns: {
    key: MUTATIONS_TABLE_COLUMN_KEY;
    label: string;
    prop: string;
}[];
export declare const defaultAnnotationColumns: MUTATIONS_TABLE_COLUMN_KEY[];
export declare const defaultTreatmentColumns: TREATMENTS_TABLE_COLUMN_KEY[];
export declare enum NOTIFICATION_TYPE {
    INFO = "primary",
    ERROR = "danger",
    WARNING = "warning",
    SUCCESS = "success"
}
export declare type ProcessedData = {
    level: string;
    gene: string;
    mutation: string;
    oncogenicity: string;
    biologicalEffect: string;
    alterationType: string;
    tumorType: string;
};
export declare type ProcessedTreatmentData = {
    biomarker: string;
    drugNames: string[];
    annotation: string;
    alterationType: string;
    level: string;
};
export declare type AnnotationImplication = {
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
export declare type TreatmentImplication = {
    biomarker: string;
    drug: string;
    level: string;
    annotation: string;
    alterationType: string;
    treatmentFdaLevel: string;
    treatmentDescription: string;
};
export declare type TreatmentImplicationKeys = keyof TreatmentImplication;
export declare type AnnotationImplicationKeys = keyof AnnotationImplication;
export declare type NotificationImplication = {
    message: string;
    type: 'danger' | 'primary' | 'warning' | 'success';
    alterationType: string;
};
export declare type PatientInfo = {
    patientId: string;
    age: string;
    gender: string;
};
export declare type QueryParams = {
    [key: string]: undefined | null | string | string[];
};
export declare type BuildUrlParams = {
    pathname: string;
    query?: QueryParams;
    hash?: string;
};
export declare function getNCBIlink(pathnameOrParams?: BuildUrlParams | string): string;
export declare function getNCTlink(pathnameOrParams?: BuildUrlParams | string): string;
export declare const REF_CAPTURE: RegExp;
export declare enum LEVEL_TYPES {
    TX = "Tx",
    DX = "Dx",
    PX = "Px",
    FDA = "FDA"
}
export declare enum LEVELS {
    Dx1 = "Dx1",
    Dx2 = "Dx2",
    Dx3 = "Dx3",
    Px1 = "Px1",
    Px2 = "Px2",
    Px3 = "Px3",
    Tx1 = "1",
    Tx2 = "2",
    Tx3 = "3",
    Tx3A = "3A",
    Tx3B = "3B",
    Tx4 = "4",
    R1 = "R1",
    R2 = "R2",
    Fda1 = "Fda1",
    Fda2 = "Fda2",
    Fda3 = "Fda3",
    NA = "NA"
}
export declare const LEVEL_PRIORITY: LEVELS[];
export declare type InfoLevel = {
    colorHex: string;
    description: string;
    htmlDescription: string;
    levelOfEvidence: 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3A' | 'LEVEL_3B' | 'LEVEL_4' | 'LEVEL_R1' | 'LEVEL_R2' | 'LEVEL_Px1' | 'LEVEL_Px2' | 'LEVEL_Px3' | 'LEVEL_Dx1' | 'LEVEL_Dx2' | 'LEVEL_Dx3' | 'LEVEL_Fda1' | 'LEVEL_Fda2' | 'LEVEL_Fda3' | 'NO';
};
export declare type Gene = {
    entrezGeneId: number;
    geneAliases: Array<string>;
    genesets: Array<Geneset>;
    grch37Isoform: string;
    grch37RefSeq: string;
    grch38Isoform: string;
    grch38RefSeq: string;
    hugoSymbol: string;
    oncogene: boolean;
    tsg: boolean;
};
export declare type Geneset = {
    genes: Array<Gene>;
    id: number;
    name: string;
    uuid: string;
};
export declare type VariantConsequence = {
    description: string;
    isGenerallyTruncating: boolean;
    term: string;
};
export declare type Alteration = {
    alteration: string;
    consequence: VariantConsequence;
    gene: Gene;
    name: string;
    proteinEnd: number;
    proteinStart: number;
    refResidues: string;
    referenceGenomes: Array<'GRCh37' | 'GRCh38'>;
    variantResidues: string;
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
export interface Drug {
    ncitCode: string;
    drugName: string;
}
export interface Treatment {
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
export interface APIResponse {
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
export {};
//# sourceMappingURL=constants.d.ts.map