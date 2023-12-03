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
        this.createDirIfNotExists();
        fs.appendFileSync(this.filePath, JSON.stringify(client) + '\n');
        return { success: true, value: client };
    }

    private createDirIfNotExists(): void {
        const dir = path.dirname(this.filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
    }

}
