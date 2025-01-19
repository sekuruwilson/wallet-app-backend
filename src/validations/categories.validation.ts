import Joi from 'joi';

const createCategory = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  })
};

const updateCategory = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    })
    };


export default {
  createCategory,
    updateCategory
};
