export interface Product {
    productId: number;
     productCode: string;
     productName: string;
     de: string;
     brand: string;
     formId: string;
     dosage: string;
     conditioning: string;
     imported: boolean;
     refundable: boolean;
     psychotropic: boolean;
     thermolabile: boolean;
     productClass: string;
     therapeuticClass: string;
     pharmacologicalClass: string;
     removed: boolean;
     availible: boolean;
     createdDateTime: Date;
     lastUpdatedTime: Date;
     ppa: number;
     referencePrice: number;
     sg: string;
     laboratoryName: string;
     dciName: string;
     photoUrl: string;
}
