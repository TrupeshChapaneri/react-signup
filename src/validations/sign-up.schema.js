import Joi from "joi";

const commonValues = {
  email: "",
  username: "",
  password: "",
};

const defaultValuesFan = {
  firstName: "",
  lastName: "",
  ...commonValues,
};

const defaultValuesTalent = {
  first_name: "",
  last_name: "",
  ...commonValues,
};

const signUpFan = Joi.object({
  firstName: Joi.string()
    .trim()
    .required()
    .label("First Name"),
  lastName: Joi.string()
    .trim()
    .required()
    .label("Last Name"),
  username: Joi.string()
    .trim()
    .required()
    .min(5)
    .label("User Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string()
    .trim()
    .min(5)
    .max(20)
    .required()
    .label("Password"),
});

const signUpTalent = Joi.object({
  first_name: Joi.string()
    .trim()
    .required()
    .label("First Name"),
  last_name: Joi.string()
    .trim()
    .required()
    .label("Last Name"),
  username: Joi.string()
    .trim()
    .required()
    .min(5)
    .label("User Name"),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  password: Joi.string()
    .trim()
    .min(5)
    .max(20)
    .required()
    .label("Password"),
});

export { signUpTalent, signUpFan, defaultValuesFan, defaultValuesTalent };
