import { Produit } from "./produit.entity";

export interface IFacture {
    numero?: string;
    date?: Date;
    clientId: number;
    produits: Produit[] | string[];
}

export class Facture {
    numero: string;
    date: Date;
    clientId: number;
    produits: Produit[] | string[];
    prixTotal: number;

    constructor(facture: IFacture) {
        this.numero = facture.numero || "";
        this.date = facture.date || new Date();
        this.clientId = facture.clientId;
        this.produits = facture.produits;
        this.prixTotal = 0;
    }
}
