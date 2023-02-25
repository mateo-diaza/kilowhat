import React from 'react';
import { IDeviceType } from '@/types/deviceType.types';

import DeviceRow from '@/components/molecules/devices/DeviceRow';

import useFetch from '@/hooks/useFetch';

import styles from '@/styles/Devices.module.css';

const Devices: React.FC = () => {

    const { response, error, loading, refetch } = useFetch<Array<IDeviceType>>('/api/types');

    return (
        <div className={styles.container}> 
            { error && (<p>{ error }</p>)}
            { loading && !error && (<p>Loading...</p>)}
            {response && response.map((deviceType: IDeviceType) => (
                <DeviceRow deviceType={deviceType} />
            ))}

        </div>
    )
}

export default Devices;