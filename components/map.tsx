import React from "react";
import Image from "next/image";
import mapa from "@/public/planox.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'

import styles from '@/styles/Map.module.css';

interface IProps {
  children?: JSX.Element
}

const Map: React.FC<IProps> = ({ children }) => {
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
        <Image alt="" src={mapa} />
        {/* <div className={styles.activeDevices} >
          <div className={styles.icon} style={{top: '20%', left: '75px'}}>
            <FontAwesomeIcon icon={faLaptop}/>
          </div>
          <div className={styles.icon} style={{top: '80px', left: '235px'}}>
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div className={styles.icon} style={{top: '80px', left: '455px'}}>
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div className={styles.icon} style={{top: '420px', left: '75px'}}>
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div className={styles.icon} style={{top: '465px', left: '235px'}}>
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div className={styles.icon} style={{top: '465px', left: '455px'}}>
            <FontAwesomeIcon icon={faLaptop} />
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Map;