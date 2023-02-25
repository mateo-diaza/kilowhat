import React,{ useEffect, useState } from 'react';
import { Socket } from "socket.io-client";

import DeviceRow from '@/components/molecules/devices/DeviceRow';

import { IDeviceType } from '@/types/deviceType.types';
import useOpenSocket from '@/hooks/useOpenSocket';

import styles from '@/styles/Devices.module.css';

const Devices: React.FC = () => {
    const socket: Socket | null = useOpenSocket('/api/connect');
    const [data, setData] = useState<Array<IDeviceType> | null>(null);

    const attachSocketFunctions = () => {
        if (socket) {
            socket.on('init', (data: any) => {
                setData(() => data);
            })

            socket.on('update', (data: any) => {
                setData(() => data);
            })
        }
    }
    useEffect(() => {
        attachSocketFunctions();
    }, [socket]);

    return (
        <div className={styles.container}>
            {data && data.map((deviceType: IDeviceType) => (
                <DeviceRow key={deviceType.id} deviceType={deviceType} />
            ))}

        </div>
    )
}

export default Devices;