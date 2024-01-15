import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class UpdateProduit {

    storagePort: Ports.ProduitStorage;

    constructor(storagePort: Ports.ProduitStorage) {
        this.storagePort = storagePort;
    }
    public execute(produit: Entities.Produit): Result<Entities.Produit>{
        return this.storagePort.updateProduit(produit);
    }
}