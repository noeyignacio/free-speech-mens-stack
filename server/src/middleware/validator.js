import Joi from '@hapi/joi';

export const createPostValidator = Joi.object({
    postContent: Joi.string().min(4).max(300).required(),
    postAuthor: Joi.string().required(),
})