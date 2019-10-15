import { Response } from "express";

export default class Utils {
  public static handleError = async (err: any, res: Response) => {
    return res.status(401).json({ success: 0, msg: err });
  }
}
