const passport = require('passport')
const Author = require('../models/Author')

passport.use(Author.createStrategy())
passport.serializeUser(Author.serializeUser())
passport.deserializeUser(Author.deserializeUser())

module.exports = passport