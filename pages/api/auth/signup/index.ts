import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import prisma from "../../../../prisma/client";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const newUser = await prisma.user.create({
      data: {
        ...req.body,
        password: hashedPassword,
      },
    });
    const { password: removedPasword, ...newUserWithoutPassword } = newUser;
    console.log(newUserWithoutPassword);

    const alg = "HS256";
    const token = await new SignJWT(newUserWithoutPassword)
      .setProtectedHeader({ alg })
      .setExpirationTime("2h")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET || "secret"));

    res.setHeader("Authorization", `Bearer ${token}`);
    res.status(200).json(newUserWithoutPassword);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export default signup;
