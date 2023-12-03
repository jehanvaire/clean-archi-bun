import * as Ports from '../../business/ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class AddProduit {
    
    storagePort: Ports.ProduitStorage;

    constructor(
        storagePort: Ports.ProduitStorage
    ) {
        this.storagePort = storagePort;
    }

    public execute(produit: Entities.IProduit): Result<Entities.Produit> {
        return this.storagePort.createProduit(produit);
    }
}