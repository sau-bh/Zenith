import { useEffect, useRef, useState } from "react"
import './Timer.css'

export default function Timer() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

    }, [isRunning]);

    const startTimer = () => {

    }

    const stopTimer = () => {

    }

    const resetTimer = () => {

    }

    const formatTime = () => {
        return `00:00:00`;
    }


    return (
        <div className="stopWatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={startTimer} className="start-btn">Start</button>
                <button onClick={stopTimer} className="stop-btn">Stop</button>
                <button onClick={resetTimer} className="reset-btn">Reset</button>
            </div>
        </div>
    )
}