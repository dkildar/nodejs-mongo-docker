import * as express from 'express'
import { Express } from 'express'
import router from './router'
import * as passport from 'passport'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as session from 'express-session'

class App {
  public express: Express

  constructor() {
    this.express = express()
    this.initDependencies()
    this.initRoutes()
  }

  private initRoutes() {
    const appRouter = router
    this.express.use('/', appRouter)
  }

  private initDependencies() {
    this.express.use(express.static('public'))
    this.express.use(cookieParser())
    this.express.use(bodyParser())
    this.express.use(session({ secret: 'keyboard cat' }))
    this.express.use(passport.initialize())
    this.express.use(passport.session())
  }
}

export default new App().express
