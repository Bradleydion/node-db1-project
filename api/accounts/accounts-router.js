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

router.get('/:id', checkAccountId(), async(req, res, next) => {
  // DO YOUR MAGIC
  try{
    res.json(req.account)
  }catch(err){
    next(err)
  }
})


router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})
// try{
  
// }catch(err){
//   next(err)
// }

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})
// try{
  
// }catch(err){
//   next(err)
// }

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})
// try{
  
// }catch(err){
//   next(err)
// }

router.use((err, req, res, next) => { // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: 'something went wrong inside the accounts router',
    errMessage: err.message,
  })
})

module.exports = router;
