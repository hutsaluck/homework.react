import * as Joi from "joi";

export const CarValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .max(20)
        .min(1)
        .required()
        .label('Brand')
        .messages({'string.pattern.base': `Your brand value didn't match pattern`}),
    price: Joi.number()
        .integer()
        .min(0)
        .max(1000000)
        .required()
        .label('Price')
        .messages({
            'number.min': `min price is 0`,
            'number.max': `max price is 1000000`,
        }),
    year: Joi.number()
        .integer()
        .min(1990)
        .max(2024)
        .required()
        .label('Year')
        .messages({
            'number.min': `min year is 1990`,
            'number.max': `max year is 2024`,
        }),
})