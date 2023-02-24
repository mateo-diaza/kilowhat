import { IEmission } from "./emission.types";

export interface ISensorBase {
    id: number;
    name: string;
    unit: string;
    created_at?: Date;
}

export interface ISensor extends ISensorBase{
    emissions: Array<IEmission>;
}

