/* eslint-disable import/no-extraneous-dependencies */
import { Auth } from "aws-amplify";

async function signIn() {
  try {
    const user = await Auth.signIn("julien_abbadie@hotmail.fr", "Jdouille01");
    console.log(user);
  } catch (error) {
    console.log("error signing in", error);
  }
}

export default signIn;
