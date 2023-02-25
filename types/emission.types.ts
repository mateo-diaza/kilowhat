import { IDevice } from "./device.types";
import { ISensor } from "./sensor.types";

export interface IEmissionBase {
    id: number;
    created_at?: Date;
    value: number;
}

export interface IEmissionIds extends IEmissionBase{
    sensor_id: number;
    device_id: number;
}

export interface IEmission extends IEmissionBase{
    sensor?: ISensor;
    device?: IDevice;
}