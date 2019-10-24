import { Response } from "express";

export default class Utils {
  public static handleError = async (err: any, res: Response) => {
    return res.status(403).json({ msg: err });
  };
}
