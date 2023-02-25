import React from 'react';
import { IDevice } from '@/types/device.types';
import { useRouter } from 'next/router';

import Title from '@/components/atoms/typography/Title';

import styles from '@/styles/components/molecules/devices/deviceCard.module.css';
import { IEmission } from '@/types/emission.types';
import { ISensor } from '@/types/sensor.types';

export interface IProps {
    device: IDevice
}

const DeviceCard: React.FC<IProps> = ({ device }) => {
    const router = useRouter();
    const { id } = router.query;
    const getDataRow = (sensor: ISensor | undefined, value: number | undefined) => {
        if (!sensor || typeof value === 'undefined') { return <></> };
        return (
            <div key={`${device.id}-${sensor.id}`} className={styles.sensor}>
                <span className={styles.sensorName}> { sensor.name } {' '} </span>
                <span className={styles.sensorValue}> { value } {' '} { sensor.unit }</span>
            </div>
        )
    };

    return (
        <div className={`${styles.container} ${id === device.id.toString() ? styles.containerActive : ''}`}>
            <div className={styles.title}>
                <Title size="h2" className={styles.title}>
                    {device.name}
                </Title>
            </div>
            <div className={styles.body}>
                {device.emissions && device.emissions.map(
                    (
                        emission: IEmission
                    ) => getDataRow(emission.sensor, emission.value))}
            </div>
        </div>
    );
};

export default DeviceCard;