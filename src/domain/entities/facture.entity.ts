export interface IFacture {
    id?: number;
    numero: string;
    date: Date;
    clientId: number;
    produits: number[];
}

export class Facture {
    id: number;
    numero: string;
    date: Date;
    clientId: number;
    produits: number[];

    constructor(facture: IFacture) {
        this.id = facture.id || 0;
        this.numero = facture.numero;
        this.date = facture.date;
        this.clientId = facture.clientId;
        this.produits = facture.produits;
    }
}
