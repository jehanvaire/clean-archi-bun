import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class GetProduits {

    storagePort: Ports.ProduitStorage;

    constructor(storagePort: Ports.ProduitStorage) {
        this.storagePort = storagePort;
    }
    public execute(): Result<Entities.Produit[]>{
        return this.storagePort.getProduits();
    }
}