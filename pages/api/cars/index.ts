import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const cars = await prisma.car.findMany();
      res.status(200).json(cars);
      break;
    case "POST":
      const newCar = await prisma.car.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newCar);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
