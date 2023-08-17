import joi from "joi";
export const orderSchema = joi.object({
    userId: joi.string().required(),
    fullName: joi.string().required(),
    email: joi.string().email().required(),
    phoneNumber: joi.string().required(),
    address: joi.string().required(),
    orderDate: joi.date().default(() => new Date()),
    status: joi.number().required(),
    note: joi.string().required(),
    totalMoney: joi.number().required().min(0),
    deleted: joi.boolean().default(false),
});
