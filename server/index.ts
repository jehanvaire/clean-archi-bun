import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import * as Routes from './src/infrastructure/routes';

const app = new Elysia().get("/", () => "Hello Elysia");
app.use(cors());

Routes.clientRoutes(app);
Routes.produitRoutes(app);
Routes.factureRoutes(app);

app.listen(5000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
