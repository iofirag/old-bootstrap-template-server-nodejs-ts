import { json, urlencoded } from "body-parser";
import * as cors from "cors";
import * as express from "express";
import { Application } from "express";
import { Routes } from "./routes/index";
// import { mainRouter } from "./routes/old-index";
import "./config/db.config";

class App {
  public app: Application;
  public routePrv: Routes = new Routes();

  constructor() {
    this.app = express();
    this.applyConfigs();
    this.applyMiddlewares();
    this.mountRoutes();
  }

  private applyConfigs(): void {}
  private applyMiddlewares(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
  private mountRoutes(): void {
    this.routePrv.routes(this.app);
    // this.app.use("/", mainRouter);
  }
}
export default new App().app;
