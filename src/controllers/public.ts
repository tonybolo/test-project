import { Controller, Get } from 'koa-router-ts'
import { Context } from 'koa'

@Controller('/')
export default class {
  @Get('/')
  async facebook(ctx: Context) {
    ctx.body = "Cool cool cool cool, noice"
  }
}