import * as Entities from '../../domain/entities';
import { Result } from "../types";

export interface ClientStorage {
    createClient(client: Entities.IClient): Result<Entities.Client>;
    getClients(): Result<Entities.Client[]>;
    updateClient(updatedClient: Entities.IClient): Result<Entities.Client>;
    deleteClient(id: string): Result<Entities.Client>;
}
