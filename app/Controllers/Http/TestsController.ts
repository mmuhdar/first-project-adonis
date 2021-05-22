import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TestsController {
  public async index({ response }: HttpContextContract) {
    return response.json({ userNamespace: true });
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
