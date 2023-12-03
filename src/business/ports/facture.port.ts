import * as Entities from '../../domain/entities';
import { Result } from "../types";

export interface FactureStorage {
    createFacture(facture: Entities.Facture): Result<Entities.Facture>;
}
