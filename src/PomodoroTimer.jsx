import "./PomodoroTimer.css"

import BreakTimer from "./BreakTimer";
import FocusTimer from "./FocusTimer";

export default function PomodoroTimer({ customTime, customBreakTime }) {

    // Break pomodoro toggle
    const [isPomodoro, setIsPomodoro] = useState(true); 
    const [defaultBreakTime, setDefaultBreakTime] = useState(convertToMilliseconds(customBreakTime)); 
    const [remainingBreakTime, setRemainingBreakTime] = useState(defaultBreakTime);

    

    return (
        <>
            <FocusTimer customTime={customTime}></FocusTimer>
            <BreakTimer></BreakTimer>
        </>
    )
}
