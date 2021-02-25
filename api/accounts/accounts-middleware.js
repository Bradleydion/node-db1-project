const accounts = require("../accounts/accounts-model")

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body){
    return res.status(400).json({message:"name and budget are required"})
  }
  var requestTrimmed = req.body.name.trim()
    if (typeof req.body.name !== 
    "string" ){
      return res.status(400).json({message:"name of the account must be a string"})
    }
    if (requestTrimmed.LEN()>3 || requestTrimmed.LEN()<100){return res.status(400).json({message:"name of account must be between 3 and 100"})
  }
    if (typeof req.body.budget !== "number"){
      return res.status(400).json({message:"budget of account must be a number"})
    }
    if (req.body.budget>0||req.body.budget<1000000){
      return res.status(400).json({message:"The budget of the account is too large or too small"})
    }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  


}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  await 
  accounts.getById(req.params.id)
  .then((account)=>{
    if(account){
      req.account=account
      next()}
      else{
        res.status(400).json({message:"account not found"})
      }
  }) 
}
