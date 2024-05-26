import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap()
  .then(() => console.log("Server started at http://localhost:3000"))
  .catch((reason) => console.log(reason));
