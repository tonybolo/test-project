import { Controller, Get } from 'koa-router-ts'
import { Context } from 'koa'

@Controller('/')
export default class {
  @Get('/')
  async facebook(ctx: Context) {
    ctx.body = "Cool cool cool cool, noice"
    console.log('We are in async facebook...')
  }
}

// I don't know what's wrong
//second commit 11