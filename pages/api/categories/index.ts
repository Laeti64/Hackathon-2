import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const categories = await prisma.category.findMany();
      res.status(200).json(categories);
      break;
    case "POST":
      const newCategory = await prisma.category.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newCategory);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
