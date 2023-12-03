export interface IProduit {
    id?: number;
    nom: string;
    prix: number;
}

export class Produit {
    id: number;
    nom: string;
    prix: number;

    constructor(produit: IProduit) {
        this.id = produit.id || 0;
        this.nom = produit.nom;
        this.prix = produit.prix;
    }
}