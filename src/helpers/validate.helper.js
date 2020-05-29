/* eslint-disable import/prefer-default-export */
import Joi from 'joi';
import response from './response.helper';


/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {*} next
 */
export const validateUser = (req, res, next) => {
  const schema = {
    name: Joi.string().alphanum().required(),
    surname: Joi.string().alphanum().required(),
    email: Joi.string().email().required(),
  };
  const result = Joi.validate(req.body, schema);
  if (result.error !== null) {
    return response.errorMessage(
      res,
      result.error.details[0].message,
      400,
    );
  }
  next();
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {*} next
 */
export const validateProject = (req, res, next) => {
  const schema = {
    name: Joi.string().alphanum().required(),
    body: Joi.string().required(),
    status: Joi.string().required(),
    assignId: Joi.number().optional()
  };
  const result = Joi.validate(req.body, schema);
  if (result.error !== null) {
    return response.errorMessage(
      res,
      result.error.details[0].message,
      400,
    );
  }
  next();
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns {*} next
 */
export const validateTask = (req, res, next) => {
  const schema = {
    name: Joi.string().alphanum().required(),
    description: Joi.string().required(),
    status: Joi.string().required(),
    score: Joi.number().required(),
    assignId: Joi.number().optional(),
    projectId: Joi.number().optional()

  };
  const result = Joi.validate(req.body, schema);
  if (result.error !== null) {
    return response.errorMessage(
      res,
      result.error.details[0].message,
      400,
    );
  }
  next();
};
