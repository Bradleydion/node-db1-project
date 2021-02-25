const db = require("../../data/db-config")



const getAll = () => {
  // DO YOUR MAGIC
  const accounts = db.select("*").from("accounts")
  return(accounts)

}

const getById = id => {
  // DO YOUR MAGIC
  const [accountsID] = db.select("*").from("accounts").where("id", id).limit(1)
  return(accountsID)
}

const create = async account => {
  // DO YOUR MAGIC
  const [id] = await db.insert(account).into("accounts")
  const newAccount = db("accounts").where("id",id).first()
  return(newAccount)
  
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
 await db("accounts").update(account).where("id",id)
 const updatedAccount = db("accounts").where("id",id).first()
 return(updatedAccount)
}

const deleteById = async id => {
  // DO YOUR MAGIC
  await db("account").where("id",id).del()
  return (`Account ${id} has been deleted`)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
