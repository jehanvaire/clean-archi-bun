
import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class GetClients {

    storagePort: Ports.ClientStorage;

    constructor(storagePort: Ports.ClientStorage) {
        this.storagePort = storagePort;
    }
    public execute(): Result<Entities.Client[]>{
        return this.storagePort.getClients();
    }
}