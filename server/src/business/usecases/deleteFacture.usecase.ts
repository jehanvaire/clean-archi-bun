import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class DeleteFacture {
    storagePort: Ports.FactureStorage;

    constructor(storagePort: Ports.FactureStorage) {
        this.storagePort = storagePort;
    }

    public execute(factureId: string): Result<Entities.Facture>{
        return this.storagePort.deleteFacture(factureId);
    }
}