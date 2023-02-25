import React,{ useEffect, useState } from 'react';
import { IDeviceType } from '@/types/deviceType.types';

import { Socket } from "socket.io-client";

import DeviceRow from '@/components/molecules/devices/DeviceRow';

import useFetch from '@/hooks/useFetch';
import useOpenSocket from '@/hooks/useOpenSocket';

import styles from '@/styles/Devices.module.css';

const Devices: React.FC = () => {

    const { response, error, loading, refetch } = useFetch<Array<IDeviceType>>('/api/types');
    const socket: Socket | null = useOpenSocket('/api/connect');

    const attachSocketFunctions = () => {
        if (socket) {
            socket.on('init', (data: any) => {
                console.log({ init: data });
            })

            socket.on('update', (data: any) => {
                console.log({ update: data });
            })
        }
    }
    useEffect(() => {
        attachSocketFunctions();
    }, [socket]);

    return (
        <div className={styles.container}>
            {error && (<p>{error}</p>)}
            {loading && !error && (<p>Loading...</p>)}
            {response && response.map((deviceType: IDeviceType) => (
                <DeviceRow key={deviceType.id} deviceType={deviceType} />
            ))}

        </div>
    )
}

export default Devices;