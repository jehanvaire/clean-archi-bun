import { Elysia } from "elysia";
import * as Usecases from '../../business/usecases';
import * as Repositories from '../../infrastructure/repositories';

export function clientRoutes(app: Elysia) {
  app.post("/client", (req: any) => {

    const { nom, prenom, mail } = req.body as { nom: string, prenom: string, mail: string };

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

  app.put("/client", (req: any) => {

    const { id, nom, prenom, mail } = req.body as { id: string, nom: string, prenom: string, mail: string };

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

  app.delete("/client", (req: any) => {

    const { id } = req.body as { id: string };

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
}