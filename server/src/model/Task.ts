import { randomUUID } from "crypto";

export class Task {
  public readonly id: string;

  public name: string;
  public description:string
  public status:string
  public color:string
  public projectId: string
  public created_at?:Date

  constructor(props: Omit<Task, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}