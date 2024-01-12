import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import * as Usecases from '../src/business/usecases';
import * as Repositories from '../src/infrastructure/repositories';

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
