import React from 'react';
import { IDeviceType } from '@/types/deviceType.types';

import DeviceRow from '@/components/molecules/devices/DeviceRow';

import styles from '@/styles/Devices.module.css';

const dufusTypes: Array<IDeviceType> = [
    {
        id: 1,
        name: 'PC',
        devices: [
            {
                id: 1,
                name: 'alpha',
                emissions: [
                    {
                        id: 1,
                        value: 1.1,
                        sensor: { id: 1, name: 'thermostat', unit: 'C'}
                    },
                    {
                        id: 2,
                        value: 100,
                        sensor: { id: 1, name: 'thermostat', unit: 'C'}
                    }

                ]
            },
            {
                id: 2,
                name: 'beta',
                emissions: [
                    {
                        id: 1,
                        value: 1.1,
                        sensor: { id: 1, name: 'thermostat', unit: 'C'}
                    },
                    {
                        id: 2,
                        value: 100,
                        sensor: { id: 1, name: 'thermostat', unit: 'C'}
                    }

                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Thermostat',
        devices: [
            {
                id: 3,
                name: 'epsilon',
            },
            {
                id: 4,
                name: 'delta',
            }
        ]
    },
    {
        id: 2,
        name: 'Controller',
        devices: [
            {
                id: 3,
                name: 'eta',
            },
            {
                id: 4,
                name: 'omega',
            }
        ]
    }
];

const Devices: React.FC = () => {
    return (
        <div className={styles.container}> 
            {dufusTypes.map((deviceType: IDeviceType) => (
                <DeviceRow deviceType={deviceType} />
            ))}
        </div>
    )
}

export default Devices;