import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const brands = await prisma.brand.findMany();
      res.status(200).json(brands);
      break;
    case "POST":
      const newBrand = await prisma.brand.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newBrand);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
