const router = require('express').Router()
const Author = require('../models/Author')
const passport = require('../helpers/passport')

//Signup
router.post('/signup', (req, res, next)=>{
  Author.register(req.body, req.body.password)
    .then(user=>{
      res.status(201).json(user)
    }).catch(e=>{
      res.status(500).json(e)
    })
})

//login
router.post('/login',(req, res, next)=>{
  passport.authenticate('local',(err, user, info)=>{
    if(err) return res.status(500).json(info)
    if(!user) return res.status(404).json(info)
    req.login(user,(err)=>{
      console.log(err)
      return res.status(201).json(user)
    })
  })(req, res, next)
})

//logout

//profile

module.exports = router