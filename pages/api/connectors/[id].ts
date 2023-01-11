import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const connectors = await prisma.connector.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(connectors);
      break;
    case "PUT":
      const updatedConnector = await prisma.connector.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedConnector);
      break;
    case "DELETE":
      await prisma.connector.delete({
        where: {
          id: id as string,
        },
      });
      res.status(200).json("Deletion ok");
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
