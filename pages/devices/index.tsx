import React from 'react';
import styles from '@/styles/Devices.module.css';

const types = [
    {
        id: '1',
        name: 'PC',
        devices: [
            {
                id: 'id',
                name: 'name',
            },
            {
                id: 'id',
                name: 'name',
                emisiones: []
            }
        ]
    },
    {
    id: '2',
        name: 'Thermostat',
        devices: [
            {
                id: 'id',
                name: 'name',
            },
            {
                id: 'id',
                name: 'name',
                emisiones: []
            }
        ]
    }
];

const Devices: React.FC = () => {
    return (
        <div className={styles.container}> 
            {}
            Devices
        </div>
    )
}

export default Devices;