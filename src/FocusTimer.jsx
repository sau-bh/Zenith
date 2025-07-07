import { useEffect, useRef, useState } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function FocusTimer({ duration, onComplete }) {

    const completeSound = useRef(new Audio("level-win-6416.mp3"));
    const [remainingTime, setRemainingTime] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef(null);

    useEffect(() => {
        setRemainingTime(duration);
    }, [duration]);



    useEffect(() => {
        if (!isRunning) {
            return;
        }

        const interval = setInterval(() => {
            setRemainingTime(
                prevTime => {
                    if (prevTime < 1000) {
                        clearInterval(intervalRef.current);
                        completeSound.current.play();
                        onComplete();
                        return 0;
                    }
                    return prevTime - 1000;
                });
        }, 1000);

        return () => clearInterval(intervalRef.current);

    }, [isRunning, onComplete]);

    const startTimer = () => {
        setIsRunning(true);
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setRemainingTime(duration);
    };

    // Displaying time on clock
    const displayFormatedTime = () => {

        const time = remainingTime;

        let hrs = Math.floor(time / (1000 * 60 * 60));
        let min = Math.floor((time / (1000 * 60)) % 60);
        let sec = Math.floor((time / 1000) % 60);

        hrs = String(hrs).padStart(2, "0");
        min = String(min).padStart(2, "0");
        sec = String(sec).padStart(2, "0");

        if (hrs > 0) {
            return `${hrs}:${min}:${sec}`;
        } else {
            return `${min}:${sec}`;
        }
    }

    const totalTime = duration;
    const timeLeft = remainingTime;
    const percentageTime = ((totalTime - timeLeft) / totalTime) * 100;


    return (
        <>
            <div className="pomodoro-container">
                <CircularProgressbar
                    value= {percentageTime}
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
        </>
    );
}