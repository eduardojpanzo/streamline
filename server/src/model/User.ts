import { randomUUID } from "crypto";

export class User {
  public readonly id: string;

  public email: string;
  public name: string;
  public password: string;
  public avatar_img: string;

  constructor(props: Omit<User, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}