import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const category = await prisma.category.findUniqueOrThrow({
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
      res.status(200).json(category);
      break;
    case "PUT":
      const updatedCategory = await prisma.category.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedCategory);
      break;
    case "DELETE":
      await prisma.category.delete({
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
