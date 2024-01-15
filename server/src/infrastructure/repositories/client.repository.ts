import * as Ports from '../../business/ports'
import { Result } from '../../business/types';
import * as Entities from '../../domain/entities';
import fs from 'fs';
import path from 'path';

export class ClientStorage implements Ports.ClientStorage {
    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    getClients(): Result<Entities.Client[]> {
        try {
            if (!fs.existsSync(this.filePath)) {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
                fs.writeFileSync(this.filePath, '[]', 'utf8');
            }

            const data = fs.readFileSync(this.filePath, 'utf8');
            const clients: Entities.Client[] = JSON.parse(data);

            return { success: true, value: clients };
        } catch (error) {
            return { success: false, error };
        }
    }

    createClient(client: Entities.Client): Result<Entities.Client> {
        try {
            let clients: Entities.Client[] = [];

            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                clients = JSON.parse(data);
            } else {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
                fs.writeFileSync(this.filePath, '[]', 'utf8');
            }

            client.id = Math.random().toString(36).substring(2, 11);

            clients.push(client);
            fs.writeFileSync(this.filePath, JSON.stringify(clients), 'utf8');

            return { success: true, value: client };
        } catch (error) {
            return { success: false, error };
        }
    }

    updateClient(updatedClient: Entities.Client): Result<Entities.Client> {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            let clients: Entities.Client[] = JSON.parse(data);
    
            const index = clients.findIndex(client => client.id === updatedClient.id);
    
            if (index === -1) {
                return { success: false, error: new Error('Client not found') };
            }
    
            clients[index] = updatedClient;
            fs.writeFileSync(this.filePath, JSON.stringify(clients), 'utf8');
    
            return { success: true, value: updatedClient };
        } catch (error) {
            return { success: false, error };
        }
    }
    
    deleteClient(id: string): Result<Entities.Client> {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            let clients: Entities.Client[] = JSON.parse(data);
    
            const index = clients.findIndex(client => client.id === id);
    
            if (index === -1) {
                return { success: false, error: new Error('Client not found') };
            }
    
            clients.splice(index, 1);
            fs.writeFileSync(this.filePath, JSON.stringify(clients), 'utf8');
    
            return { success: true, value: {} as Entities.Client };
        } catch (error) {
            return { success: false, error };
        }
    }
}