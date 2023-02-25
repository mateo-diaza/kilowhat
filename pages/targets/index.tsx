import EmissionGraphic from '@/components/EmissionGraphic';
import { Colors } from 'chart.js';
import React, { useState, useMemo, useEffect } from 'react';

const Targets = () => {

    const [ sensorId, setSensorId] = useState(2);
    const [ objective, setObjective] = useState(0);
    const [ graphicTitle, setGraphicTitle] = useState('Power');
    const [ lineColor, setLineColor] = useState('#FFD700');

    const handlePowerGraphic = () => {
        setSensorId(1);
        setGraphicTitle('Power');
        setLineColor('#FFD700');
        setObjective(23);
    }

    const handleTemperatureGraphic = () => {
        setSensorId(2);
        setGraphicTitle('Temperature');
        setLineColor('#FF8C00');
        setObjective(17.5);
    }

    const handleHumidicityGraphic = () => {
        setSensorId(3);
        setGraphicTitle('Humidicity');
        setLineColor('#00BFFF');
        setObjective(12.5);
    }

    return (
        <div>
            <div>
                <button type='button' onClick={() => {handlePowerGraphic()}}>Power</button>
                <button type='button' onClick={() => {handleTemperatureGraphic()}}>Temperature</button>
                <button type='button' onClick={() => {handleHumidicityGraphic()}}>Humidicity</button>
            </div>
            <EmissionGraphic sensorId={sensorId} objective={objective} graphicTitle={graphicTitle} lineColor={lineColor} />
        </div>
    );
}

export default Targets;