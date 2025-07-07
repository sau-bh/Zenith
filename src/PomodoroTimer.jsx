import "./PomodoroTimer.css"

import BreakTimer from "./BreakTimer";
import FocusTimer from "./FocusTimer";
import { useState } from "react";

export default function PomodoroTimer({ customTime, customBreakTime }) {

    const convertToMilliseconds = (time) => {
        return ((time.hrs * 60 * 60) + (time.min * 60) + time.sec) * 1000;
    };

    // Break pomodoro toggle
    const [isPomodoro, setIsPomodoro] = useState(true);

    const defaultFocusTime = convertToMilliseconds(customTime);
    const defaultBreakTime = convertToMilliseconds(customBreakTime);

    return (
        <>
            {isPomodoro ? (
                <FocusTimer
                    duration={defaultFocusTime}
                    onComplete={() => setIsPomodoro(false)}
                ></FocusTimer>
            ) : (
                <BreakTimer
                    duration={defaultBreakTime}
                    onComplete={() => setIsPomodoro(false)}
                ></BreakTimer>
            )}

        </>
    )
}
