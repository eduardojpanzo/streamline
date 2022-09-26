import { randomUUID } from "crypto";

export class Project {
  public readonly id: string;

  public name: string;
  public description:string
  public created_at?:Date
  public authorId: string

  constructor(props: Omit<Project, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = randomUUID();
    }
  }
}