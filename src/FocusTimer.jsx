import { useEffect, useRef, useState } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function FocusTimer({ duration, onComplete, autoStart }) {

    const completeSound = useRef(new Audio("level-win-6416.mp3"));
    const [remainingTime, setRemainingTime] = useState(duration);
    const [isRunning, setIsRunning] = useState(false);
    const [hasCompleted, setHasCompleted] = useState(false);

    const intervalRef = useRef(null);

    useEffect(() => {
        setRemainingTime(duration);
        setIsRunning(false || autoStart);
        setHasCompleted(false);
    }, [duration,autoStart]);



    useEffect(() => {
        if (!isRunning || hasCompleted) {
            return;
        }

        intervalRef.current = setInterval(() => {
            setRemainingTime(
                prevTime => {
                    if (prevTime < 1000) {
                        clearInterval(intervalRef.current);
                        completeSound.current.play();
                        setIsRunning(false);
                        setHasCompleted(true);
                        setTimeout(()=>{
                            onComplete();
                        },0);
                        return 0;
                    }
                    return prevTime - 1000;
                });
        }, 1000);

        return () => { if (intervalRef.current) clearInterval(intervalRef.current)};

    }, [isRunning, onComplete,hasCompleted]);

    const startTimer = () => {
        if(remainingTime>0 && !hasCompleted){
            setIsRunning(true);
        }
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setRemainingTime(duration);
        setHasCompleted(false);
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