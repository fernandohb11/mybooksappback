const router = require('express').Router()
const User = require('../models/User')
const passport = require('../helpers/passport')

//Signup
router.post('/signup', (req, res, next)=>{
  User.register(req.body, req.body.password)
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
router.get('/logout', (req, res, next)=>{
  req.session.destroy()
  //req.logOut()
  res.status(200).json({message:'Logged out successful'})
})


//profile
router.get('/profile' ,(req, res, next)=>{
  return res.json(req.session.currentUser)
})

module.exports = router