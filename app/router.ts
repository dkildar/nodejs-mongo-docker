import * as express from 'express'

class Router {
  public router: express.Router

  constructor() {
    this.router = express.Router()
    this.initRoutes()
  }

  private initRoutes() {
    this.router.get('/', (request, response) => {
      response.json('Works')
    })
  }
}
export default new Router().router
