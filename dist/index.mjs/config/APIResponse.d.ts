import { AnnotationImplication, NotificationImplication, TreatmentImplication } from './constants';
export declare const patientId = "P-0000435";
export declare const patientInfo: {
    patientId: string;
    age: string;
    gender: string;
};
export declare const responses: ({
    query: {
        id: null;
        referenceGenome: string;
        hugoSymbol: string;
        entrezGeneId: number;
        alteration: string;
        alterationType: string;
        svType: null;
        tumorType: string;
        consequence: null;
        proteinStart: null;
        proteinEnd: null;
        hgvs: null;
    };
    geneExist: boolean;
    variantExist: boolean;
    alleleExist: boolean;
    oncogenic: string;
    mutationEffect: {
        knownEffect: string;
        description: string;
        citations: {
            pmids: string[];
            abstracts: never[];
        };
    };
    highestSensitiveLevel: string;
    highestResistanceLevel: null;
    highestDiagnosticImplicationLevel: null;
    highestPrognosticImplicationLevel: null;
    highestFdaLevel: string;
    otherSignificantSensitiveLevels: never[];
    otherSignificantResistanceLevels: never[];
    hotspot: boolean;
    geneSummary: string;
    variantSummary: string;
    tumorTypeSummary: string;
    prognosticSummary: string;
    diagnosticSummary: string;
    diagnosticImplications: never[];
    prognosticImplications: never[];
    treatments: ({
        alterations: string[];
        drugs: {
            ncitCode: string;
            drugName: string;
        }[];
        approvedIndications: string[];
        level: string;
        fdaLevel: string;
        levelAssociatedCancerType: {
            id: number;
            code: string;
            color: string;
            name: string;
            mainType: {
                id: null;
                name: string;
                tumorForm: string;
            };
            tissue: string;
            children: {};
            parent: string;
            level: number;
            tumorForm: string;
        };
        levelExcludedCancerTypes: never[];
        pmids: string[];
        abstracts: never[];
        description: string;
    } | {
        alterations: string[];
        drugs: {
            ncitCode: string;
            drugName: string;
        }[];
        approvedIndications: never[];
        level: string;
        fdaLevel: string;
        levelAssociatedCancerType: {
            id: number;
            code: string;
            color: string;
            name: string;
            mainType: {
                id: null;
                name: string;
                tumorForm: string;
            };
            tissue: string;
            children: {};
            parent: null;
            level: number;
            tumorForm: string;
        };
        levelExcludedCancerTypes: {
            id: number;
            code: string;
            color: string;
            name: string;
            mainType: {
                id: null;
                name: string;
                tumorForm: string;
            };
            tissue: string;
            children: {};
            parent: null;
            level: number;
            tumorForm: string;
        }[];
        pmids: string[];
        abstracts: {
            link: string;
            abstract: string;
        }[];
        description: string;
    })[];
    dataVersion: string;
    lastUpdate: string;
    vus: boolean;
} | {
    query: {
        id: null;
        referenceGenome: string;
        hugoSymbol: string;
        entrezGeneId: number;
        alteration: string;
        alterationType: string;
        svType: null;
        tumorType: string;
        consequence: null;
        proteinStart: null;
        proteinEnd: null;
        hgvs: null;
    };
    geneExist: boolean;
    variantExist: boolean;
    alleleExist: boolean;
    oncogenic: string;
    mutationEffect: {
        knownEffect: string;
        description: string;
        citations: {
            pmids: string[];
            abstracts: {
                link: string;
                abstract: string;
            }[];
        };
    };
    highestSensitiveLevel: string;
    highestResistanceLevel: null;
    highestDiagnosticImplicationLevel: null;
    highestPrognosticImplicationLevel: null;
    highestFdaLevel: string;
    otherSignificantSensitiveLevels: never[];
    otherSignificantResistanceLevels: never[];
    hotspot: boolean;
    geneSummary: string;
    variantSummary: string;
    tumorTypeSummary: string;
    prognosticSummary: string;
    diagnosticSummary: string;
    diagnosticImplications: never[];
    prognosticImplications: never[];
    treatments: {
        alterations: string[];
        drugs: {
            ncitCode: string;
            drugName: string;
        }[];
        approvedIndications: never[];
        level: string;
        fdaLevel: string;
        levelAssociatedCancerType: {
            id: number;
            code: string;
            color: string;
            name: string;
            mainType: {
                id: null;
                name: string;
                tumorForm: string;
            };
            tissue: string;
            children: {};
            parent: null;
            level: number;
            tumorForm: string;
        };
        levelExcludedCancerTypes: never[];
        pmids: string[];
        abstracts: never[];
        description: string;
    }[];
    dataVersion: string;
    lastUpdate: string;
    vus: boolean;
})[];
export declare const exampleAnnotations: AnnotationImplication[];
export declare const exampleTreatments: TreatmentImplication[];
export declare const notifications: NotificationImplication[];
export declare const totalData: {
    mutationData: {
        query: {
            id: null;
            referenceGenome: string;
            hugoSymbol: string;
            entrezGeneId: number;
            alteration: string;
            alterationType: string;
            svType: null;
            tumorType: string;
            consequence: null;
            proteinStart: null;
            proteinEnd: null;
            hgvs: null;
        };
        geneExist: boolean;
        variantExist: boolean;
        alleleExist: boolean;
        oncogenic: string;
        mutationEffect: {
            knownEffect: string;
            description: string;
            citations: {
                pmids: string[];
                abstracts: never[];
            };
        };
        highestSensitiveLevel: string;
        highestResistanceLevel: null;
        highestDiagnosticImplicationLevel: null;
        highestPrognosticImplicationLevel: null;
        highestFdaLevel: string;
        otherSignificantSensitiveLevels: never[];
        otherSignificantResistanceLevels: never[];
        hotspot: boolean;
        geneSummary: string;
        variantSummary: string;
        tumorTypeSummary: string;
        prognosticSummary: string;
        diagnosticSummary: string;
        diagnosticImplications: never[];
        prognosticImplications: never[];
        treatments: ({
            alterations: string[];
            drugs: {
                ncitCode: string;
                drugName: string;
            }[];
            approvedIndications: string[];
            level: string;
            fdaLevel: string;
            levelAssociatedCancerType: {
                id: number;
                code: string;
                color: string;
                name: string;
                mainType: {
                    id: null;
                    name: string;
                    tumorForm: string;
                };
                tissue: string;
                children: {};
                parent: string;
                level: number;
                tumorForm: string;
            };
            levelExcludedCancerTypes: never[];
            pmids: string[];
            abstracts: never[];
            description: string;
        } | {
            alterations: string[];
            drugs: {
                ncitCode: string;
                drugName: string;
            }[];
            approvedIndications: never[];
            level: string;
            fdaLevel: string;
            levelAssociatedCancerType: {
                id: number;
                code: string;
                color: string;
                name: string;
                mainType: {
                    id: null;
                    name: string;
                    tumorForm: string;
                };
                tissue: string;
                children: {};
                parent: null;
                level: number;
                tumorForm: string;
            };
            levelExcludedCancerTypes: {
                id: number;
                code: string;
                color: string;
                name: string;
                mainType: {
                    id: null;
                    name: string;
                    tumorForm: string;
                };
                tissue: string;
                children: {};
                parent: null;
                level: number;
                tumorForm: string;
            }[];
            pmids: string[];
            abstracts: {
                link: string;
                abstract: string;
            }[];
            description: string;
        })[];
        dataVersion: string;
        lastUpdate: string;
        vus: boolean;
    }[];
    cnaData: ({
        query: {
            id: null;
            referenceGenome: string;
            hugoSymbol: string;
            entrezGeneId: number;
            alteration: string;
            alterationType: string;
            svType: null;
            tumorType: string;
            consequence: null;
            proteinStart: null;
            proteinEnd: null;
            hgvs: null;
        };
        geneExist: boolean;
        variantExist: boolean;
        alleleExist: boolean;
        oncogenic: string;
        mutationEffect: {
            knownEffect: string;
            description: string;
            citations: {
                pmids: string[];
                abstracts: never[];
            };
        };
        highestSensitiveLevel: string;
        highestResistanceLevel: null;
        highestDiagnosticImplicationLevel: null;
        highestPrognosticImplicationLevel: null;
        highestFdaLevel: string;
        otherSignificantSensitiveLevels: never[];
        otherSignificantResistanceLevels: never[];
        hotspot: boolean;
        geneSummary: string;
        variantSummary: string;
        tumorTypeSummary: string;
        prognosticSummary: string;
        diagnosticSummary: string;
        diagnosticImplications: never[];
        prognosticImplications: never[];
        treatments: {
            alterations: string[];
            drugs: {
                ncitCode: string;
                drugName: string;
            }[];
            approvedIndications: never[];
            level: string;
            fdaLevel: string;
            levelAssociatedCancerType: {
                id: number;
                code: string;
                color: string;
                name: string;
                mainType: {
                    id: null;
                    name: string;
                    tumorForm: string;
                };
                tissue: string;
                children: {};
                parent: string;
                level: number;
                tumorForm: string;
            };
            levelExcludedCancerTypes: never[];
            pmids: string[];
            abstracts: never[];
            description: string;
        }[];
        dataVersion: string;
        lastUpdate: string;
        vus: boolean;
    } | {
        query: {
            id: null;
            referenceGenome: string;
            hugoSymbol: string;
            entrezGeneId: number;
            alteration: string;
            alterationType: string;
            svType: null;
            tumorType: string;
            consequence: null;
            proteinStart: null;
            proteinEnd: null;
            hgvs: null;
        };
        geneExist: boolean;
        variantExist: boolean;
        alleleExist: boolean;
        oncogenic: string;
        mutationEffect: {
            knownEffect: string;
            description: string;
            citations: {
                pmids: never[];
                abstracts: never[];
            };
        };
        highestSensitiveLevel: string;
        highestResistanceLevel: null;
        highestDiagnosticImplicationLevel: null;
        highestPrognosticImplicationLevel: null;
        highestFdaLevel: string;
        otherSignificantSensitiveLevels: never[];
        otherSignificantResistanceLevels: never[];
        hotspot: boolean;
        geneSummary: string;
        variantSummary: string;
        tumorTypeSummary: string;
        prognosticSummary: string;
        diagnosticSummary: string;
        diagnosticImplications: never[];
        prognosticImplications: never[];
        treatments: {
            alterations: string[];
            drugs: {
                ncitCode: string;
                drugName: string;
            }[];
            approvedIndications: never[];
            level: string;
            fdaLevel: string;
            levelAssociatedCancerType: {
                id: number;
                code: string;
                color: string;
                name: string;
                mainType: {
                    id: null;
                    name: string;
                    tumorForm: string;
                };
                tissue: string;
                children: {};
                parent: null;
                level: number;
                tumorForm: string;
            };
            levelExcludedCancerTypes: never[];
            pmids: string[];
            abstracts: {
                link: string;
                abstract: string;
            }[];
            description: string;
        }[];
        dataVersion: string;
        lastUpdate: string;
        vus: boolean;
    })[];
    structuralVariantData: {
        query: {
            id: null;
            referenceGenome: string;
            hugoSymbol: string;
            entrezGeneId: number;
            alteration: string;
            alterationType: string;
            svType: null;
            tumorType: string;
            consequence: null;
            proteinStart: null;
            proteinEnd: null;
            hgvs: null;
        };
        geneExist: boolean;
        variantExist: boolean;
        alleleExist: boolean;
        oncogenic: string;
        mutationEffect: {
            knownEffect: string;
            description: string;
            citations: {
                pmids: string[];
                abstracts: {
                    link: string;
                    abstract: string;
                }[];
            };
        };
        highestSensitiveLevel: string;
        highestResistanceLevel: null;
        highestDiagnosticImplicationLevel: null;
        highestPrognosticImplicationLevel: null;
        highestFdaLevel: string;
        otherSignificantSensitiveLevels: never[];
        otherSignificantResistanceLevels: never[];
        hotspot: boolean;
        geneSummary: string;
        variantSummary: string;
        tumorTypeSummary: string;
        prognosticSummary: string;
        diagnosticSummary: string;
        diagnosticImplications: never[];
        prognosticImplications: never[];
        treatments: {
            alterations: string[];
            drugs: {
                ncitCode: string;
                drugName: string;
            }[];
            approvedIndications: never[];
            level: string;
            fdaLevel: string;
            levelAssociatedCancerType: {
                id: number;
                code: string;
                color: string;
                name: string;
                mainType: {
                    id: null;
                    name: string;
                    tumorForm: string;
                };
                tissue: string;
                children: {};
                parent: null;
                level: number;
                tumorForm: string;
            };
            levelExcludedCancerTypes: never[];
            pmids: string[];
            abstracts: never[];
            description: string;
        }[];
        dataVersion: string;
        lastUpdate: string;
        vus: boolean;
    }[];
};
//# sourceMappingURL=APIResponse.d.ts.map