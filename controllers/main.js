//check username , password in post(login) request
//if exists create new JWT
//send back to front-end
//set up authentication so only the request with JWT can access the dashboard
const jwt= require('jsonwebtoken');
const {BadRequestError}=require('../errors')
const login = async (req, res) => {
  const { username, password } = req.body;
  // we have multiple options for validations
  // mongoose validation
  //Joi -package
  //check in the controller
  if (!username || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  //just for demo normally provided DB
  const id = new Date().getDate();
  //try to keep payload small , better experience for user , do not send sensitive
  //information in JWT payload
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
    console.log(req.user);
    const luckyNumber = Math.floor(Math.random() * 100);
    res
      .status(200)
      .json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data your lucky number is ${luckyNumber}`,
      });
};

module.exports = { login, dashboard };
