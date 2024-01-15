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

    getProduits(): Result<Entities.Produit[]> {
        try {
            if (!fs.existsSync(this.filePath)) {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
                fs.writeFileSync(this.filePath, '[]', 'utf8');
            }

            const data = fs.readFileSync(this.filePath, 'utf8');
            const produits: Entities.Produit[] = JSON.parse(data);

            return { success: true, value: produits };
        } catch (error) {
            return { success: false, error };
        }
    }

    createProduit(produit: Entities.Produit): Result<Entities.Produit> {
        try {
            let produits: Entities.Produit[] = [];

            if (fs.existsSync(this.filePath)) {
                const data = fs.readFileSync(this.filePath, 'utf8');
                produits = JSON.parse(data);
            } else {
                fs.mkdirSync(path.dirname(this.filePath), { recursive: true });
                fs.writeFileSync(this.filePath, '[]', 'utf8');
            }

            produit.id = Math.random().toString(36).substring(2, 11);

            produits.push(produit);
            fs.writeFileSync(this.filePath, JSON.stringify(produits), 'utf8');

            return { success: true, value: produit };
        } catch (error) {
            return { success: false, error };
        }
    }

    updateProduit(updatedProduit: Entities.Produit): Result<Entities.Produit> {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            let produits: Entities.Produit[] = JSON.parse(data);
    
            const index = produits.findIndex(produit => produit.id === updatedProduit.id);
    
            if (index === -1) {
                return { success: false, error: new Error('Produit not found') };
            }
    
            produits[index] = updatedProduit;
            fs.writeFileSync(this.filePath, JSON.stringify(produits), 'utf8');
    
            return { success: true, value: updatedProduit };
        } catch (error) {
            return { success: false, error };
        }
    }
    
    deleteProduit(id: string): Result<Entities.Produit> {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            let produits: Entities.Produit[] = JSON.parse(data);
    
            const index = produits.findIndex(produit => produit.id === id);
    
            if (index === -1) {
                return { success: false, error: new Error('Produit not found') };
            }
    
            produits.splice(index, 1);
            fs.writeFileSync(this.filePath, JSON.stringify(produits), 'utf8');
    
            return { success: true, value: {} as Entities.Produit };
        } catch (error) {
            return { success: false, error };
        }
    }


}
