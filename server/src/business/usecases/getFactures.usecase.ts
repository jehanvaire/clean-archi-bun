import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class GetFactures {
    storagePort: Ports.FactureStorage;

    constructor(storagePort: Ports.FactureStorage) {
        this.storagePort = storagePort;
    }

    public execute(): Result<Entities.Facture[]>{
        return this.storagePort.getFactures();
    }
}