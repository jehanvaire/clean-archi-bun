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

    public createClient(client: Entities.Client): Result<Entities.Client> {
        this.createDirAndFileIfNotExists();
        if (this.clientAlreadyExists(client)) {
            return {
                success: false, error:
                    new Error(`Client with mail ${client.mail} already exists`)
            };
        }

        // ajout id unique
        client.id = Math.random().toString(36).substring(2, 11);

        fs.appendFileSync(this.filePath, JSON.stringify(client) + '\n');
        return { success: true, value: client };
    }

    private createDirAndFileIfNotExists(): void {
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        if (!fs.existsSync(this.filePath)) {
            fs.writeFileSync(this.filePath, '');
        }
    }

    private clientAlreadyExists(client: Entities.Client): boolean {
        const clients = this.getClients();
        return clients.success && clients.value.some((c) => c.mail === client.mail);
    }

    public getClients(): Result<Entities.Client[]> {
        this.createDirAndFileIfNotExists();
        const clients: Entities.Client[] = [];
        const lines = fs.readFileSync(this.filePath, 'utf-8').split('\n');
        lines.forEach((line) => {
            if (line !== '') {
                const client = JSON.parse(line);
                clients.push(client);
            }
        });
        return {
            success: true,
            value: clients
        }
    }

}
