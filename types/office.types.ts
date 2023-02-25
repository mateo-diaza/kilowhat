import { IDevice } from "./device.types";

export interface IOfficeBase {
    id: number;
    name: string;
    location: string;
    created_at?: Date;
}

export interface IOffice extends IOfficeBase{
    devices: Array<IDevice>;
}
