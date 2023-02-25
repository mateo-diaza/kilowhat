import React, { useRef, useEffect, useState, RefObject } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import styles from '@/styles/Map.module.css';
import useFetch from "@/hooks/useFetch";

export interface IProps {
  ref: RefObject<HTMLDivElement>
}

const OffDevices: React.forwardRef = ( _:any, ref:any ) => {
  const [offDevices, setOffDevices] = useState<any>();

  const { response, error, loading, refetch } = useFetch('/api/controllers/offDevices');

  useEffect(()=> {
    if(response) {
      setOffDevices(response)
    }
  }, [response])

  function deviceIcon(id: any) {
    if (id === 1) {
      return faLaptop
    } else {
      return faTemperatureHalf
    }
  }

  useEffect(() => {
    
  }, [])

  const onStart = () => {
    console.log('start')
  }

  const onStop = (e: any) => {
    if (!e.target) return;
    console.log(ref)
    if (!ref || !ref.current) return;
      const boundary = ref.current.getBoundingClientRect();
      console.log({ 
        x: e.clientX - boundary.left, 
        y: e.clientY - boundary.top 
      });
  };

  const handleDrag = () => {

  }
  

  return (
    <div className={styles.iconList}>
      {offDevices && offDevices.map((device: any) => (
        <Draggable key={device.id} onStart={onStart} onStop={onStop}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={deviceIcon(device.type_id)} />
          </div>
        </Draggable>
      ))}
    </div>
  )
}

export default OffDevices;