import React, { useEffect, useState, useCallback } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faTemperatureHalf } from '@fortawesome/free-solid-svg-icons'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import styles from '@/styles/Map.module.css';
import useFetch from "@/hooks/useFetch";

export interface IProps {
  imgRef: any;
}

const OffDevices: React.FC<IProps> = ({ imgRef }) => {
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

  const onStart = (e: any, data: any) => {
  }

  const updatePosition = async (id: number, pos_x: number, pos_y: number) => {
    const response = await fetch(`/api/controllers/devices/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ pos_x, pos_y})
    });

    if (!response.ok) { console.log('error')};
  }
  const getXPercentage = useCallback((x: number):number => {
    if (!imgRef) { return 0; }

    const boundary = imgRef.current.getBoundingClientRect();
    const { left, right } = boundary;
    const sizeX: number = right - left;
    
    const percentage = 100 * (x-left) / sizeX;

    return percentage;
  }, [imgRef]);

  const getYPercentage = useCallback((y: number):number => {
    if (!imgRef) { return 0; }

    const boundary = imgRef.current.getBoundingClientRect();
    const { top, bottom } = boundary;
    const sizeY: number = bottom - top;

    const percentage = 100 * (y-top) / sizeY;
    return percentage;
  }, [imgRef]);

  const checkIntersection = useCallback((x: number, y: number): boolean => {
    if (!imgRef) { return false; }
      const boundary = imgRef.current.getBoundingClientRect();
      const { left, top, right, bottom } = boundary;

      if (x < left) { return false; }
      if (y < top ) { return false; }
      if (x > right) { return false; }
      if (y > bottom) { return false; }

      return true;
  }, [imgRef]);


  const onStop = (e: any, data: any, id: number) => {
    if (!e.target) return;
    if (!imgRef) return;
      const boundary = imgRef.current.getBoundingClientRect();
      if (checkIntersection(e.clientX, e.clientY)) {
        const percentageY = getYPercentage(e.clientY);
        const percentageX = getXPercentage(e.clientX);

        console.log({
          x: e.clientX - boundary.left,
          y: e.clientY - boundary.top,
          intersect: checkIntersection(e.clientX, e.clientY),
          percentageX,
          percentageY
        });

        updatePosition(id, percentageX, percentageY);
      }
      
  };

  const handleDrag = (e: any, data: any) => {
  }
  

  return (
    <div className={styles.iconList}>
      {offDevices && offDevices.map((device: any) => (
        <Draggable key={device.id} onStart={onStart} onStop={(e, data) => {
          onStop(e, data, device.id);
        }}>
          <div className={styles.icon}>
            <FontAwesomeIcon icon={deviceIcon(device.type_id)} />
          </div>
        </Draggable>
      ))}
    </div>
  )
}

export default OffDevices;