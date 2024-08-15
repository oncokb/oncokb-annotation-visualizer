import { LEVEL_TYPES, MUTATIONS_TABLE_COLUMN_KEY, ONCOGENICITY, MUTATION_EFFECT, TREATMENTS_TABLE_COLUMN_KEY, ProcessedData, ProcessedTreatmentData, TreatmentImplication, AnnotationImplication } from './../config/constants';
import { REFERENCE_GENOME } from './../config/constants';
import { AlterationPageHashQueries, AlterationPageSearchQueries, GenePageHashQueries, GenePageSearchQueries, Version } from './../config/constants';
import React from 'react';
import './styles/index.module.scss';
import 'jspdf-autotable';
export interface IAlteration {
    alteration: string;
    name: string;
}
export declare function isCategoricalAlteration(alteration: string): (string | boolean);
export declare function getCategoricalAlteration(alteration: string): (string | undefined);
/**
 *
 * @param alteration Alteration, either in string or in IAlteration
 * @param showNameDiff show alteration when name is different. Default: false
 */
export declare function getAlterationName(alteration: IAlteration | string, showNameDiff?: boolean): string;
export declare function encodeSlash(content: string | undefined): (string | undefined);
declare type SortFunction = (a: any, b: any) => number;
export declare const LevelOfEvidencePageLink: React.FunctionComponent<{
    levelType: LEVEL_TYPES;
    version?: Version;
    children?: React.ReactNode;
}>;
export declare const getGenePageLink: (props: {
    hugoSymbol: string;
    searchQueries?: GenePageSearchQueries;
    hashQueries?: GenePageHashQueries;
}) => string;
export declare const GenePageLink: React.FunctionComponent<{
    hugoSymbol: string;
    highlightContent?: boolean;
    searchQueries?: GenePageSearchQueries;
    hashQueries?: GenePageHashQueries;
    onClick?: () => void;
    children?: React.ReactNode;
}>;
export declare const getAlterationPageLink: (props: {
    hugoSymbol: string;
    alteration: IAlteration | string;
    alterationRefGenomes?: REFERENCE_GENOME[];
    cancerType?: string;
    searchQueries?: AlterationPageSearchQueries;
    hashQueries?: AlterationPageHashQueries;
}) => string;
export declare const AlterationPageLink: React.FunctionComponent<{
    hugoSymbol: string;
    alteration: IAlteration | string;
    alterationRefGenomes?: REFERENCE_GENOME[];
    cancerType?: string;
    searchQueries?: AlterationPageSearchQueries;
    hashQueries?: AlterationPageHashQueries;
    showGene?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
}>;
export declare function defaultSortMethod(a: string | ONCOGENICITY | number, b: string | ONCOGENICITY | number): number;
export declare function sortByArrayIndexAsc(aIndex: number, bIndex: number): number;
export declare function sortByArrayIndexDesc(aIndex: number, bIndex: number): number;
export declare function oncogenicitySortMethod(a: ONCOGENICITY, b: ONCOGENICITY): number;
export declare function mutationEffectSortMethod(a: MUTATION_EFFECT, b: MUTATION_EFFECT): number;
export declare function level2LevelOfEvidence(level: string): string;
export declare function OncogenicityToClassnames(oncogenicity: string): string;
export declare function LevelOfEvidenceToClassnames(level: string): string | null;
export declare const FdaLevelIcon: React.FunctionComponent<{
    level: string;
    withDescription?: boolean;
}>;
export declare function filterByKeyword(value: string | undefined | null, keyword: string): boolean;
export declare const OncoKBLevelIcon: React.FunctionComponent<{
    level: string;
    withDescription?: boolean;
}>;
export declare const EvidenceLevelIcon: React.FunctionComponent<{
    level: string;
    withDescription?: boolean;
}>;
export declare function getDefaultColumnDefinition(columnKey: MUTATIONS_TABLE_COLUMN_KEY | TREATMENTS_TABLE_COLUMN_KEY, viewportWidth: number, alterationType: string): {
    id: string;
    Header: React.ReactNode;
    accessor: string;
    minWidth?: number;
    width: number;
    style?: React.CSSProperties;
    defaultSortDesc: boolean;
    Cell?: React.FC<{
        original: AnnotationImplication;
    }> | React.FC<{
        original: TreatmentImplication;
    }>;
    sortMethod?: SortFunction;
    sortable?: boolean;
} | undefined;
export declare function shortenTextByCharacters(text: string, cutoff: number): string;
export declare function compareDates(date1: string | null, date2: string | null): (number);
export declare function compareVersions(version1: string | null, version2: string | null): number;
export declare function loadImageAsBase64(path: string): Promise<string>;
declare type PatientData = {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
};
export declare const generatePDF: (patientData: PatientData[], processedData: ProcessedData[], processedTreatmentData: ProcessedTreatmentData[]) => Promise<void>;
export {};
//# sourceMappingURL=Utils.d.ts.map