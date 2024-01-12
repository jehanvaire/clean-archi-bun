import * as Ports from '../../business/ports'
import { Result } from '../../business/types';
import * as Entities from '../../domain/entities';
import fs from 'fs';
import path from 'path';

export class FactureStorage implements Ports.FactureStorage {

    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    public createFacture(facture: Entities.Facture): Result<Entities.Facture> {
        this.createDirAndFileIfNotExists();
        if (this.factureAlreadyExists(facture)) {
            return {
                success: false, error:
                    new Error(`Product with name ${facture.numero} already exists`)
            };
        }

        // ajout id unique
        facture.numero = Math.random().toString(36).substring(2, 11);
        // ajout date
        facture.date = new Date();

        fs.appendFileSync(this.filePath, JSON.stringify(facture) + '\n');
        return { success: true, value: facture };
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

    private factureAlreadyExists(produit: Entities.Facture): boolean {
        const produits = this.getFactures();
        return produits.some(p => p.numero === produit.numero);
    }

    private getFactures(): Entities.Facture[] {
        const factures: Entities.Facture[] = [];
        const lines = fs.readFileSync(this.filePath, 'utf-8').split('\n');
        lines.forEach((line) => {
            if (line !== '') {
                const facture = JSON.parse(line);
                factures.push(facture);
            }
        });
        return factures;
    }
}
