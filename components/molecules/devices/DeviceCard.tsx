import React from 'react';
import { IDevice } from '@/types/device.types';

import Title from '@/components/atoms/typography/Title';

import styles from '@/styles/components/molecules/devices/deviceCard.module.css';
import { isPartiallyEmittedExpression } from 'typescript';
import { IEmission } from '@/types/emission.types';
import { ISensor } from '@/types/sensor.types';

export interface IProps {
    device: IDevice
}

const DeviceCard: React.FC<IProps> = ({ device }) => {
    const getDataRow = (sensor: ISensor | undefined, value: number | undefined) => {
        if (!sensor || typeof value === 'undefined') { return <></> };
        return (
            <>
                <span> { sensor.name } {' '} </span>
                <span> { value } {' '} </span>
                <span> { sensor.unit } </span>
            </>
        )
    };

    return (
        <div className={styles.container}>
            <Title size="h2" className={styles.title}>
                { device.name }
            </Title>
            <div className={styles.body}>
                {device.emissions && device.emissions.map(
                    (
                        emission: IEmission
                    ) => getDataRow(emission.sensor, emission.sum))}
            </div>
        </div>
    );
};

export default DeviceCard;