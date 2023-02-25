import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import mapa from "@/public/planox.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import styles from '@/styles/Map.module.css';
import useFetch from "@/hooks/useFetch";
import OffDevices from "./offDevices";

interface IProps {
  children?: JSX.Element
}

const Map: React.FC<IProps> = ({ children }) => {
  const [devices, setDevices] = useState<any>();
  const [positionDevice, setPositionDevice] = useState<any>();
  const refContainer = useRef(null);

  const { response, error, loading, refetch } = useFetch('/api/controllers/devices');
  
  useEffect(() => {
    if(response) {
      setDevices(response)
    }
  }, [response])

  function deviceIcon(device: any) {
    if (device === 1) {
      return faLaptop
    } else {
      return faTemperatureHalf
    }
  }

  return (
    <div className={styles.layout}>
      {refContainer && (<OffDevices imgRef={refContainer}/>)}
      
      <div className={styles.mapContainer}>
          <Image className={styles.map} ref={refContainer} alt="" src={mapa} />
          {devices && devices.map((device: any) => (
            <div key={device.id} className={styles.marker} style={{ left: `${device.pos_x}%`, top: `${device.pos_y}%`}}>
              <FontAwesomeIcon icon={deviceIcon(device.type_id)} />
              <div className={styles.deviceInfo}>
                <div>{device.name}</div>
              </div>
            </div>)
          )}
      </div>
    </div>
  )
}

export default Map;