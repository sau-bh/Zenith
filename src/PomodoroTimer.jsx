import { useEffect, useRef, useState } from "react"

export default function PomodoroTimer() {

    const [isRunning, setIsRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(25 * 60 * 1000);
    const intervalIdRef = useRef(null);


    useEffect(() => {
        if (isRunning) {
            setInterval(() => {
                setRemainingTime(prevTime => {
                    if (prevTime < 1000) {
                        clearInterval(intervalIdRef.current);
                        setIsRunning(false);
                        return 0;
                    }
                    return prevTime - 1000;
                });
            }, 1000);
        }
        return clearInterval(intervalIdRef.current);
    }, [isRunning]);

    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        setIsRunning(false);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setRemainingTime(25 * 60 * 1000);
    };

    const displayFormatedTime = () => {
        const hrs = Math.floor(remainingTime / (1000 * 60 * 60));
        const min = Math.floor((remainingTime / (1000 * 60)) % 60);
        const sec = Math.floor((remainingTime / 1000) % 60);

        if (hrs > 0) {
            return `${hrs}:${min}:${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    }

    return (
        <div className="pomodoro-container">
            <div className="display">
                {displayFormatedTime()}
            </div>
            <div className="controlers">
                <button onClick={startTimer} className="start-btn">Start</button>
                <button onClick={startTimer} className="stop-btn">Stop</button>
                <button onClick={resetTimer} className="reset-btn">Reset</button>
            </div>
        </div>
    )
}