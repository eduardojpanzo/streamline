import { randomUUID } from "crypto";

export class UserProject {
  public readonly id: string;

  public userId: string;
  public projectId:string;

  constructor(props: Omit<UserProject, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}