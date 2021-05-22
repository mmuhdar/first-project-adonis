import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import Status from "Contracts/Enums/Status";

export default class Task extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public createdBy?: number;

  @column()
  public assignedTo?: number;

  @column()
  public name: string;

  @column()
  public description?: string;

  @column.dateTime()
  public dueAt?: DateTime;

  @column()
  public statusId: Status;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
