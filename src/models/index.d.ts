import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TruckMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Truck {
  readonly id: string;
  readonly truckLocation: string;
  readonly truckStatus?: string | null;
  readonly truckImage: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Truck, TruckMetaData>);
  static copyOf(source: Truck, mutator: (draft: MutableModel<Truck, TruckMetaData>) => MutableModel<Truck, TruckMetaData> | void): Truck;
}