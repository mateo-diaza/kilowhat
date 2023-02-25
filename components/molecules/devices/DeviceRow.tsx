import React from 'react';
import { IDeviceType } from '@/types/deviceType.types';

import styles from '@/styles/components/molecules/devices/deviceRow.module.css';
import Title from '@/components/atoms/typography/Title';
import { IDevice } from '@/types/device.types';
import DeviceCard from './DeviceCard';

export interface IProps {
    deviceType: IDeviceType
}

const DeviceRow: React.FC<IProps> = ({ deviceType }) => {
    return (
        <div className={styles.row}>
                <Title size="h1">
                    {deviceType.name}
                </Title>
            <div className={styles.cardList}>
                {deviceType.device.map((device: IDevice) => (
                    <DeviceCard device={device} />
                ))}
            </div>
        </div>
    )
};
export default DeviceRow;