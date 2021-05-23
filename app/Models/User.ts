import { DateTime } from "luxon";
import {
  BaseModel,
  beforeSave,
  column,
  hasMany,
  manyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Hash from "@ioc:Adonis/Core/Hash";
import Task from "./Task";
import { HasMany, ManyToMany } from "@ioc:Adonis/Lucid/Relations";
import Project from "./Project";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public username: string;

  @column()
  public email: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken?: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Task, {
    foreignKey: "createdBy",
  })
  public tasks: HasMany<typeof Task>;

  @hasMany(() => Task, {
    foreignKey: "assignedTo",
  })
  public assignedTasks: HasMany<typeof Task>;

  @manyToMany(() => Project, {
    pivotColumns: ["role_id"],
  })
  public projects: ManyToMany<typeof Project>;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }
}
