
import 'dotenv/config';
import * as joi from 'joi';

interface EnvVars {
    PORT: number;
    PRODUCTS_MICROSERVICE: string;
    PRODUCTS_MICROSERVICE_PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    PRODUCTS_MICROSERVICE: joi.string().required(),
    PRODUCTS_MICROSERVICE_PORT: joi.number().required()
})
    .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error)
    throw new Error(`Config validation error: ${error.message}`);

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    productsMicroservice: envVars.PRODUCTS_MICROSERVICE,
    productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,

}