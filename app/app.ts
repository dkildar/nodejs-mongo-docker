import * as express from 'express'
import { Express } from 'express'
import router from './router'

class App {
  public express: Express

  constructor() {
    this.express = express()
    this.initRoutes()
  }

  private initRoutes() {
    const appRouter = router
    this.express.use('/', appRouter)
  }
}

export default new App().express
