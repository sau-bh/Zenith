import { useEffect, useRef, useState } from "react"
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./PomodoroTimer.css"

export default function PomodoroTimer({ customTime, customBreakTime }) {

    const convertToMilliseconds = (time) => {
        return ((time.hrs * 60 * 60) + (time.min * 60) + time.sec) * 1000;
    };

    // Break pomodoro toggle
    const [isPomodoro, setIsPomodoro] = useState(true);

    const completeSound = useRef(new Audio("level-win-6416.mp3"));

    const [defaultTime, setDefaultTime] = useState(convertToMilliseconds(customTime));
    const [defaultBreakTime, setDefaultBreakTime] = useState(convertToMilliseconds(customBreakTime));

    const [remainingTime, setRemainingTime] = useState(defaultTime);
    const [remainingBreakTime, setRemainingBreakTime] = useState(defaultBreakTime);

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
        if (!isRunning) {
            return;
        }

        const interval = setInterval(() => {
            if (isPomodoro) {
                setRemainingTime(
                    prevTime => {
                        if (prevTime < 1000) {
                            clearInterval(intervalIdRef.current);
                            handleSessionComplete();
                            return 0;
                        }
                        return prevTime - 1000;
                    })
            } else {
                setRemainingBreakTime(
                    prevTime => {
                        if (prevTime < 1000) {
                            clearInterval(intervalIdRef.current);
                            handleSessionComplete();
                            return 0;
                        }
                        return prevTime - 1000;
                    }
                )
            }
        }, 1000);

        return () => clearInterval(interval);

    }, [isRunning, isPomodoro]);

    // Handel complete for timer toggle
    const handleSessionComplete = () => {
        completeSound.current.play();
        hasPlayedMusic.current = false;

        setIsPomodoro(prev => !prev);
        setIsRunning(true);

        if (isPomodoro) {
            setRemainingBreakTime(defaultBreakTime);
        } else {
            setRemainingTime(defaultTime);
        }

    }

    // Timer controllers
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
        setRemainingBreakTime(defaultBreakTime);
        setIsPomodoro(true);
        hasPlayedMusic.current = false;
    };

    // Displaying time on clock
    const displayFormatedTime = () => {

        const time = isPomodoro ? remainingTime : remainingBreakTime;

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

    // For circular progress bar
    const totalTime = isPomodoro ? defaultTime : defaultBreakTime;
    const timeLeft = isPomodoro ? remainingTime : remainingBreakTime;
    const percentageTime = ((totalTime - timeLeft) / totalTime) * 100;


    return (
        <div className="pomodoro-container">
            <h2>{isPomodoro ? "Focus" : "Break Time"}</h2>
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
