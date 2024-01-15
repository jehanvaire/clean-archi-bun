import * as Entities from '../../domain/entities';
import { Result } from "../types";

export interface ProduitStorage {
    createProduit(produit: Entities.IProduit): Result<Entities.Produit>;
    getProduits(): Result<Entities.Produit[]>;
    updateProduit(produit: Entities.IProduit): Result<Entities.Produit>;
    deleteProduit(id: string): Result<Entities.Produit>;
}
