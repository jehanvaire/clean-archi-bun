import { Elysia } from "elysia";
import * as Usecases from '../../business/usecases';
import * as Repositories from '../repositories';

export function factureRoutes(app: Elysia) {
    app.post("/facture", (body: any) => {

        const { clientId, produits } = body.query as { clientId: number, produits: string[] };

        const storagePort = new Repositories.FactureStorage('./resources/factures.json', new Repositories.ProduitStorage('./resources/produits.json'));
        // const loggerPort = new Repositories.LoggerRepository();

        const usecase = new Usecases.AddFacture(storagePort);
        const result = usecase.execute({
            clientId,
            produits
        });

        if (result.success) {
            // return json result
            return result.value;
        } else {
            // return error
            return result.error;
        }

    });

    app.get("/factures", () => {

        const storagePort = new Repositories.FactureStorage('./resources/factures.json', new Repositories.ProduitStorage('./resources/produits.json'));
        // const loggerPort = new Repositories.LoggerRepository();
        const usecase = new Usecases.GetFactures(storagePort);
        const result = usecase.execute();

        if (result.success) {
            // return json result
            return result.value;
        } else {
            // return error
            return result.error;
        }
    });

    app.delete("/facture", (body: any) => {

        const { id } = body.query as { id: string };

        const storagePort = new Repositories.FactureStorage('./resources/factures.json', new Repositories.ProduitStorage('./resources/produits.json'));
        // const loggerPort = new Repositories.LoggerRepository();
        const usecase = new Usecases.DeleteFacture(storagePort);
        const result = usecase.execute(id);

        if (result.success) {
            // return json result
            return result.value;
        } else {
            // return error
            return result.error;
        }
    });
}