import { Elysia } from "elysia";
import * as Usecases from '../../business/usecases';
import * as Repositories from '../repositories';

export function produitRoutes(app: Elysia) {
  app.post("/produit", (body: any) => {

    const { nom, prix } = body.query as { nom: string, prix: number };
  
    const storagePort = new Repositories.ProduitStorage('./resources/produits.json');
    // const loggerPort = new Repositories.LoggerRepository();
    const usecase = new Usecases.AddProduit(storagePort);
    const result = usecase.execute({ nom, prix });
  
    if (result.success) {
      // return json result
      return result.value;
    } else {
      // return error
      return result.error;
    }
  
  });
  
  app.get("/produits", () => {
  
    const storagePort = new Repositories.ProduitStorage('./resources/produits.json');
    // const loggerPort = new Repositories.LoggerRepository();
    const usecase = new Usecases.GetProduits(storagePort);
    const result = usecase.execute();
  
    if (result.success) {
      // return json result
      return result.value;
    } else {
      // return error
      return result.error;
    }
  
  });
  
  app.put("/produit", (body: any) => {
  
    const { id, nom, prix } = body.query as { id: string, nom: string, prix: number };
  
    const storagePort = new Repositories.ProduitStorage('./resources/produits.json');
    // const loggerPort = new Repositories.LoggerRepository();
    const usecase = new Usecases.UpdateProduit(storagePort);
    const result = usecase.execute({ id, nom, prix });
  
    if (result.success) {
      // return json result
      return result.value;
    } else {
      // return error
      return result.error;
    }
  
  });
  
  app.delete("/produit", (body: any) => {
  
    const { id } = body.query as { id: string };
  
    const storagePort = new Repositories.ProduitStorage('./resources/produits.json');
    // const loggerPort = new Repositories.LoggerRepository();
    const usecase = new Usecases.DeleteProduit(storagePort);
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