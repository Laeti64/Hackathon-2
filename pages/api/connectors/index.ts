import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const connectors = await prisma.connector.findMany();
      res.status(200).json(connectors);
      break;
    case "POST":
      const newConnector = await prisma.connector.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newConnector);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
