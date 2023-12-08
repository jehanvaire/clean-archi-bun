import * as Ports from '../../business/ports'
import { Result } from '../../business/types';
import * as Entities from '../../domain/entities';
import fs from 'fs';
import path from 'path';

export class ProduitStorage implements Ports.ProduitStorage {

    filePath: string;

    constructor(filePath: string) {
        this.filePath = filePath;
    }

    public createProduit(produit: Entities.Produit): Result<Entities.Produit> {
        this.createDirAndFileIfNotExists();
        if (this.produitAlreadyExists(produit)) {
            return {
                success: false, error:
                    new Error(`Product with name ${produit.nom} already exists`)
            };
        }

        // ajout id unique
        produit.id = Math.random().toString(36).substring(2, 11);

        fs.appendFileSync(this.filePath, JSON.stringify(produit) + '\n');
        return { success: true, value: produit };
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

    private produitAlreadyExists(produit: Entities.Produit): boolean {
        const produits = this.getProduits();
        return produits.some(p => p.nom === produit.nom);
    }

    private getProduits(): Entities.Produit[] {
        const produits: Entities.Produit[] = [];
        const lines = fs.readFileSync(this.filePath, 'utf-8').split('\n');
        lines.forEach((line) => {
            if (line !== '') {
                const produit = JSON.parse(line);
                produits.push(produit);
            }
        });
        return produits;
    }
}
