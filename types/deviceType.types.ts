import { IDevice } from "./device.types";

export interface IDeviceTypeBase {
    id: number;
    name: string;
    created_at?: Date;
}

export interface IDeviceType extends IDeviceTypeBase {
    devices: Array<IDevice>
}