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

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
