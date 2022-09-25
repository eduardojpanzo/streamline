import { User } from "../model/User";

declare global {
  namespace Express {
    export interface Request {
      user: Partial<User>;
    }
  }
}
