const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required() ,
  typeofservice :Joi.string().valid("nurse","doctor","ray","analysis").required() ,
  gender:Joi.string().valid("male","female").required() ,
  phone :Joi.string().required() ,
  longitude:Joi.number().required() ,
  latitude:Joi.number().required()

});


module.exports=userSchema ;


