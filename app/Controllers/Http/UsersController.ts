import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import UsersService from "App/Services/UsersService";

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    return response.json({ userNamespace: true });
  }

  public async store({}: HttpContextContract) {}

  public async show({ response }: HttpContextContract) {
    const test = UsersService.test();
    return response.json({ userId: test });
  }

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
