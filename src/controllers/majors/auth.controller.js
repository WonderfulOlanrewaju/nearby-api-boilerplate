import { createUser, loginUser } from "../utils/User.util";
import { handleResError, handleResSuccess } from "../utils/response.util";
import JWT from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_SECRET_KEY } = process.env;

export const SignupController = async (req, res) => {
  try {
    let userDetails = req.body;
    let { err, user } = await createUser(userDetails);
    if (err) handleResError(res, err, 400);
    else {
      let { id, email, isActive } = user;
      let options = {
        expiresIn: "12h",
        issuer: "nearby-hasher",
      };
      let token = await JWT.sign(
        { id, email, isActive },
        JWT_SECRET_KEY,
        options
      );
      handleResSuccess(res, `Account created!`, token, 201);
    }
  } catch (err) {
    handleResError(res, err, 400);
  }
};

export const LoginController = async (req, res) => {
  try {
    let { err, token } = await loginUser(req.body);
    if (err) handleResError(res, err, 400);
    else handleResSuccess(res, "login successful", token, 201);
  } catch (err) {
    handleResError(res, err, 400);
  }
};
