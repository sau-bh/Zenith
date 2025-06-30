import { useEffect, useRef, useState } from "react"
import './Timer.css'

export default function Timer() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 1000);
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        console.log(startTimeRef.current);
    }

    const stopTimer = () => {
        setIsRunning(false);
    }

    const resetTimer = () => {
        setElapsedTime(0);
        setIsRunning(false);
    }

    const formatTime = () => {

        let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
        let min = Math.floor(elapsedTime / (1000 * 60) % 60);
        let sec = Math.floor((elapsedTime / 1000) % 60);
        let ms = Math.floor((elapsedTime/100));

        hrs = String(hrs).padStart(2,"0");
        min = String(min).padStart(2,"0");
        sec = String(sec).padStart(2,"0");
        return `${hrs} : ${min} : ${sec}`;
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