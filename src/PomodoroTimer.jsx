import { useEffect, useRef, useState } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PomodoroTimer.css"

export default function PomodoroTimer({ customTime }) {

    const convertToMilliseconds = (time) => {
        return ((time.hrs * 60 * 60) + (time.min * 60) + time.sec) * 1000;
    };


    const completeSound = useRef(new Audio("level-win-6416.mp3"));

    const [defaultTime, setDefaultTime] = useState(convertToMilliseconds(customTime));
    const [remainingTime, setRemainingTime] = useState(defaultTime);
    const [isRunning, setIsRunning] = useState(false);

    const intervalIdRef = useRef(null);
    const hasPlayedMusic = useRef(false);

    useEffect(() => {
        const newTime = convertToMilliseconds(customTime);
        setDefaultTime(newTime);
        setRemainingTime(newTime);
        setIsRunning(false); // Optional: stop timer on time change
        hasPlayedMusic.current = false;
    }, [customTime]);


    useEffect(() => {
        if (isRunning && remainingTime > 0) {
            intervalIdRef.current = setInterval(() => {
                setRemainingTime(
                    prevTime => {
                        if (prevTime < 1000) {
                            clearInterval(intervalIdRef.current);
                            setIsRunning(false);
                            return 0;
                        }
                        return prevTime - 1000;
                    });
            }, 1000);
        }
        return () => clearInterval(intervalIdRef.current);
    }, [isRunning]);

    // For completion of timer
    useEffect(() => {
        if (hasPlayedMusic && remainingTime === 0) {
            completeSound.current.play();
            hasPlayedMusic.current = false;
        }
    }, [remainingTime]);

    const startTimer = () => {
        setIsRunning(true);
        hasPlayedMusic.current = true;
    }

    const stopTimer = () => {
        clearInterval(intervalIdRef.current);
        setIsRunning(false);
    }

    const resetTimer = () => {
        setIsRunning(false);
        setRemainingTime(defaultTime);
        hasPlayedMusic.current = false;
    };

    const displayFormatedTime = () => {
        let hrs = Math.floor(remainingTime / (1000 * 60 * 60));
        let min = Math.floor((remainingTime / (1000 * 60)) % 60);
        let sec = Math.floor((remainingTime / 1000) % 60);

        hrs = String(hrs).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");

        if (hrs > 0) {
            return `${hrs}:${min}:${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    }
    const totalTime = defaultTime;
    const percentageTime = ((totalTime - remainingTime) / totalTime) * 100;

    return (

        <div className="pomodoro-container">
            <CircularProgressbar
                value={percentageTime}
                text={displayFormatedTime()}
                styles={buildStyles({
                    pathColor: "rgb(60, 62, 186)",
                    trailColor: "rgb(180, 181, 215)",
                })}></CircularProgressbar>
            <div className="controlers">
                <button onClick={startTimer} className="start-btn" disabled={isRunning} >Start</button>
                <button onClick={stopTimer} className="stop-btn" disabled={!isRunning} >Stop</button>
                <button onClick={resetTimer} className="reset-btn">Reset</button>
            </div>
        </div >
    )
}
