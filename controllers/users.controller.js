
const validateUser = (userName, password) =>{
    
    return {token:"someRandomToken"};
    //add proper todo handling and exception handling

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const loginUser = (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  if (!userName || !password) {
    res.status(400);
    res.json("invalid user name or password");
    return;
  }

  try{
    token = validateUser(userName, password);
    res.status(200);``
    res.json(token);
  }catch(err){

  }
  
 
};




module.exports = {
    loginUser
}