import { IEmission } from "./emission.types";
import { IOffice } from "./office.types";

export interface IDeviceBase {
    id: number;
    name: string;
    created_at?: Date;
}

export interface IDeviceTypeIds extends IDeviceBase {
    office_id: number;
}

export interface IDevice extends IDeviceBase {
    office?: IOffice;
    emissions?: Array<IEmission>;
}