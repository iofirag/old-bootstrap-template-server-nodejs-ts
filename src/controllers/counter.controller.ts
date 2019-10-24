// import { Request, Response } from "express";
// import GenericFunctions from "./genericFunctions";
import { CounterModel as model } from "../models/counter.model";

export class CounterController {
  // // ***************** CRUD *********************************
  // public static create = async (req: Request, res: Response) => {
  //   const newItem = { ...req.body };
  //   return await GenericFunctions.create(model, newItem, req, res);
  // };
  // public static getById = async (req: Request, res: Response) => {
  //   return await GenericFunctions.getById(model, req, res);
  // };
  // public static updateById = async (req: Request, res: Response) => {
  //   let updatedData = { ...req.body };
  //   return await GenericFunctions.updateById(model, updatedData, req, res);
  // };
  // public static deleteById = async (req: Request, res: Response) => {
  //   return await GenericFunctions.deleteById(model, req, res);
  // };
  // // *********************************************************

  public static getNextSequenceValue = async (sequenceName: string) => {
    const filter = {_id: sequenceName };
    const update = {$inc:{sequenceValue:1}};
    const sequenceDocument = model.findOneAndUpdate(filter, update);
    return sequenceDocument.sequenceValue;
 }
}
