import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const models = await prisma.model.findMany();
      res.status(200).json(models);
      break;
    case "POST":
      const newModel = await prisma.model.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newModel);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
