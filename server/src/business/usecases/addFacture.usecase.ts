import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class AddFacture {
    storagePort: Ports.FactureStorage;

    constructor(storagePort: Ports.FactureStorage) {
        this.storagePort = storagePort;
    }

    public execute(facture: Entities.IFacture): Result<Entities.Facture>{
        return this.storagePort.createFacture(facture);
    }
}