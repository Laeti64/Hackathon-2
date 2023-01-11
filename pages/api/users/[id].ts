import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const user = await prisma.user.findUniqueOrThrow({
        where: {
          id: id as string,
        },
        include: {
          bookings: {
            include: {
              car: {
                include: {
                  model: {
                    include: {
                      brand: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      res.status(200).json(user);
      break;
    case "PUT":
      const updatedUser = await prisma.user.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedUser);
      break;
    case "DELETE":
      await prisma.user.delete({
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
