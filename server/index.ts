import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import * as Routes from './src/infrastructure/routes';

const app = new Elysia();
app.use(cors());

app.get("/", () => "Hello World");

Routes.clientRoutes(app);
Routes.produitRoutes(app);
Routes.factureRoutes(app);

app.listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
