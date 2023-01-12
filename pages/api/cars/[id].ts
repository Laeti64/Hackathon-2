import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;
  switch (method) {
    case "GET":
      const car = await prisma.car.findUniqueOrThrow({
        where: {
          id: id as string,
        },
        include: {
          model: {
            include: {
              brand: true,
            },
          },
        },
      });
      res.status(200).json(car);
      break;
    case "PUT":
      const updatedCar = await prisma.car.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedCar);
      break;
    case "DELETE":
      await prisma.car.delete({
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
