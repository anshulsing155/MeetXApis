const Joi = require('joi');

// User registration validation
exports.registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.string().required(),
    password: Joi.string().min(6).required()
  });
  
  return schema.validate(data);
};

// User login validation
exports.loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
  });
  
  return schema.validate(data);
};

// Activity validation
exports.activityValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    dateTime: Joi.date().required()
  });
  
  return schema.validate(data);
};

// Booking validation
exports.bookingValidation = (data) => {
  const schema = Joi.object({
    activityId: Joi.string().required()
  });
  
  return schema.validate(data);
};