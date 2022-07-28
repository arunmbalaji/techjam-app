// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Truck } = initSchema(schema);

export {
  Truck
};