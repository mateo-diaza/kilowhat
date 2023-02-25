import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import mapa from "@/public/planox.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'

import styles from '@/styles/Map.module.css';

interface IProps {
  children?: JSX.Element
}

const Map: React.FC<IProps> = ({ children }) => {
  const [devices, setDevices] = useState<any>();
  const refContainer = useRef<any>(null);
  
  const fetchData = () => {
    fetch('http://localhost:3000/api/controllers/devices')
      .then(response => response.json())
      .then(json => {
        setDevices(json)
      })
  }
  
  useEffect(() => {
    fetchData();
    if (!refContainer || !refContainer.current) { return; }
    refContainer.current.addEventListener('mousemove', (e: any) => {
      const boundary = e.target.getBoundingClientRect();
      /*console.log({ 
        x: e.clientX - boundary.left, 
        y: e.clientY - boundary.top 
      });*/
    });

    
  }, [])

  function deviceIcon(device: any) {
    if (device === 1) {
      return faLaptop
    } else {
      return faTemperatureHalf
    }
  }

  console.log(devices)

  return (
    <div className={styles.layout}>
      <div className={styles.iconList}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faLaptop} />
        </div>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={faTemperatureHalf} />
        </div>
      </div>
      <div className={styles.mapContainer}>
          <Image className={styles.map} ref={refContainer} alt="" src={mapa} />
          {devices && devices.map((device: any) => (
            <div key={device.id} className={styles.marker} style={{ top: `${device.pos_x}%`, left: `${device.pos_y}%`}}>
              <FontAwesomeIcon icon={deviceIcon(device.type_id)} />
              <div className={styles.deviceInfo}>
                <div>{device.name}</div>
                <div>{device.last_emissions[0].sensors.name + `: ` + device.last_emissions[0].sum}</div>
              </div>
            </div>)
          )}
      </div>
    </div>
  )
}

export default Map;