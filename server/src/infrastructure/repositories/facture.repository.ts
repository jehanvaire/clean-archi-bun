import * as Ports from '../../business/ports'
import { Result } from '../../business/types';
import * as Entities from '../../domain/entities';
import fs from 'fs';
import path from 'path';

export class FactureStorage implements Ports.FactureStorage {

    filePath: string;
    produitStorage: Ports.ProduitStorage;

    constructor(filePath: string, produitStorage: Ports.ProduitStorage) {
        this.filePath = filePath;
        this.produitStorage = produitStorage;
    }

    getFactures(): Result<Entities.Facture[]> {
        try {
            if (!fs.existsSync(this.filePath)) {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
                fs.writeFileSync(this.filePath, '[]', 'utf8');
            }

            const data = fs.readFileSync(this.filePath, 'utf8');
            const factures: Entities.Facture[] = JSON.parse(data);

            return { success: true, value: factures };
        } catch (error) {
            return { success: false, error };
        }
    }

    createFacture(facture: Entities.Facture): Result<Entities.Facture> {
        try {
            let factures: Entities.Facture[] = [];

            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                factures = JSON.parse(data);
            } else {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
                fs.writeFileSync(this.filePath, '[]', 'utf8');
            }

            facture.numero = Math.random().toString(36).substring(2, 11);

            const idProduits = facture.produits as string[];
            const produits = this.produitStorage.getProduits();
            if (produits.success) {
                const produitsFacture = produits.value.filter(produit => idProduits.includes(produit.id));
                facture.produits = produitsFacture;
            }

            factures.push(facture);
            fs.writeFileSync(this.filePath, JSON.stringify(factures), 'utf8');

            return { success: true, value: facture };
        } catch (error) {
            return { success: false, error };
        }
    }
    
    deleteFacture(numero: string): Result<Entities.Facture> {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            let factures: Entities.Facture[] = JSON.parse(data);
    
            const index = factures.findIndex(facture => facture.numero === numero);
    
            if (index === -1) {
                return { success: false, error: new Error('Facture not found') };
            }
    
            factures.splice(index, 1);
            fs.writeFileSync(this.filePath, JSON.stringify(factures), 'utf8');
    
            return { success: true, value: {} as Entities.Facture };
        } catch (error) {
            return { success: false, error };
        }
    }
}
