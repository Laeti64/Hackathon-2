import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const booking = await prisma.booking.findUniqueOrThrow({
        where: {
          id: id as string,
        },
        include: {
          car: true,
        },
      });
      res.status(200).json(booking);
      break;
    case "PUT":
      const updatedBooking = await prisma.booking.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedBooking);
      break;
    case "DELETE":
      await prisma.booking.delete({
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
