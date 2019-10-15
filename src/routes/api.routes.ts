import { Request, Response, Router } from "express";
import { memberRouter } from "./member.routes";
import { obligationRouter } from "./obligation.routes";
import { synagogueRouter } from "./synagogue.routes";
import { userRouter } from "./user.routes";

export const apiRouter: Router = Router();

apiRouter
  .use("/member", memberRouter)
  .use("/obligation", obligationRouter)
  .use("/synagogue", synagogueRouter)
  .use("/user", userRouter)

  .get("/", (req: Request, res: Response) => {
    const pageContent: string = `<h1>Our King 👑 api</h1>`;
    res.status(200).send(pageContent);
  });
