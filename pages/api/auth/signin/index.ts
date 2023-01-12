import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";
import bcrypt from "bcrypt";
import { SignJWT, type JWTPayload } from "jose";

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json("user not found");
    }
    if (!bcrypt.compare(user.password, password)) {
      return res.status(403).json("Invalid credentials");
    }
    const { password: removedPassword, ...userWithoutPassword } = user;

    const secret = new TextEncoder().encode(process.env.JWT_SECRET || "secret");
    const alg = "HS256";
    const token = await new SignJWT(userWithoutPassword)
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .sign(secret);

    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export default signIn;
