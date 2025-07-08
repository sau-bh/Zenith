import { useState } from "react"
import Navbar from "./Navbar"
import PomodoroTimer from "./PomodoroTimer"

export default function HomePage(){

    let [customTime, setCustomTime] = useState({hrs:0,min:0,sec:10});
    let [customBreakTime, setCustomBreakTime] = useState({breakHrs:0,breakMin:0,breakSec:10});

    return(
        <>
            <Navbar setCustomTime={setCustomTime} setCustomBreakTime={setCustomBreakTime} ></Navbar>
            <PomodoroTimer customTime={customTime} customBreakTime={customBreakTime}></PomodoroTimer>
        </>
    )
}