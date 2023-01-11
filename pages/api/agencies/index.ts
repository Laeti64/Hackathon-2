import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const agencies = await prisma.agency.findMany();
      res.status(200).json(agencies);
      break;
    case "POST":
      const newAgency = await prisma.agency.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newAgency);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
