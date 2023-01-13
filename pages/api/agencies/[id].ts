import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const agency = await prisma.agency.findUniqueOrThrow({
        where: {
          id: id as string,
        },
        include: {
          cars: {
            include: {
              model: {
                include: {
                  brand: true,
                },
              },
            },
          },
        },
      });
      res.status(200).json(agency);
      break;
    case "PUT":
      const updatedAgency = await prisma.agency.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedAgency);
      break;
    case "DELETE":
      await prisma.agency.delete({
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
