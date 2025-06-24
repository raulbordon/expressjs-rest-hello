import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../models/User";

export const getUsers = async (req: Request, res: Response) => {
  const userRepo = getRepository(User);
  const users = await userRepo.find();
  return res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const userRepo = getRepository(User);
  const newUser = userRepo.create(req.body);
  await userRepo.save(newUser);
  return res.status(201).json(newUser);
};
