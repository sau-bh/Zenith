import "./PomodoroTimer.css"

import BreakTimer from "./BreakTimer";
import FocusTimer from "./FocusTimer";
import { useState } from "react";

export default function PomodoroTimer({ customTime, customBreakTime }) {

    const convertToMilliseconds = (time) => {
        return ((time.hrs * 60 * 60) + (time.min * 60) + time.sec) * 1000;
    };

    //pomodoro toggle
    const [isPomodoro, setIsPomodoro] = useState(true);

    const defaultFocusTime = convertToMilliseconds(customTime);
    const defaultBreakTime = convertToMilliseconds(customBreakTime);

    const handleSessionComplete = () => {
        setIsPomodoro((prev) => !prev);
    }

    return (
        <>
            {isPomodoro ? (
                <FocusTimer
                    duration={defaultFocusTime}
                    onComplete={handleSessionComplete}
                    autoStart={true}
                ></FocusTimer>
            ) : (
                <BreakTimer
                    duration={defaultBreakTime}
                    onComplete={handleSessionComplete}
                    autoStart={true}
                ></BreakTimer>
            )}

        </>
    )
}
