import { randomUUID } from "crypto";

export class UserTask {
  public readonly id: string;

  public userId: string;
  public taskId:string;

  constructor(props: Omit<UserTask, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}