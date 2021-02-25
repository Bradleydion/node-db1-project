exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body){
    return res.status(400).json({message:"name and budget are required"})
  }else if (typeof req.body.name !== 
    "string" ){
      return res.status(400).json({message:"name of the account must be a string"})
    }
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
}
