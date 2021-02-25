const {checkAccountPayload,checkAccountNameUnique,checkAccountId}= require("../accounts/accounts-middleware")
const accounts = require ("./accounts-model")
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
 try{ const allAccounts = await accounts.getAll()
  res.json(allAccounts)

 }catch (err){
   next(err)
 }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    // console.log("in line 18",req.account)
     res.json(req.account)
  }catch(err){
    next(err)
  }
})


router.post('/', checkAccountPayload,checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try{ const result = await accounts.create(req.body)
  res.json(result)
}catch(err){
  next(err)
}
})


router.put('/:id',checkAccountPayload, checkAccountId, checkAccountNameUnique, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
  const results = await accounts.updateById(req.params.id,req.body)
  res.json(results)
}catch(err){
  next(err)
}
})


router.delete('/:id',checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try{
  await accounts.deleteById(req.params.id)
  res.status(204).end()
}catch(err){
  next(err)
}
})


router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
