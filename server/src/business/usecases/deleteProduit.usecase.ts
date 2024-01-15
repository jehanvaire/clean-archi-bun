import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class DeleteProduit {

    storagePort: Ports.ProduitStorage;

    constructor(storagePort: Ports.ProduitStorage) {
        this.storagePort = storagePort;
    }
    public execute(clientId: string): Result<Entities.Produit>{
        return this.storagePort.deleteProduit(clientId);
    }
}