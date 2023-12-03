export interface IProduit {
    id?: string;
    nom: string;
    prix: number;
}

export class Produit {
    id: string;
    nom: string;
    prix: number;

    constructor(produit: IProduit) {
        this.id = produit.id || "";
        this.nom = produit.nom;
        this.prix = produit.prix;
    }
}