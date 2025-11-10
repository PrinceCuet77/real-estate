import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

export const getManager = async (
  req: Request,
  res: Response
): Promise<void> => {};

export const createManager = async (
  req: Request,
  res: Response
): Promise<void> => {};
