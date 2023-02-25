import styles from '@/styles/Targets.module.css';
import EmissionGraphic from '@/components/EmissionGraphic';
import { Colors } from 'chart.js';
import React, { useState, useMemo, useEffect } from 'react';

const Targets = () => {

    const [ sensorId, setSensorId] = useState(1);
    const [ objective, setObjective] = useState(25);
    const [ graphicTitle, setGraphicTitle] = useState('Power');
    const [ lineColor, setLineColor] = useState('#FFD700');

    const handlePowerGraphic = () => {
        setSensorId(1);
        setGraphicTitle('Power');
        setLineColor('#FFD700');
        setObjective(25);
    }

    const handleTemperatureGraphic = () => {
        setSensorId(2);
        setGraphicTitle('Temperature');
        setLineColor('#FF8C00');
        setObjective(22);
    }

    const handleHumidicityGraphic = () => {
        setSensorId(3);
        setGraphicTitle('Humidicity');
        setLineColor('#00BFFF');
        setObjective(27);
    }

    return (
        <div>
            <div>
                <button type='button' className={styles.graphicButton} onClick={() => {handlePowerGraphic()}}>Power</button>
                <button type='button' className={styles.graphicButton} onClick={() => {handleTemperatureGraphic()}}>Temperature</button>
                <button type='button' className={styles.graphicButton} onClick={() => {handleHumidicityGraphic()}}>Humidicity</button>
            </div>
            <EmissionGraphic sensorId={sensorId} objective={objective} graphicTitle={graphicTitle} lineColor={lineColor} />
        </div>
    );
}

export default Targets;