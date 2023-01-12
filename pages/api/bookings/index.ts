import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case "GET":
      const bookings = await prisma.booking.findMany({
        include: {
          car: true,
        },
      });
      res.status(200).json(bookings);
      break;
    case "POST":
      const newBooking = await prisma.booking.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(newBooking);
      break;
    default:
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};

export default handler;
