import { PassportStatic } from 'passport'
import * as passport from 'passport'
import * as LocalStrategy from 'passport-local'

class PassportInit {
  passport: PassportStatic

  constructor() {
    this.passport = passport
    this.initStrategy()
  }

  private initStrategy() {
    const strategy = new LocalStrategy.Strategy((username, password, done) => {
      this.mockedFind({}, (error, user) => {
        if (error) return done(error)
        if (!user) return done(null, false, { message: 'Incorrect username' })
        if (!user.validPassword(password)) return done(null, false, { message: 'Incorrect password' })
        return done(null, user)
      })
    })
    this.passport.use(strategy)
  }

  private mockedFind(user, callback) {}
}
export default new PassportInit().passport
