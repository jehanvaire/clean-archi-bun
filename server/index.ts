import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import * as Usecases from './src/business/usecases';
import * as Repositories from './src/infrastructure/repositories';

const app = new Elysia().get("/", () => "Hello Elysia");
app.use(cors());

app.get("/hello/:name", ({ params: { name } }) => {
  return `Hello ${name}!`;
});

app.post("/hello", () => {
  return `Hello aaaa!`;
});

app.post("/client", (body: any) => {

  const { nom, prenom, mail } = body.query as { nom: string, prenom: string, mail: string };

  const storagePort = new Repositories.ClientStorage('./resources/clients.json');
  // const loggerPort = new Repositories.LoggerRepository();
  const usecase = new Usecases.AddClient(storagePort);
  const result = usecase.execute({ nom, prenom, mail });

  if (result.success) {
    // return json result
    return result.value;
  } else {
    // return error
    return result.error;
  }

});

app.get("/clients", () => {

  const storagePort = new Repositories.ClientStorage('./resources/clients.json');
  // const loggerPort = new Repositories.LoggerRepository();
  const usecase = new Usecases.GetClients(storagePort);
  const result = usecase.execute();

  if (result.success) {
    // return json result
    return result.value;
  } else {
    // return error
    return result.error;
  }

});

app.put("/client", (body: any) => {

  const { id, nom, prenom, mail } = body.query as { id: string, nom: string, prenom: string, mail: string };

  const storagePort = new Repositories.ClientStorage('./resources/clients.json');
  // const loggerPort = new Repositories.LoggerRepository();
  const usecase = new Usecases.UpdateClient(storagePort);
  const result = usecase.execute({ id, nom, prenom, mail });

  if (result.success) {
    // return json result
    return result.value;
  } else {
    // return error
    return result.error;
  }

});

app.delete("/client", (body: any) => {

  const { id } = body.query as { id: string };

  const storagePort = new Repositories.ClientStorage('./resources/clients.json');
  // const loggerPort = new Repositories.LoggerRepository();
  const usecase = new Usecases.DeleteClient(storagePort);
  const result = usecase.execute(id);

  if (result.success) {
    // return json result
    return result.value;
  } else {
    // return error
    return result.error;
  }

});

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

app.post("/facture", (body: any) => {

  const { clientId, produits } = body.query as { clientId: number, produits: number[] };

  const storagePort = new Repositories.FactureStorage('./resources/factures.json');
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

app.listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
