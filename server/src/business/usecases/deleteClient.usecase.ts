import * as Ports from '../ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class DeleteClient {

    storagePort: Ports.ClientStorage;

    constructor(storagePort: Ports.ClientStorage) {
        this.storagePort = storagePort;
    }
    public execute(clientId: string): Result<Entities.Client>{
        return this.storagePort.deleteClient(clientId);
    }
}