import * as Entities from '../../domain/entities';
import { Result } from "../types";

export interface ProduitStorage {
    createProduit(produit: Entities.Produit): Result<Entities.Produit>;
}
