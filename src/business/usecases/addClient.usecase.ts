import * as Ports from '../../business/ports'
import * as Entities from '../../domain/entities';
import { Result } from '../types';

export class AddClient {

    storagePort: Ports.ClientStorage;

    constructor(storagePort: Ports.ClientStorage) {
        this.storagePort = storagePort;
    }
    public execute(client: Entities.IClient): Result<Entities.Client>{
        return this.storagePort.createClient(client);
    }
}