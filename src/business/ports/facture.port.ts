import * as Entities from '../../domain/entities';
import { Result } from "../types";

export interface FactureStorage {
    createFacture(facture: Entities.IFacture): Result<Entities.Facture>;
}
