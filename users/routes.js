const { Router } = require('express');
const User = require('./model')

const router = new Router()

router.get('/users', (req, res) => {
  User.find()
  .then(users => res.json(users))
  .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/register', (req, res) => {
  const username = req.body.username

  const newUser = new User ({ username })

  newUser.save()
  .then(() => res.json('User created'))
  .catch( err => res.status(400).json('Error: ' + err))
})

module.exports = router