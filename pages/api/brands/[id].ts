import prisma from "../../../prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case "GET":
      const brand = await prisma.brand.findUniqueOrThrow({
        where: {
          id: id as string,
        },
      });
      res.status(200).json(brand);
      break;
    case "PUT":
      const updatedBrand = await prisma.brand.update({
        where: {
          id: id as string,
        },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedBrand);
      break;
    case "DELETE":
      await prisma.brand.delete({
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
