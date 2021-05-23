import { DateTime } from "luxon";
import { BaseModel, column, manyToMany } from "@ioc:Adonis/Lucid/Orm";
import Status from "Contracts/Enums/Status";
import User from "./User";
import { ManyToMany } from "@ioc:Adonis/Lucid/Relations";
import Task from "./Task";

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public description?: string;

  @column()
  public statusId: Status;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => User, {
    pivotColumns: ["role_id"],
  })
  public users: ManyToMany<typeof User>;

  @manyToMany(() => Task, {
    pivotColumns: ["sort_order"],
  })
  public tasks: ManyToMany<typeof Task>;

  @manyToMany(() => Project, {
    pivotColumns: ["sort_order"],
  })
  public projects: ManyToMany<typeof Project>;
}
